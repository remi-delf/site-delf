// Démonstration écrite par l'IA, non vérifiée. Traductions par l'IA, à faire relire.
window.SERIE = {
  rubrique: { fr: "Compréhension écrite", en: "Reading", zh: "阅读理解", vi: "Đọc hiểu" },
  titre: "Un message à la voisine",
  consigne: { fr: "Lisez le message de Claire, puis répondez aux questions.",
    en: "Read Claire's message, then answer the questions.",
    zh: "阅读克莱尔的留言，然后回答问题。",
    vi: "Đọc tin nhắn của Claire, sau đó trả lời các câu hỏi." },
  document: { titre: "Message de Claire",
    texte: "Bonjour Madame Leroy,\nJe pars en vacances samedi pour une semaine. Pouvez-vous arroser mes plantes le mardi et le vendredi ? La clé est dans la boîte aux lettres. Mon chat va chez ma sœur, vous n'avez pas besoin de vous en occuper. Je rentre le dimanche 14 au soir.\nMerci beaucoup !\nClaire" },
  items: [
    { type: "qcm", question: "Claire part en vacances pendant…", choix: ["un week-end.", "une semaine.", "deux semaines."], r: 1,
      e: "Claire écrit : « Je pars en vacances samedi pour une semaine. »" },
    { type: "qcm", question: "Qu'est-ce que Madame Leroy doit faire ?", choix: ["Arroser les plantes.", "Nourrir le chat.", "Relever le courrier."], r: 0,
      e: "« Pouvez-vous arroser mes plantes le mardi et le vendredi ? »" },
    { type: "qcm", question: "Vrai ou faux ? Madame Leroy doit s'occuper du chat.", choix: ["Vrai", "Faux"], r: 1,
      e: "Le chat va chez la sœur de Claire : « vous n'avez pas besoin de vous en occuper »." },
    { type: "saisie", question: "Où est la clé ? Dans la boîte aux…", reponses: ["lettres"],
      e: "« La clé est dans la boîte aux lettres. »" },
    { type: "trous", texte: "Claire rentre le dimanche ___ au soir.", reponses: [["14", "quatorze"]],
      e: "« Je rentre le dimanche 14 au soir. »" }
  ]
};
