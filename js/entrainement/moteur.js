// Moteur de « Apprendre et s'entraîner » (prototype).
// - Fichiers de données : data/entrainement/<niveau>/<id>.js, qui remplissent window.SERIE.
// - Types d'exercices : chaque type est dans js/entrainement/types/<type>.js
//   et s'inscrit avec Entr.ajouterType("nom", {...}). Un type inconnu est sauté.
// - Scores et brouillons : une seule clé, « delf-entrainement »,
//   séparée des examens blancs (delf-progression n'est jamais utilisée ici).
// - Langue d'aide : lue (sans la modifier) avec Langues.lire() de js/langues.js.

window.Entr = (function () {
  var CLE = "delf-entrainement";

  // ---------- Stockage ----------
  function lireTout() {
    try {
      var d = JSON.parse(localStorage.getItem(CLE));
      return d && typeof d === "object" && !Array.isArray(d) ? d : {};
    } catch (e) { return {}; }
  }
  function ecrireTout(d) { try { localStorage.setItem(CLE, JSON.stringify(d)); } catch (e) {} }
  function partie(d, nom) { if (!d[nom] || typeof d[nom] !== "object") d[nom] = {}; return d[nom]; }
  function lireScore(id) { var s = lireTout().scores; return s && s[id] ? s[id] : null; }
  function garderScore(id, score, max) {
    var d = lireTout();
    partie(d, "scores")[id] = { score: score, max: max, date: new Date().toISOString().slice(0, 10) };
    ecrireTout(d);
  }
  function lireBrouillon(id) { var b = lireTout().brouillons; return b && typeof b[id] === "string" ? b[id] : ""; }
  function garderBrouillon(id, texte) { var d = lireTout(); partie(d, "brouillons")[id] = texte; ecrireTout(d); }

  // ---------- Langue d'aide et textes de l'interface ----------
  // Traductions faites par l'IA : à faire relire.
  var TEXTES = {
    verifier: { fr: "Vérifier", en: "Check", zh: "检查", vi: "Kiểm tra" },
    suivant: { fr: "Suivant", en: "Next", zh: "下一题", vi: "Tiếp theo" },
    bonne: { fr: "Bonne réponse !", en: "Correct!", zh: "回答正确！", vi: "Đúng rồi!" },
    fausse: { fr: "Pas tout à fait.", en: "Not quite.", zh: "不太对。", vi: "Chưa đúng." },
    laBonne: { fr: "La bonne réponse est :", en: "The correct answer is:", zh: "正确答案是：", vi: "Đáp án đúng là:" },
    repondre: { fr: "Répondez d'abord.", en: "Answer first.", zh: "请先作答。", vi: "Hãy trả lời trước." },
    voir: { fr: "Voir dans ma langue", en: "See in my language", zh: "用我的语言查看", vi: "Xem bằng ngôn ngữ của tôi" },
    masquer: { fr: "Masquer la traduction", en: "Hide translation", zh: "隐藏翻译", vi: "Ẩn bản dịch" },
    exercice: { fr: "Exercice", en: "Exercise", zh: "练习", vi: "Bài" },
    fin: { fr: "Série terminée !", en: "Series completed!", zh: "本组练习完成！", vi: "Đã hoàn thành loạt bài!" },
    recommencer: { fr: "Recommencer", en: "Start again", zh: "重新开始", vi: "Làm lại" },
    retour: { fr: "Retour aux rubriques", en: "Back to topics", zh: "返回主题", vi: "Quay lại các chủ đề" },
    ecouter: { fr: "▶ Écouter", en: "Listen", zh: "听", vi: "Nghe" },
    texteAudio: { fr: "Voir le texte de l'audio", en: "Show the audio text", zh: "显示录音文字", vi: "Xem lời của đoạn nghe" },
    audioBientot: { fr: "Audio bientôt disponible : lisez le texte.", en: "Audio coming soon: read the text.", zh: "音频即将上线：请先阅读文字。", vi: "Sắp có âm thanh: hãy đọc lời." },
    effacer: { fr: "Effacer", en: "Clear", zh: "清除", vi: "Xóa" },
    sauver: { fr: "Sauvegarder le brouillon", en: "Save the draft", zh: "保存草稿", vi: "Lưu bản nháp" },
    sauve: { fr: "Brouillon sauvegardé sur cet appareil.", en: "Draft saved on this device.", zh: "草稿已保存在本设备上。", vi: "Đã lưu bản nháp trên thiết bị này." },
    points: { fr: "Points à vérifier vous-même", en: "Checklist", zh: "自查清单", vi: "Danh sách tự kiểm tra" },
    mots: { fr: "mots", en: "words", zh: "个词", vi: "từ" },
    corrigerTitre: { fr: "Faire corriger mon texte par une IA", en: "Have my text corrected by an AI", zh: "让人工智能批改我的文章", vi: "Nhờ AI sửa bài viết của tôi" },
    corrigerIA: { fr: "📋 Faire corriger par une IA", en: "Have it corrected by an AI", zh: "让人工智能批改", vi: "Nhờ AI sửa bài" },
    phrasesUtiles: { fr: "Phrases utiles", en: "Useful phrases", zh: "常用句子", vi: "Câu hữu ích" },
    modele: { fr: "Voir un modèle de réponse", en: "See a model answer", zh: "查看参考答案", vi: "Xem bài mẫu" },
    minuteur: { fr: "Minuteur (facultatif)", en: "Timer (optional)", zh: "计时器（可选）", vi: "Đồng hồ (không bắt buộc)" },
    demarrer: { fr: "▶ Démarrer", en: "Start", zh: "开始", vi: "Bắt đầu" },
    arreter: { fr: "■ Arrêter", en: "Stop", zh: "停止", vi: "Dừng" }
  };
  var CODES = { en: "en", zh: "zh-Hans", vi: "vi" };
  function langue() { return window.Langues ? Langues.lire() : "fr"; }
  function esc(t) { return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  // Texte en français, avec la traduction dessous si une langue d'aide est choisie.
  function bilingue(cle) {
    var l = langue(), t = TEXTES[cle], tr = l !== "fr" && t[l];
    return esc(t.fr) + (tr ? '<span class="tr" lang="' + CODES[l] + '">' + esc(tr) + "</span>" : "");
  }
  // Un texte de données { fr, en, zh, vi } (ou une simple chaîne en français).
  function fr(obj) { return typeof obj === "string" ? obj : (obj && obj.fr) || ""; }
  function traduction(obj) {
    var l = langue();
    return l !== "fr" && obj && typeof obj === "object" && obj[l] ? obj[l] : "";
  }
  function spanTraduction(obj) {
    var t = traduction(obj);
    return t ? '<span class="traduction-consigne" lang="' + CODES[langue()] + '" hidden>' + esc(t) + "</span>" : "";
  }

  // ---------- Comparaison des réponses écrites ----------
  // Majuscules, espaces et apostrophes ignorés ; accents ignorés sauf si accents = true.
  function normaliser(s, accents) {
    s = String(s).toLowerCase().replace(/[’`´]/g, "'").replace(/\s+/g, " ").trim().replace(/\s*[.!?]+$/, "");
    if (!accents) s = s.normalize("NFD").replace(/[̀-ͯ]/g, "");
    return s;
  }
  function egal(reponse, attendues, accents) {
    var r = normaliser(reponse, accents);
    return attendues.some(function (a) { return normaliser(a, accents) === r; });
  }

  // ---------- Types d'exercices ----------
  var types = {};
  function ajouterType(nom, def) { types[nom] = def; }

  return {
    lireScore: lireScore, garderScore: garderScore,
    lireBrouillon: lireBrouillon, garderBrouillon: garderBrouillon,
    TEXTES: TEXTES, langue: langue, bilingue: bilingue, esc: esc,
    fr: fr, traduction: traduction, spanTraduction: spanTraduction,
    egal: egal, ajouterType: ajouterType, types: types
  };
})();
