// Textes traduits du site : texte d'accueil et avertissement.
// Les consignes des exercices restent en français, comme à l'examen.
// Traductions faites par l'IA : à faire relire par un locuteur de chaque langue.
//
// Ce fichier :
// - ajoute l'avertissement en petit en bas de chaque page
//   (en français, plus la langue choisie par l'élève) ;
// - sur l'accueil, gère le choix de la langue (enregistré dans le navigateur).

window.Langues = (function () {
  var TEXTES = {
    fr: {
      nom: "Français", lang: "fr",
      accueil: "Entraînez-vous au DELF A2 avec des sujets complets, au format de l'examen : compréhension de l'oral, compréhension des écrits, production écrite et production orale. Vos scores sont enregistrés sur cet appareil.",
      consignes: "Les consignes des exercices sont en français, comme le jour de l'examen.",
      avertissement: "Site d'entraînement indépendant, non officiel, sans lien avec France Éducation international. Les sujets sont originaux, créés avec l'aide de l'IA et relus."
    },
    en: {
      nom: "English", lang: "en",
      accueil: "Practise for the DELF A2 with complete papers in the exam format: listening, reading, writing and speaking. Your scores are saved on this device.",
      consignes: "The instructions for the exercises are in French, as on the day of the exam.",
      avertissement: "Independent, unofficial practice website, not affiliated with France Éducation international. The papers are original, created with the help of AI and reviewed."
    },
    zh: {
      nom: "中文", lang: "zh-Hans",
      accueil: "使用与考试格式相同的完整试题练习 DELF A2：听力理解、阅读理解、书面表达和口语表达。你的成绩会保存在这台设备上。",
      consignes: "练习的题目要求是法语的，和考试当天一样。",
      avertissement: "本网站是独立的非官方练习网站，与法国国际教育研究中心（France Éducation international）没有任何关系。所有试题均为原创，在人工智能的帮助下编写，并经过审校。"
    },
    vi: {
      nom: "Tiếng Việt", lang: "vi",
      accueil: "Luyện thi DELF A2 với các đề thi đầy đủ, theo đúng định dạng của kỳ thi: nghe hiểu, đọc hiểu, viết và nói. Điểm của bạn được lưu trên thiết bị này.",
      consignes: "Yêu cầu của các bài tập được viết bằng tiếng Pháp, giống như trong ngày thi.",
      avertissement: "Trang web luyện thi độc lập, không chính thức, không liên quan đến France Éducation international. Các đề thi là bản gốc, được soạn với sự hỗ trợ của AI và đã được kiểm tra lại."
    }
  };
  var CLE = "delf-langue";

  function lire() {
    try { var l = localStorage.getItem(CLE); return TEXTES[l] ? l : "fr"; } catch (e) { return "fr"; }
  }
  function choisir(l) {
    try { localStorage.setItem(CLE, l); } catch (e) {}
  }

  // Un paragraphe en français, et sa traduction si une autre langue est choisie.
  function bloc(cle, langue) {
    var html = '<p lang="fr">' + TEXTES.fr[cle] + "</p>";
    if (langue !== "fr") html += '<p class="traduction" lang="' + TEXTES[langue].lang + '">' + TEXTES[langue][cle] + "</p>";
    return html;
  }

  function piedDePage() {
    // Sur l'accueil, l'avertissement est déjà dans un encadré en haut.
    if (document.getElementById("avertissement-accueil")) return;
    var pied = document.getElementById("pied") || document.createElement("footer");
    pied.id = "pied";
    pied.className = "avertissement";
    pied.innerHTML = bloc("avertissement", lire());
    if (!pied.parentNode) document.body.appendChild(pied);
  }

  // Accueil : boutons de langue, texte d'accueil et avertissement
  function accueil() {
    var boutons = document.getElementById("langues");
    if (!boutons) return;
    function afficher() {
      var l = lire();
      boutons.innerHTML = Object.keys(TEXTES).map(function (k) {
        return '<button lang="' + TEXTES[k].lang + '" data-langue="' + k + '" aria-pressed="' + (k === l) + '">' + TEXTES[k].nom + "</button>";
      }).join("");
      document.getElementById("bienvenue").innerHTML = bloc("accueil", l) + bloc("consignes", l);
      document.getElementById("avertissement-accueil").innerHTML = bloc("avertissement", l);
      piedDePage();
    }
    boutons.addEventListener("click", function (ev) {
      var b = ev.target.closest("button[data-langue]");
      if (!b) return;
      choisir(b.dataset.langue);
      afficher();
    });
    afficher();
  }

  piedDePage();
  accueil();
  return { lire: lire, TEXTES: TEXTES };
})();
