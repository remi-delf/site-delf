// Moteur de la page « Production écrite ».
// Sans ?sujet= : liste des sujets. Avec ?sujet=1… : charge data/a2/ecrite_01.js…
// L'élève écrit ses deux textes (compteur de mots, 60 minimum),
// copie le prompt, le colle dans une IA (Claude, ChatGPT),
// puis note ici le score sur 25 donné par l'IA.
// Les brouillons sont gardés dans le navigateur, au cas où la page se ferme.

(function () {
  var EPREUVE = "a2-ecrite";
  var NB_SUJETS = (window.LISTE_SUJETS && window.LISTE_SUJETS.ecrite) || 0;
  var MIN = 60;
  var fmt = Progression.fmt;
  var NOMS_LANGUES = { en: "anglais", zh: "chinois (simplifié)", vi: "vietnamien" };
  var n = parseInt(new URLSearchParams(location.search).get("sujet"), 10);

  if (!n) {
    document.getElementById("vue-liste").hidden = false;
    if (Object.keys(Progression.lire(EPREUVE)).length) document.getElementById("rappel").open = false;
    Progression.afficherListe(document.getElementById("liste"), EPREUVE, NB_SUJETS);
    return;
  }

  document.getElementById("vue-sujet").hidden = false;
  document.getElementById("rappel").open = false;
  var retour = document.getElementById("retour");
  retour.href = "production-ecrite.html";
  retour.textContent = "← Liste des sujets";

  var script = document.createElement("script");
  script.src = "../data/a2/ecrite_" + (n < 10 ? "0" : "") + n + ".js";
  script.onload = function () { if (window.SUJET) demarrer(window.SUJET); else erreur(); };
  script.onerror = erreur;
  document.head.appendChild(script);

  function erreur() {
    document.getElementById("vue-sujet").innerHTML = '<div class="encadre"><p>Le sujet n° ' + n + " n'existe pas encore.</p></div>";
  }

  // Comme à l'examen : un mot = ce qui est entre deux espaces.
  function compter(texte) {
    return texte.split(/\s+/).filter(function (m) { return /[0-9A-Za-zÀ-ÿœŒ]/.test(m); }).length;
  }

  function lireBrouillon(i) {
    try { return localStorage.getItem("delf-brouillon-a2-ecrite-" + n + "-" + i) || ""; } catch (e) { return ""; }
  }
  function garderBrouillon(i, texte) {
    try { localStorage.setItem("delf-brouillon-a2-ecrite-" + n + "-" + i, texte); } catch (e) {}
  }

  function demarrer(sujet) {
    document.getElementById("sous-titre").textContent = "Sujet d'entraînement n° " + sujet.numero;
    document.title = "DELF A2 – Production écrite – Sujet " + sujet.numero;

    var suivant = document.getElementById("suivant");
    if (n < NB_SUJETS) suivant.href = "?sujet=" + (n + 1);
    else { suivant.hidden = true; document.getElementById("dernier").hidden = false; }

    // ----- Les deux exercices -----
    var zones = [];
    document.getElementById("exercices").innerHTML = sujet.exercices.map(function (x, i) {
      return '<div class="carte"><h3>' + x.titre + ' <span class="pts">12,5 points</span></h3>' +
        '<p class="consigne">' + x.consigne + "</p>" +
        '<label class="cache" for="texte' + i + '">Votre texte pour l\'' + x.titre.toLowerCase() + "</label>" +
        '<textarea id="texte' + i + '" rows="9" spellcheck="false" placeholder="Écrivez votre texte ici…"></textarea>' +
        '<p class="compteur" id="compteur' + i + '"></p></div>';
    }).join("");

    sujet.exercices.forEach(function (x, i) {
      var zone = document.getElementById("texte" + i);
      var compteur = document.getElementById("compteur" + i);
      zone.value = lireBrouillon(i);
      function maj() {
        var m = compter(zone.value);
        compteur.className = "compteur" + (m >= MIN ? " assez" : "");
        compteur.textContent = m + " mot" + (m > 1 ? "s" : "") + (m >= MIN ? " ✔" : " (60 minimum)");
      }
      zone.addEventListener("input", function () { maj(); garderBrouillon(i, zone.value); });
      maj();
      zones.push(zone);
    });

    // ----- Langue des explications -----
    var langue = window.Langues ? Langues.lire() : "fr";
    document.getElementById("info-langue").innerHTML = NOMS_LANGUES[langue]
      ? "L'IA expliquera aussi vos erreurs en <b>" + NOMS_LANGUES[langue] + "</b>. Pour changer de langue, allez sur l'accueil."
      : "Vous pouvez choisir sur l'accueil une langue (anglais, chinois, vietnamien) : l'IA expliquera aussi vos erreurs dans cette langue.";

    // ----- Prompt -----
    function prompt() {
      var t = zones.map(function (z) { return z.value.trim(); });
      var phraseLangue = NOMS_LANGUES[langue]
        ? "\n   Après chaque explication en français, donne aussi la même explication en " + NOMS_LANGUES[langue] + ", pour que je comprenne bien."
        : "";
      // split/join : le texte de l'élève est recopié tel quel, même avec des caractères comme « $ ».
      var valeurs = {
        "{{SUJET1}}": sujet.exercices[0].consigne, "{{MOTS1}}": String(compter(t[0])), "{{TEXTE1}}": t[0],
        "{{SUJET2}}": sujet.exercices[1].consigne, "{{MOTS2}}": String(compter(t[1])), "{{TEXTE2}}": t[1],
        "{{LANGUE}}": phraseLangue, "{{GRILLE}}": window.GRILLES.ecrite
      };
      var resultat = window.PROMPT_ECRITE;
      Object.keys(valeurs).forEach(function (cle) { resultat = resultat.split(cle).join(valeurs[cle]); });
      return resultat;
    }

    var copie = document.getElementById("copie");
    var voir = document.getElementById("texte-prompt");
    document.getElementById("copier").addEventListener("click", function () {
      var vides = zones.filter(function (z) { return !z.value.trim(); }).length;
      if (vides) {
        copie.innerHTML = '<span class="ko">Écrivez vos deux textes avant de copier le prompt.</span>';
        return;
      }
      var courts = zones.map(function (z, i) { return compter(z.value) < MIN ? "le texte " + (i + 1) : null; }).filter(Boolean);
      var alerte = courts.length
        ? '<br><span class="ko">Attention : ' + courts.join(" et ") + " " + (courts.length > 1 ? "ont" : "a") + " moins de 60 mots. À l'examen, vous perdez des points.</span>"
        : "";
      var texte = prompt();
      voir.value = texte;
      function ok() { copie.innerHTML = '<span class="ok">✔ Prompt copié !</span> Collez-le maintenant dans Claude ou ChatGPT.' + alerte; }
      function secours() {
        voir.closest("details").open = true;
        voir.focus(); voir.select();
        var reussi = false;
        try { reussi = document.execCommand("copy"); } catch (e) {}
        if (reussi) ok();
        else copie.innerHTML = '<span class="ko">La copie automatique ne marche pas ici.</span> Le texte est sélectionné ci-dessous : copiez-le à la main.' + alerte;
      }
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(texte).then(ok, secours);
      else secours();
    });
    document.querySelector(".voir-prompt").addEventListener("toggle", function () { voir.value = prompt(); });

    // ----- Enregistrer la note donnée par l'IA -----
    var note = document.getElementById("note");
    var deja = Progression.lire(EPREUVE)[n];
    if (deja) note.value = fmt(deja.score);
    document.getElementById("enregistrer").addEventListener("click", function () {
      var v = parseFloat(String(note.value).replace(",", "."));
      var msg = document.getElementById("msg-note");
      if (isNaN(v) || v < 0 || v > 25) {
        msg.innerHTML = '<span class="ko">Écrivez une note entre 0 et 25.</span>';
        return;
      }
      v = Math.round(v * 2) / 2; // au demi-point
      Progression.enregistrer(EPREUVE, n, v, 25);
      msg.innerHTML = '<span class="ok">✔ Note enregistrée : ' + fmt(v) + " / 25.</span> " +
        (v >= 5 ? "" : "Attention : il faut au moins 5 sur 25 dans chaque épreuve.");
      document.getElementById("fin").hidden = false;
    });
  }
})();
