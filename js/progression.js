// Enregistrement de la progression (sujets faits et scores) dans le navigateur.
// Tout est rangé sous une seule clé « delf-progression », par exemple :
// { "a2-ecrits": { "1": { "score": 22.5, "max": 25, "date": "2026-11-24" } } }
// La progression reste sur l'appareil et le navigateur utilisés.

window.Progression = (function () {
  var CLE = "delf-progression";

  function toutLire() {
    try {
      return JSON.parse(localStorage.getItem(CLE)) || {};
    } catch (e) {
      return {}; // navigation privée, stockage bloqué… : on continue sans
    }
  }

  function lire(epreuve) {
    return toutLire()[epreuve] || {};
  }

  // On garde le dernier score obtenu pour chaque sujet.
  function enregistrer(epreuve, numero, score, max) {
    var tout = toutLire();
    tout[epreuve] = tout[epreuve] || {};
    tout[epreuve][numero] = { score: score, max: max, date: new Date().toISOString().slice(0, 10) };
    try {
      localStorage.setItem(CLE, JSON.stringify(tout));
    } catch (e) { /* stockage impossible : le score n'est pas gardé */ }
  }

  function fmt(x) { return String(x).replace(".", ","); }

  // Affiche la liste numérotée des sujets, avec une coche verte et le score
  // pour les sujets déjà faits.
  function afficherListe(conteneur, epreuve, nombre) {
    var faits = lire(epreuve);
    if (!nombre) {
      conteneur.innerHTML = '<li class="vide">Aucun sujet pour l\'instant.</li>';
      return;
    }
    var html = "";
    for (var n = 1; n <= nombre; n++) {
      var f = faits[n];
      html += '<li><a class="sujet' + (f ? " fait" : "") + '" href="?sujet=' + n + '">' +
        '<span class="nom">Sujet ' + n + "</span>" +
        (f ? '<span class="etat">✔ ' + fmt(f.score) + " / " + f.max + "</span>"
           : '<span class="etat">à faire</span>') +
        "</a></li>";
    }
    conteneur.innerHTML = html;
  }

  return { lire: lire, enregistrer: enregistrer, afficherListe: afficherListe, fmt: fmt };
})();
