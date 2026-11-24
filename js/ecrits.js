// Moteur de la page « Compréhension des écrits ».
// Sans ?sujet= dans l'adresse : affiche la liste des sujets.
// Avec ?sujet=1, ?sujet=2… : charge data/a2/ecrits_01.js, ecrits_02.js…
// puis affiche les exercices.

(function () {
  var EPREUVE = "a2-ecrits";
  var NB_SUJETS = (window.LISTE_SUJETS && window.LISTE_SUJETS.ecrits) || 0;
  var LETTRES = "ABCDEFGH";
  var app = document.getElementById("app");
  var totalEl = document.getElementById("total");
  var finEl = document.getElementById("fin");

  var n = parseInt(new URLSearchParams(location.search).get("sujet"), 10);

  if (!n) {
    // ----- Vue « liste des sujets » -----
    document.getElementById("vue-liste").hidden = false;
    // Le rappel reste ouvert tant que l'élève n'a fait aucun sujet,
    // ensuite il est replié pour que la liste soit visible tout de suite.
    if (Object.keys(Progression.lire(EPREUVE)).length) document.getElementById("rappel").open = false;
    Progression.afficherListe(document.getElementById("liste"), EPREUVE, NB_SUJETS);
    return;
  }

  // ----- Vue « un sujet » -----
  document.getElementById("vue-sujet").hidden = false;
  document.getElementById("rappel").open = false;
  var retour = document.getElementById("retour");
  retour.href = "comprehension-ecrits.html";
  retour.textContent = "← Liste des sujets";

  var fichier = "../data/a2/ecrits_" + (n < 10 ? "0" : "") + n + ".js";

  var script = document.createElement("script");
  script.src = fichier;
  script.onload = function () {
    if (window.SUJET) demarrer(window.SUJET);
    else erreur();
  };
  script.onerror = erreur;
  document.head.appendChild(script);

  function erreur() {
    app.innerHTML = '<div class="encadre"><p>Le sujet n° ' + n + " n'existe pas encore.</p></div>";
    totalEl.hidden = true;
  }

  // Écrit 2,5 au lieu de 2.5
  function fmt(x) { return String(x).replace(".", ","); }

  function demarrer(sujet) {
    var EX = sujet.exercices;
    var MAX = EX.reduce(function (a, x) { return a + x.points; }, 0);
    var nbQuestions = EX.reduce(function (a, x) { return a + x.questions.length; }, 0);
    var total, faites;

    document.getElementById("sous-titre").textContent =
      "Sujet d'entraînement n° " + sujet.numero + " · textes originaux au format de l'examen";
    var suivant = document.getElementById("suivant");
    if (n < NB_SUJETS) {
      suivant.href = "?sujet=" + (n + 1);
    } else {
      suivant.hidden = true;
      document.getElementById("dernier").hidden = false;
    }
    document.title = "DELF A2 – Compréhension des écrits – Sujet " + sujet.numero;

    function afficher() {
      total = 0;
      faites = 0;
      EX.forEach(function (x) { x.obtenu = 0; });
      finEl.hidden = true;
      majTotal();

      var numQ = 0;
      app.innerHTML = EX.map(function (x, k) {
        numQ = 0;
        var blocs = x.documents.map(function (d) {
          var qs = x.questions.map(function (q, i) {
            if (q.doc !== d.id) return "";
            numQ++;
            return question(x, k, q, i, numQ);
          }).join("");
          return '<div class="doc" id="e' + k + "-" + d.id + '">' + d.html + "</div>" + qs;
        }).join("");
        return '<section class="exercice"><h2>' + x.titre + ' <span class="pts">' + x.points + " points</span></h2>" +
          '<p class="consigne">' + x.consigne + "</p>" +
          (x.intro ? '<div class="doc intro">' + x.intro + "</div>" : "") +
          blocs +
          '<p class="score" id="sc' + k + '">Score : 0 / ' + x.points + "</p></section>";
      }).join("");
    }

    function question(x, k, q, i, num) {
      var choix = q.choix.map(function (c, j) {
        var lettre = q.choix.length >= 3 ? LETTRES[j] + ". " : "";
        return '<label><input type="radio" name="q' + k + "_" + i + '" value="' + j + '"> ' + lettre + c + "</label>";
      }).join("");
      return '<div class="q" data-k="' + k + '" data-i="' + i + '">' +
        "<b>" + num + ". " + q.q + ' <span class="pts">' + fmt(q.p) + " pt</span></b>" +
        '<div class="choix' + (x.choixCompacts ? " compacts" : "") + '">' + choix + "</div>" +
        '<button class="valider">Valider</button><p class="fb" aria-live="polite"></p></div>';
    }

    function majTotal() {
      totalEl.textContent = "Score total : " + fmt(total) + " / " + MAX;
    }

    app.addEventListener("click", function (ev) {
      var b = ev.target.closest("button.valider");
      if (!b) return;
      var box = b.closest(".q");
      var k = +box.dataset.k, i = +box.dataset.i;
      var x = EX[k], q = x.questions[i];
      var fb = box.querySelector(".fb");
      var v = box.querySelector("input:checked");
      if (!v) { fb.innerHTML = '<span class="ko">Choisissez une réponse.</span>'; return; }

      // Surligner la phrase qui contient la réponse
      app.querySelectorAll(".hl").forEach(function (s) { s.classList.remove("hl"); });
      var doc = document.getElementById("e" + k + "-" + q.doc);
      var phrase = doc && doc.querySelector('[data-s="' + q.s + '"]');
      if (phrase) {
        phrase.classList.add("hl");
        phrase.scrollIntoView({ behavior: "smooth", block: "center" });
      }

      var labels = box.querySelectorAll("label");
      labels[q.r].classList.add("good");
      var bonne = (q.choix.length >= 3 ? LETTRES[q.r] + ". " : "") + q.choix[q.r];
      if (+v.value === q.r) {
        fb.innerHTML = '<span class="ok">✔ Bonne réponse !</span> ' + q.e;
        x.obtenu += q.p;
        total += q.p;
      } else {
        labels[+v.value].classList.add("bad");
        fb.innerHTML = '<span class="ko">✘ Mauvaise réponse.</span> La bonne réponse est : ' + bonne + ". " + q.e;
      }
      b.disabled = true;
      box.querySelectorAll("input").forEach(function (n) { n.disabled = true; });
      document.getElementById("sc" + k).textContent = "Score : " + fmt(x.obtenu) + " / " + x.points;
      majTotal();

      faites++;
      if (faites === nbQuestions) {
        Progression.enregistrer(EPREUVE, n, total, MAX);
        document.getElementById("resultat").textContent = fmt(total) + " / " + MAX;
        document.getElementById("conseil").textContent = total >= 5
          ? "Vous avez au moins 5 points : c'est le minimum demandé pour cette épreuve. Visez 12,5 ou plus pour être à l'aise."
          : "Attention : il faut au moins 5 points sur 25 dans chaque épreuve. Relisez les explications et réessayez.";
        finEl.hidden = false;
      }
    });

    document.getElementById("recommencer").addEventListener("click", function () {
      afficher();
      scrollTo({ top: 0, behavior: "smooth" });
    });

    afficher();
  }
})();
