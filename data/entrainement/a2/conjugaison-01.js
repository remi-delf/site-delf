// Démonstration écrite par l'IA, non vérifiée. Traductions par l'IA, à faire relire.
window.SERIE = {
  rubrique: { fr: "Conjugaison", en: "Verb conjugation", zh: "动词变位", vi: "Chia động từ" },
  titre: "Présent, passé composé, imparfait, futur proche",
  consigne: { fr: "Conjuguez les verbes au bon temps.",
    en: "Conjugate the verbs in the correct tense.",
    zh: "把动词变成正确的时态。",
    vi: "Chia động từ ở thì đúng." },
  items: [
    { type: "trous", texte: "Hier, nous ___ (aller) au marché.", reponses: [["sommes allés", "sommes allées"]],
      e: "Passé composé avec « être » : nous sommes allés (ou allées)." },
    { type: "qcm", question: "Demain, je ___ mes parents.", choix: ["visitais", "vais visiter", "ai visité"], r: 1,
      e: "Pour une action future proche : aller + infinitif. « Je vais visiter »." },
    { type: "saisie", question: "Conjuguez « faire » au présent : vous…", reponses: ["faites"],
      e: "« Faire » est irrégulier : vous faites." },
    { type: "qcm", question: "Quand j'étais petit, je ___ au football tous les samedis.", choix: ["jouais", "ai joué", "jouerai"], r: 0,
      e: "Pour une habitude dans le passé, on utilise l'imparfait : je jouais." },
    { type: "ordre", mots: ["Elle", "s'est", "levée", "à", "sept", "heures"], solution: "Elle s'est levée à sept heures",
      e: "Verbe pronominal au passé composé : elle s'est levée (avec « être »)." }
  ]
};
