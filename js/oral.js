// Moteur de la page « Compréhension de l'oral ».
// Sans ?sujet= dans l'adresse : affiche la liste des sujets.
// Avec ?sujet=1, ?sujet=2… : charge data/a2/oral_01.js, oral_02.js…
//
// Déroulé de chaque document, comme à l'examen :
// 1. temps pour lire les questions ; 2. première écoute ;
// 3. temps pour répondre ; 4. deuxième écoute ; 5. temps pour compléter ;
// 6. correction (bouton « Valider »), avec explication et transcription.
// Les temps viennent du fichier du sujet (lecture, pause, apres) ;
// sinon, temps officiels : exercices 1-2 = 15/10/10 s, exercices 3-4 = 30/30/30 s.
// L'élève ne peut pas réécouter librement, comme le jour de l'examen.

(function () {
  var EPREUVE = "a2-oral";
  var NB_SUJETS = (window.LISTE_SUJETS && window.LISTE_SUJETS.oral) || 0;
  var LETTRES = "ABCDEFGH";
  var app = document.getElementById("app");
  var totalEl = document.getElementById("total");
  var finEl = document.getElementById("fin");
  var fmt = Progression.fmt;

  var n = parseInt(new URLSearchParams(location.search).get("sujet"), 10);

  if (!n) {
    // ----- Vue « liste des sujets » -----
    document.getElementById("vue-liste").hidden = false;
    if (Object.keys(Progression.lire(EPREUVE)).length) document.getElementById("rappel").open = false;
    Progression.afficherListe(document.getElementById("liste"), EPREUVE, NB_SUJETS);
    return;
  }

  // ----- Vue « un sujet » -----
  document.getElementById("vue-sujet").hidden = false;
  document.getElementById("rappel").open = false;
  var retour = document.getElementById("retour");
  retour.href = "comprehension-oral.html";
  retour.textContent = "← Liste des sujets";

  var script = document.createElement("script");
  script.src = "../data/a2/oral_" + (n < 10 ? "0" : "") + n + ".js";
  script.onload = function () { if (window.SUJET) demarrer(window.SUJET); else erreur(); };
  script.onerror = erreur;
  document.head.appendChild(script);

  function erreur() {
    app.innerHTML = '<div class="encadre"><p>Le sujet n° ' + n + " n'existe pas encore.</p></div>";
    totalEl.hidden = true;
  }

  function demarrer(sujet) {
    var EX = sujet.exercices;
    var MAX = EX.reduce(function (a, x) { return a + x.points; }, 0);
    var nbQuestions = EX.reduce(function (a, x) { return a + x.questions.length; }, 0);
    var total, faites;
    var enCours = null; // document en train d'être écouté (un seul à la fois)

    document.getElementById("sous-titre").textContent =
      "Sujet d'entraînement n° " + sujet.numero + " · documents originaux au format de l'examen";
    document.title = "DELF A2 – Compréhension de l'oral – Sujet " + sujet.numero;
    var suivant = document.getElementById("suivant");
    if (n < NB_SUJETS) suivant.href = "?sujet=" + (n + 1);
    else { suivant.hidden = true; document.getElementById("dernier").hidden = false; }

    function afficher() {
      if (enCours) enCours.arreter();
      total = 0;
      faites = 0;
      EX.forEach(function (x) { x.obtenu = 0; });
      finEl.hidden = true;
      majTotal();

      app.innerHTML = EX.map(function (x, k) {
        var numQ = 0;
        var blocs = x.documents.map(function (d) {
          var qs = "";
          x.questions.forEach(function (q, i) {
            if (q.doc === d.id) qs += question(k, q, i, ++numQ, x.choixCompacts);
          });
          var nbq = x.questions.filter(function (q) { return q.doc === d.id; }).length;
          return '<div class="ecoute" id="e' + k + "-" + d.id + '" data-k="' + k + '" data-doc="' + d.id + '">' +
            "<h3>" + (d.titre || "Document") + "</h3>" +
            '<div class="lecteur">' +
              '<p class="etape">Cliquez sur « Commencer » quand vous êtes prêt(e). ' +
                (nbq > 1 ? "Vous aurez le temps de lire les questions" : "Vous aurez le temps de lire la question") +
                ", puis vous entendrez le document deux fois.</p>" +
              '<div class="barre" hidden><span></span></div>' +
              (d.audio ? '<button class="commencer">▶ Commencer</button> '
                       : '<p class="ko">🕓 Audio bientôt disponible.</p>') +
              '<button class="passer secondaire" hidden>Passer l\'attente</button>' +
            "</div>" +
            qs +
            '<button class="valider" disabled>Valider</button><p class="fb-doc" aria-live="polite"></p>' +
            '<div class="transcription" hidden><h4>Transcription</h4>' + d.transcription + "</div>" +
            "</div>";
        }).join("");
        return '<section class="exercice"><h2>' + x.titre + ' <span class="pts">' + fmt(x.points) + " points</span></h2>" +
          '<p class="consigne">' + x.consigne + "</p>" + blocs +
          '<p class="score" id="sc' + k + '">Score : 0 / ' + fmt(x.points) + "</p></section>";
      }).join("");
    }

    function question(k, q, i, num, compacts) {
      var choix = q.choix.map(function (c, j) {
        var lettre = q.choix.length >= 3 ? LETTRES[j] + ". " : "";
        return '<label><input type="radio" name="q' + k + "_" + i + '" value="' + j + '"> ' + lettre + c + "</label>";
      }).join("");
      return '<div class="q" data-i="' + i + '"><b>' + num + ". " + q.q + ' <span class="pts">' + fmt(q.p) + " pt</span></b>" +
        '<div class="choix' + (compacts ? " compacts" : "") + '">' + choix + '</div><p class="fb"></p></div>';
    }

    function majTotal() {
      totalEl.textContent = "Score total : " + fmt(total) + " / " + fmt(MAX);
    }

    // ----- Déroulé d'un document -----
    function lancer(bloc) {
      var x = EX[+bloc.dataset.k];
      var d = x.documents.filter(function (d) { return d.id === bloc.dataset.doc; })[0];
      var nbq = x.questions.filter(function (q) { return q.doc === d.id; }).length;
      var etape = bloc.querySelector(".etape");
      var barre = bloc.querySelector(".barre");
      var jauge = barre.querySelector("span");
      var passer = bloc.querySelector(".passer");
      var audio = new Audio("../audio/" + d.audio);
      var minuterie = null, arrete = false, ecouteLancee = false;

      // Sur iPhone, le son doit être « débloqué » pendant le clic de l'élève.
      // Si l'élève passe l'attente très vite, l'écoute a déjà commencé
      // quand le déblocage se termine : on ne l'arrête pas.
      audio.muted = true;
      var deblocage = audio.play();
      function finDeblocage() {
        if (!ecouteLancee) { audio.pause(); audio.currentTime = 0; }
        audio.muted = false;
      }
      if (deblocage && deblocage.then) deblocage.then(finDeblocage, function () { audio.muted = false; });
      else audio.muted = false;

      audio.addEventListener("error", function () {
        etape.innerHTML = '<span class="ko">Le fichier audio est introuvable (' + d.audio + ").</span>";
        arreter();
      });

      bloc.querySelector(".commencer").hidden = true;
      barre.hidden = false;
      enCours = { arreter: arreter };
      document.querySelectorAll("button.commencer").forEach(function (b) { b.disabled = true; });

      function arreter() {
        arrete = true;
        clearInterval(minuterie);
        audio.pause();
        passer.hidden = true;
        enCours = null;
        document.querySelectorAll("button.commencer").forEach(function (b) { b.disabled = false; });
      }

      function attendre(secondes, texte, suite) {
        var reste = secondes;
        passer.hidden = false;
        function maj() {
          etape.innerHTML = "<b>" + texte + "</b> " + reste + " s";
          jauge.style.width = (100 * (secondes - reste) / secondes) + "%";
        }
        function fin() { clearInterval(minuterie); passer.hidden = true; passer.onclick = null; if (!arrete) suite(); }
        maj();
        minuterie = setInterval(function () { reste--; maj(); if (reste <= 0) fin(); }, 1000);
        passer.onclick = fin;
      }

      function ecouter(texte, suite) {
        ecouteLancee = true;
        audio.muted = false;
        etape.innerHTML = "<b>🔊 " + texte + "</b> Écoutez bien.";
        jauge.style.width = "0%";
        audio.currentTime = 0;
        audio.ontimeupdate = function () {
          if (audio.duration) jauge.style.width = (100 * audio.currentTime / audio.duration) + "%";
        };
        audio.onended = function () { jauge.style.width = "100%"; if (!arrete) suite(); };
        var p = audio.play();
        if (p && p.catch) p.catch(function () {
          etape.innerHTML = '<span class="ko">Le son ne démarre pas.</span> ';
          var b = document.createElement("button");
          b.textContent = "▶ Écouter";
          b.onclick = function () { b.remove(); ecouter(texte, suite); };
          etape.appendChild(b);
        });
      }

      var officiel = +bloc.dataset.k < 2 ? [15, 10, 10] : [30, 30, 30];
      var lecture = d.lecture || x.lecture || officiel[0];
      var pause = d.pause || x.pause || officiel[1];
      var apres = d.apres || x.apres || officiel[2];

      attendre(lecture, nbq > 1 ? "Lisez les questions." : "Lisez la question.", function () {
        ecouter("Première écoute.", function () {
          attendre(pause, "Répondez. La deuxième écoute commence dans", function () {
            ecouter("Deuxième écoute.", function () {
              attendre(apres, "Complétez vos réponses.", function () {
                etape.innerHTML = "<b>Écoutes terminées.</b> Vérifiez vos réponses, puis cliquez sur « Valider ».";
                barre.hidden = true;
                arreter();
                bloc.querySelector("button.valider").disabled = false;
              });
            });
          });
        });
      });
    }

    // ----- Correction d'un document -----
    function valider(bloc) {
      var k = +bloc.dataset.k, x = EX[k];
      var boites = bloc.querySelectorAll(".q");
      var fbDoc = bloc.querySelector(".fb-doc");
      var manque = 0;
      boites.forEach(function (box) { if (!box.querySelector("input:checked")) manque++; });
      if (manque) {
        fbDoc.innerHTML = '<span class="ko">' + (manque > 1 ? "Répondez à toutes les questions." : "Choisissez une réponse.") + "</span>";
        return;
      }
      fbDoc.innerHTML = "";
      var transcription = bloc.querySelector(".transcription");
      transcription.hidden = false;
      boites.forEach(function (box) {
        var q = x.questions[+box.dataset.i];
        var v = +box.querySelector("input:checked").value;
        var labels = box.querySelectorAll("label");
        var fb = box.querySelector(".fb");
        labels[q.r].classList.add("good");
        if (v === q.r) {
          fb.innerHTML = '<span class="ok">✔ Bonne réponse !</span> ' + q.e;
          x.obtenu += q.p;
          total += q.p;
        } else {
          labels[v].classList.add("bad");
          var bonne = (q.choix.length >= 3 ? LETTRES[q.r] + ". " : "") + q.choix[q.r];
          fb.innerHTML = '<span class="ko">✘ Mauvaise réponse.</span> La bonne réponse est : ' + bonne + " " + q.e;
        }
        var phrase = transcription.querySelector('[data-s="' + q.s + '"]');
        if (phrase) phrase.classList.add("hl");
        box.querySelectorAll("input").forEach(function (i) { i.disabled = true; });
        faites++;
      });
      bloc.querySelector("button.valider").disabled = true;
      document.getElementById("sc" + k).textContent = "Score : " + fmt(x.obtenu) + " / " + fmt(x.points);
      majTotal();
      transcription.scrollIntoView({ behavior: "smooth", block: "center" });

      if (faites === nbQuestions) {
        Progression.enregistrer(EPREUVE, n, total, MAX);
        document.getElementById("resultat").textContent = fmt(total) + " / " + fmt(MAX);
        finEl.hidden = false;
      }
    }

    app.addEventListener("click", function (ev) {
      var b = ev.target.closest("button");
      if (!b) return;
      var bloc = b.closest(".ecoute");
      if (b.classList.contains("commencer")) lancer(bloc);
      else if (b.classList.contains("valider")) valider(bloc);
    });

    document.getElementById("recommencer").addEventListener("click", function () {
      afficher();
      scrollTo({ top: 0, behavior: "smooth" });
    });

    afficher();
  }
})();
