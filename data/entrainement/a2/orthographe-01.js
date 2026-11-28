// Écrit par l'IA, vérifié et validé par Rémi après test sur téléphone (28/11/2026). Traductions par l'IA, à faire relire.
// Ici, les accents comptent (accents: true).
window.SERIE = {
  rubrique: { fr: "Orthographe", en: "Spelling", zh: "拼写", vi: "Chính tả" },
  titre: "Accents, accords et homophones",
  accents: true,
  consigne: { fr: "Écrivez les mots correctement. Attention : ici, les accents comptent.",
    en: "Write the words correctly. Careful: here, accents count.",
    zh: "正确拼写单词。注意：这里的重音符号也算分。",
    vi: "Viết từ cho đúng. Lưu ý: ở đây, dấu cũng được tính." },
  items: [
    { type: "saisie", question: "Écrivez ce mot correctement : « fenetre »", reponses: ["fenêtre"],
      e: "On écrit « fenêtre », avec un accent circonflexe sur le « e »." },
    { type: "qcm", question: "Quelle phrase est correcte ?", choix: ["Ils sont allé au parc.", "Ils sont allés au parc.", "Ils sont aller au parc."], r: 1,
      e: "Avec « être », le participe passé s'accorde avec le sujet : ils sont allés." },
    { type: "trous", texte: "Mes sœurs ___ très gentilles. (son ou sont ?)", reponses: [["sont"]],
      e: "« Sont » est le verbe être (elles sont). « Son » veut dire « à lui » ou « à elle »." },
    { type: "trous", texte: "Il ___ trois enfants. (a ou à ?)", reponses: [["a"]],
      e: "« a » sans accent est le verbe avoir (il a). « à » avec accent est une préposition." },
    { type: "saisie", question: "Écrivez en lettres : 80", reponses: ["quatre-vingts"],
      e: "On écrit « quatre-vingts », avec un trait d'union et un « s »." }
  ]
};
