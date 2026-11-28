// Contenu écrit par ChatGPT, corrigé et validé par Rémi (63 mots).
// Traduction de la consigne : par l'IA, à faire relire.
window.SERIE = {
  rubrique: { fr: "Compréhension écrite", en: "Reading", zh: "阅读理解", vi: "Đọc hiểu" },
  titre: "Le bus 14",
  consigne: { fr: "Lisez l’information, puis répondez aux questions.",
    en: "Read the information, then answer the questions.",
    zh: "阅读这条通知，然后回答问题。",
    vi: "Đọc thông tin, sau đó trả lời các câu hỏi." },
  document: { titre: "Information voyageurs",
    texte: "Le bus 14 change d’horaire à partir de lundi. En semaine, il passera toutes les vingt minutes le matin, au lieu de quinze minutes. Le premier bus partira à 6 h 30. Le samedi, les horaires ne changent pas. La nouvelle affiche est disponible à l’arrêt de la gare. Pour aller au centre-ville lundi matin, pensez donc à partir un peu plus tôt." },
  items: [
    { type: "qcm", question: "Quand les horaires du bus 14 changent-ils ?", choix: ["Samedi.", "Dimanche.", "Lundi."], r: 2,
      e: "Le changement commence à partir de lundi." },
    { type: "qcm", question: "Combien de temps y aura-t-il entre les bus le matin en semaine ?", choix: ["Vingt minutes.", "Quinze minutes.", "Trente minutes."], r: 0,
      e: "Le bus passera toutes les vingt minutes le matin." },
    { type: "qcm", question: "À quelle heure partira le premier bus ?", choix: ["À 6 h 00.", "À 6 h 30.", "À 7 h 00."], r: 1,
      e: "Le texte indique que le premier bus partira à 6 h 30." },
    { type: "qcm", question: "Vrai ou faux ? Le samedi, les horaires changent aussi.", choix: ["Vrai", "Faux"], r: 1,
      e: "Le texte dit que les horaires du samedi ne changent pas." }
  ]
};
