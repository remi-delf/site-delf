// Page d'une série d'entraînement : entrainement/serie.html?niveau=a2&id=lecture-01
// Charge data/entrainement/<niveau>/<id>.js (window.SERIE), puis affiche, selon la série :
// - des exercices (items), un par un, avec correction immédiate et explication ;
// - ou une production écrite (SERIE.redaction) ;
// - ou une production orale (SERIE.parole).
(function () {
  var E = Entr, esc = E.esc;
  var params = new URLSearchParams(location.search);
  var niveau = params.get("niveau") || "a2";
  var id = params.get("id") || "";
  var app = document.getElementById("app");

  if (!/^[a-z0-9]+$/.test(niveau) || !/^[a-z0-9-]+$/.test(id)) return erreur();
  var script = document.createElement("script");
  script.src = "../data/entrainement/" + niveau + "/" + id + ".js";
  script.onload = function () { window.SERIE ? demarrer(window.SERIE) : erreur(); };
  script.onerror = erreur;
  document.head.appendChild(script);

  function erreur() { app.innerHTML = '<div class="encadre"><p>Cette série n\'existe pas encore.</p></div>'; }
  var cleScore = niveau + "-" + id;

  // ---------- En-tête commun ----------
  function entete(S) {
    document.title = S.titre + " – Apprendre et s'entraîner";
    var t = E.traduction(S.rubrique);
    return "<h1>" + esc(E.fr(S.rubrique)) + (t ? '<span class="tr" lang="' + E.langue() + '">' + esc(t) + "</span>" : "") + "</h1>" +
      '<p class="sub">Niveau ' + niveau.toUpperCase() + " · " + esc(S.titre) + "</p>" +
      '<div class="encadre consigne-serie"><p>' + esc(E.fr(S.consigne)) + "</p>" + E.spanTraduction(S.consigne) +
      (E.traduction(S.consigne) ? '<p><button type="button" class="lien-traduction" id="basculer">' + esc(E.TEXTES.voir.fr) + "</button></p>" : "") +
      "</div>";
  }
  // « Voir dans ma langue » : montre ou cache toutes les traductions de consignes de la page.
  var traductionsVisibles = false;
  function brancherTraduction() {
    var b = document.getElementById("basculer");
    if (!b) return;
    b.addEventListener("click", function () {
      traductionsVisibles = !traductionsVisibles;
      majTraductions();
      b.textContent = traductionsVisibles ? E.TEXTES.masquer.fr : E.TEXTES.voir.fr;
    });
  }
  function majTraductions() {
    document.querySelectorAll(".traduction-consigne").forEach(function (s) { s.hidden = !traductionsVisibles; });
  }

  // ---------- Démarrage ----------
  function demarrer(S) {
    if (S.redaction) return redaction(S);
    if (S.parole) return parole(S);
    exercices(S);
  }

  // ---------- Exercices un par un ----------
  function exercices(S) {
    // Un type inconnu est simplement sauté.
    var items = (S.items || []).filter(function (it) {
      if (E.types[it.type]) return true;
      if (window.console) console.info("Type d'exercice inconnu, sauté :", it.type);
      return false;
    });
    var accentsSerie = !!S.accents;
    var n = 0, score = 0, max = items.reduce(function (a, it) { return a + (it.p || 1); }, 0);

    app.innerHTML = entete(S) + documentHtml(S) + '<div id="zone"></div>';
    brancherTraduction();
    brancherAudio(S);
    afficherItem();

    function afficherItem() {
      var zone = document.getElementById("zone");
      if (n >= items.length) return fin();
      var it = items[n], type = E.types[it.type];
      var numero = " " + (n + 1) + " / " + items.length, etiquette = E.bilingue("exercice");
      etiquette = etiquette.indexOf("<span") >= 0 ? etiquette.replace("<span", numero + "<span") : etiquette + numero;
      zone.innerHTML = '<div class="progres">' + etiquette +
        '<div class="barre"><span style="width:' + Math.round(100 * n / items.length) + '%"></span></div></div>' +
        '<div class="exercice">' +
        (it.question ? '<p class="question">' + esc(it.question) + "</p>" : "") +
        '<p class="type-consigne">' + esc(type.consigne.fr) + " " + E.spanTraduction(type.consigne) + "</p>" +
        '<div class="reponse"></div>' +
        '<div class="actions"><button type="button" id="verifier">' + E.bilingue("verifier") + "</button></div>" +
        '<div class="retour-exercice" aria-live="polite"></div></div>';
      majTraductions();
      var controle = type.afficher(it, zone.querySelector(".reponse"), "q" + n, it.accents !== undefined ? !!it.accents : accentsSerie);
      var retour = zone.querySelector(".retour-exercice");
      document.getElementById("verifier").addEventListener("click", function () {
        var res = controle.verifier();
        if (!res) { retour.innerHTML = '<p class="ko">' + E.bilingue("repondre") + "</p>"; return; }
        if (res.juste) score += it.p || 1;
        var expl = E.fr(it.e), trExpl = E.traduction(it.e);
        retour.innerHTML =
          (res.juste ? '<p class="ok">✔ ' + E.bilingue("bonne") + "</p>"
                     : '<p class="ko">✘ ' + E.bilingue("fausse") + "</p><p>" + esc(E.TEXTES.laBonne.fr) + " <b>" + esc(res.bonne) + "</b></p>") +
          (expl ? "<p>" + esc(expl) + "</p>" : "") +
          (trExpl ? '<p class="tr" lang="' + E.langue() + '">' + esc(trExpl) + "</p>" : "");
        this.parentNode.innerHTML = '<button type="button" id="suivant">' + E.bilingue("suivant") + "</button>";
        var texteAudio = document.getElementById("voir-script");
        if (texteAudio) texteAudio.disabled = false;
        document.getElementById("suivant").addEventListener("click", function () { n++; afficherItem(); window.scrollTo({ top: 0, behavior: "smooth" }); });
      });
    }

    function fin() {
      E.garderScore(cleScore, score, max);
      document.getElementById("zone").innerHTML =
        '<div class="encadre fin-serie"><p>' + E.bilingue("fin") + '</p><p class="score-final">' + score + " / " + max + "</p>" +
        '<div class="actions" style="justify-content:center"><button type="button" id="encore">' + E.bilingue("recommencer") + "</button>" +
        '<a class="bouton" href="index.html">' + E.bilingue("retour") + "</a></div></div>";
      document.getElementById("encore").addEventListener("click", function () { n = 0; score = 0; afficherItem(); });
      var s = document.querySelector(".script-audio");
      if (s) s.hidden = false;
    }
  }

  // ---------- Document de lecture, ou audio ----------
  function documentHtml(S) {
    if (S.document) {
      return '<div class="document-entr">' + (S.document.titre ? "<h3>" + esc(S.document.titre) + "</h3>" : "") +
        S.document.texte.split("\n").map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + "</div>";
    }
    if (S.audio) {
      var voix = "speechSynthesis" in window && window.SpeechSynthesisUtterance;
      return '<div class="document-entr"><h3>' + esc(S.audio.titre || "Audio") + "</h3>" +
        (voix ? '<p><button type="button" id="ecouter">' + E.bilingue("ecouter") + '</button></p>' +
                '<p class="aide">Voix de synthèse du navigateur, en attendant les vrais enregistrements. Vous pouvez réécouter autant de fois que vous voulez.</p>'
              : '<p class="ko">' + E.bilingue("audioBientot") + "</p>") +
        '<p><button type="button" class="secondaire" id="voir-script"' + (voix ? " disabled" : "") + ">" + E.bilingue("texteAudio") + "</button></p>" +
        '<div class="script-audio"' + (voix ? " hidden" : "") + ">" +
        S.audio.script.map(function (l) { return "<p>" + esc(l) + "</p>"; }).join("") + "</div></div>";
    }
    return "";
  }
  function brancherAudio(S) {
    var b = document.getElementById("ecouter");
    if (b) b.addEventListener("click", function () {
      var synth = window.speechSynthesis;
      synth.cancel();
      var voixFr = synth.getVoices().filter(function (v) { return /^fr/i.test(v.lang); })[0];
      S.audio.script.forEach(function (ligne) {
        var u = new SpeechSynthesisUtterance(ligne.replace(/^–\s*[^:]+:\s*/, ""));
        u.lang = "fr-FR"; u.rate = 0.85;
        if (voixFr) u.voice = voixFr;
        synth.speak(u);
      });
    });
    var v = document.getElementById("voir-script");
    if (v) v.addEventListener("click", function () { document.querySelector(".script-audio").hidden = false; });
  }

  // ---------- Liste de points à cocher soi-même ----------
  function points(liste) {
    return '<h2>' + E.bilingue("points") + '</h2><ul class="liste-points">' + liste.map(function (p, i) {
      return '<li><label><input type="checkbox"> <span>' + esc(E.fr(p)) + " " + E.spanTraduction(p) + "</span></label></li>";
    }).join("") + "</ul>";
  }

  // ---------- Production écrite ----------
  function redaction(S) {
    var R = S.redaction, min = R.minimum || 60;
    app.innerHTML = entete(S) +
      '<div class="carte redaction"><textarea id="texte" rows="10" placeholder="Écrivez votre texte ici…"></textarea>' +
      '<p class="compteur-entr" id="compteur"></p>' +
      '<div class="actions"><button type="button" id="sauver">' + E.bilingue("sauver") + '</button></div><p id="msg" aria-live="polite"></p></div>' +
      points(R.points) +
      '<p class="actions"><a class="bouton" href="index.html">' + E.bilingue("retour") + "</a></p>";
    brancherTraduction();
    var zone = document.getElementById("texte"), compteur = document.getElementById("compteur");
    zone.value = E.lireBrouillon(cleScore);
    function compter() {
      var m = zone.value.split(/\s+/).filter(function (w) { return /[0-9A-Za-zÀ-ÿœŒ]/.test(w); }).length;
      compteur.className = "compteur-entr" + (m >= min ? " assez" : "");
      compteur.textContent = m + " " + E.TEXTES.mots.fr + (m >= min ? " ✔" : " (" + min + " minimum)");
    }
    zone.addEventListener("input", compter);
    compter();
    document.getElementById("sauver").addEventListener("click", function () {
      E.garderBrouillon(cleScore, zone.value);
      document.getElementById("msg").innerHTML = '<span class="ok">✔ ' + E.bilingue("sauve") + "</span>";
    });
  }

  // ---------- Production orale ----------
  function parole(S) {
    var P = S.parole, duree = P.duree || 120;
    app.innerHTML = entete(S) +
      '<div class="carte"><h3>' + esc(E.fr(P.situation)) + "</h3>" + E.spanTraduction(P.situation) + "</div>" +
      '<h2>' + E.bilingue("phrasesUtiles") + '</h2><ul class="phrases-utiles">' +
      P.phrases.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul>" +
      '<details class="carte"><summary>' + esc(E.TEXTES.modele.fr) + "</summary>" +
      P.modele.split("\n").map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + "</details>" +
      '<h2>' + E.bilingue("minuteur") + '</h2><div class="carte"><p class="minuteur" id="chrono"></p>' +
      '<div class="actions" style="justify-content:center"><button type="button" id="chrono-bouton">' + esc(E.TEXTES.demarrer.fr) + "</button></div></div>" +
      points(P.points) +
      '<p class="actions"><a class="bouton" href="index.html">' + E.bilingue("retour") + "</a></p>";
    brancherTraduction();
    var reste = duree, minuterie = null, aff = document.getElementById("chrono"), bouton = document.getElementById("chrono-bouton");
    function maj() { aff.textContent = Math.floor(reste / 60) + ":" + ("0" + reste % 60).slice(-2); }
    bouton.addEventListener("click", function () {
      if (minuterie) { clearInterval(minuterie); minuterie = null; reste = duree; maj(); bouton.textContent = E.TEXTES.demarrer.fr; return; }
      bouton.textContent = E.TEXTES.arreter.fr;
      minuterie = setInterval(function () {
        reste--; maj();
        if (reste <= 0) { clearInterval(minuterie); minuterie = null; reste = duree; aff.textContent = "Terminé !"; bouton.textContent = E.TEXTES.demarrer.fr; }
      }, 1000);
    });
    maj();
  }
})();
