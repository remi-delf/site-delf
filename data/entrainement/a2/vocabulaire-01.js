// Démonstration écrite par l'IA, non vérifiée. Traductions par l'IA, à faire relire.
window.SERIE = {
  rubrique: { fr: "Vocabulaire", en: "Vocabulary", zh: "词汇", vi: "Từ vựng" },
  titre: "La maison et les courses",
  consigne: { fr: "Trouvez le bon mot de la vie quotidienne.",
    en: "Find the right everyday word.",
    zh: "找出正确的日常用词。",
    vi: "Tìm từ đúng trong cuộc sống hằng ngày." },
  items: [
    { type: "qcm", question: "Le soir, je dors dans la…", choix: ["cuisine.", "chambre.", "salle de bains."], r: 1,
      e: "On dort dans la chambre. On cuisine dans la cuisine, on se lave dans la salle de bains." },
    { type: "qcm", question: "Quel mot n'est pas un fruit ?", choix: ["une pomme", "une carotte", "une banane"], r: 1,
      e: "La carotte est un légume." },
    { type: "trous", texte: "Au magasin, je paie avec ma carte ___.", reponses: [["bancaire", "de crédit", "bleue"]],
      e: "On dit « une carte bancaire » (ou « une carte de crédit », « une carte bleue »)." },
    { type: "qcm", question: "Où est-ce qu'on achète des médicaments ?", choix: ["À la pharmacie.", "À la boulangerie.", "À la poste."], r: 0,
      e: "Les médicaments se vendent à la pharmacie." },
    { type: "saisie", question: "Quel est le contraire de « grand » ?", reponses: ["petit"],
      e: "Le contraire de « grand » est « petit »." }
  ]
};
