// Moteur de la page « Production orale ».
// Sans ?sujet= : liste des sujets. Avec ?sujet=1… : charge data/a2/orale_01.js…
// L'élève choisit ses sujets, peut lancer les 10 minutes de préparation,
// copie le prompt, le colle dans une IA (Claude, ChatGPT) en mode vocal,
// puis note ici le score sur 25 donné par l'IA.

(function () {
  var EPREUVE = "a2-orale";
  var NB_SUJETS = (window.LISTE_SUJETS && window.LISTE_SUJETS.orale) || 0;
  var fmt = Progression.fmt;
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
  retour.href = "production-orale.html";
  retour.textContent = "← Liste des sujets";

  var script = document.createElement("script");
  script.src = "../data/a2/orale_" + (n < 10 ? "0" : "") + n + ".js";
  script.onload = function () { if (window.SUJET) demarrer(window.SUJET); else erreur(); };
  script.onerror = erreur;
  document.head.appendChild(script);

  function erreur() {
    document.getElementById("vue-sujet").innerHTML = '<div class="encadre"><p>Le sujet n° ' + n + " n'existe pas encore.</p></div>";
  }

  function choix(nom, sujets) {
    return sujets.map(function (s, j) {
      return '<label><input type="radio" name="' + nom + '" value="' + j + '"' + (j === 0 ? " checked" : "") + "> " +
        "<span><b>Sujet " + "AB"[j] + ".</b> " + s + "</span></label>";
    }).join("");
  }

  function demarrer(sujet) {
    document.getElementById("sous-titre").textContent = "Sujet d'entraînement n° " + sujet.numero;
    document.title = "DELF A2 – Production orale – Sujet " + sujet.numero;
    document.getElementById("choix-monologue").innerHTML = choix("monologue", sujet.monologue);
    document.getElementById("choix-interaction").innerHTML = choix("interaction", sujet.interaction);

    var suivant = document.getElementById("suivant");
    if (n < NB_SUJETS) suivant.href = "?sujet=" + (n + 1);
    else { suivant.hidden = true; document.getElementById("dernier").hidden = false; }

    // ----- Préparation : 10 minutes -----
    var boutonPrepa = document.getElementById("prepa");
    var affichage = document.getElementById("chrono");
    var minuterie = null, reste = 600;
    function majChrono() {
      affichage.textContent = Math.floor(reste / 60) + ":" + ("0" + reste % 60).slice(-2);
    }
    boutonPrepa.addEventListener("click", function () {
      if (minuterie) {
        clearInterval(minuterie); minuterie = null; reste = 600; majChrono();
        boutonPrepa.textContent = "▶ Commencer les 10 minutes";
        return;
      }
      boutonPrepa.textContent = "■ Arrêter";
      minuterie = setInterval(function () {
        reste--; majChrono();
        if (reste <= 0) {
          clearInterval(minuterie); minuterie = null; reste = 600;
          affichage.textContent = "Terminé !";
          boutonPrepa.textContent = "▶ Recommencer les 10 minutes";
        }
      }, 1000);
    });
    majChrono();

    // ----- Prompt -----
    var zone = document.getElementById("texte-prompt");
    function prompt() {
      var m = +document.querySelector('input[name="monologue"]:checked').value;
      var i = +document.querySelector('input[name="interaction"]:checked').value;
      return window.PROMPT_ORALE
        .replace("{{MONOLOGUE}}", sujet.monologue[m])
        .replace("{{INTERACTION}}", sujet.interaction[i]);
    }
    function majPrompt() { zone.value = prompt(); }
    document.querySelectorAll('input[name="monologue"], input[name="interaction"]').forEach(function (r) {
      r.addEventListener("change", majPrompt);
    });
    majPrompt();

    var copie = document.getElementById("copie");
    document.getElementById("copier").addEventListener("click", function () {
      var texte = prompt();
      function ok() { copie.innerHTML = '<span class="ok">✔ Prompt copié !</span> Collez-le maintenant dans Claude ou ChatGPT.'; }
      function secours() {
        // Méthode ancienne, pour les navigateurs qui refusent la première
        zone.closest("details").open = true;
        zone.focus(); zone.select();
        var reussi = false;
        try { reussi = document.execCommand("copy"); } catch (e) {}
        if (reussi) ok();
        else copie.innerHTML = '<span class="ko">La copie automatique ne marche pas ici.</span> Le texte est sélectionné ci-dessous : copiez-le à la main.';
      }
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(texte).then(ok, secours);
      else secours();
    });

    // ----- Enregistrer la note donnée par l'IA -----
    var note = document.getElementById("note");
    var deja = Progression.lire(EPREUVE)[n];
    if (deja) note.value = deja.score;
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
