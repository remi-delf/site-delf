// « Apprendre et s'entraîner », niveau A2 : les rubriques et leurs séries.
// Pour ajouter une série : créer data/entrainement/a2/<id>.js, puis l'ajouter ici.
// Toutes les séries listées ici sont validées par Rémi (28/11/2026).
// Production orale : mise de côté pour l'instant (bientot: true = carte « Bientôt disponible », sans lien).
// Traductions des titres faites par l'IA : à faire relire.
window.LISTE_ENTRAINEMENT = {
  a2: [
    { titre: { fr: "Compréhension écrite", en: "Reading", zh: "阅读理解", vi: "Đọc hiểu" },
      series: [{ id: "lecture-courses", titre: "Les courses" },
               { id: "lecture-transports", titre: "Le bus 14" }] },
    { titre: { fr: "Compréhension orale", en: "Listening", zh: "听力理解", vi: "Nghe hiểu" },
      series: [{ id: "ecoute-voisins", titre: "Un service entre voisins" },
               { id: "ecoute-loisirs", titre: "Une sortie au cinéma" }] },
    { titre: { fr: "Vocabulaire", en: "Vocabulary", zh: "词汇", vi: "Từ vựng" },
      series: [{ id: "vocabulaire-01", titre: "La maison et les courses" }] },
    { titre: { fr: "Grammaire", en: "Grammar", zh: "语法", vi: "Ngữ pháp" },
      series: [{ id: "grammaire-01", titre: "Articles, prépositions et négation" }] },
    { titre: { fr: "Conjugaison", en: "Verb conjugation", zh: "动词变位", vi: "Chia động từ" },
      series: [{ id: "conjugaison-01", titre: "Présent, passé composé, imparfait, futur proche" }] },
    { titre: { fr: "Orthographe", en: "Spelling", zh: "拼写", vi: "Chính tả" },
      series: [{ id: "orthographe-01", titre: "Accents, accords et homophones" }] },
    { titre: { fr: "Production écrite", en: "Writing", zh: "书面表达", vi: "Viết" },
      series: [{ id: "ecrire-01", titre: "Inviter un ami à dîner", libre: true }] },
    { titre: { fr: "Production orale", en: "Speaking", zh: "口语表达", vi: "Nói" },
      bientot: true, series: [] }
  ]
};
