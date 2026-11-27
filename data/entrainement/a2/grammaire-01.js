// Démonstration écrite par l'IA, non vérifiée. Traductions par l'IA, à faire relire.
window.SERIE = {
  rubrique: { fr: "Grammaire", en: "Grammar", zh: "语法", vi: "Ngữ pháp" },
  titre: "Articles, prépositions et négation",
  consigne: { fr: "Choisissez ou écrivez la bonne forme.",
    en: "Choose or write the correct form.",
    zh: "选择或写出正确的形式。",
    vi: "Chọn hoặc viết dạng đúng." },
  items: [
    { type: "qcm", question: "Ce soir, je vais ___ cinéma.", choix: ["à le", "au", "à la"], r: 1,
      e: "« à » + « le » devient « au » : je vais au cinéma." },
    { type: "trous", texte: "Ma cousine habite ___ Espagne.", reponses: [["en"]],
      e: "Devant un nom de pays féminin, on dit « en » : en Espagne, en France." },
    { type: "ordre", mots: ["Je", "ne", "mange", "pas", "de", "viande"], solution: "Je ne mange pas de viande",
      e: "La négation entoure le verbe : ne + verbe + pas. Après « pas », « de la » devient « de »." },
    { type: "qcm", question: "Tu connais Marie ? – Oui, je ___ connais bien.", choix: ["la", "le", "lui"], r: 0,
      e: "Marie est un complément direct féminin : on dit « la »." },
    { type: "saisie", question: "Mettez au pluriel : un journal → des…", reponses: ["journaux"],
      e: "Les mots en « -al » font souvent leur pluriel en « -aux » : un journal, des journaux." }
  ]
};
