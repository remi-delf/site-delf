// Contenu écrit par ChatGPT, corrigé et validé par Rémi (65 mots).
// Traduction de la consigne : par l'IA, à faire relire.
window.SERIE = {
  rubrique: { fr: "Compréhension écrite", en: "Reading", zh: "阅读理解", vi: "Đọc hiểu" },
  titre: "Les courses",
  consigne: { fr: "Lisez le message, puis répondez aux questions.",
    en: "Read the message, then answer the questions.",
    zh: "阅读这条留言，然后回答问题。",
    vi: "Đọc tin nhắn, sau đó trả lời các câu hỏi." },
  document: { titre: "Un message",
    texte: "Bonjour Clara, je vais faire les courses après le travail. Il nous reste du riz, mais nous n’avons plus de lait ni de pommes. Je vais aussi acheter du fromage et du pain. Est-ce que tu peux prendre une bouteille d’eau au magasin près de chez toi ? Ce soir, je prépare les pâtes pour le dîner. Si tu veux, nous pouvons manger vers vingt heures." },
  items: [
    { type: "qcm", question: "Quand la personne va-t-elle faire les courses ?", choix: ["Après le travail.", "Demain matin.", "Après le dîner."], r: 0,
      e: "Elle dit qu’elle va faire les courses après le travail." },
    { type: "qcm", question: "Quel produit manque à la maison ?", choix: ["Du riz.", "Du lait.", "Du sucre."], r: 1,
      e: "La personne dit qu’il n’y a plus de lait à la maison." },
    { type: "qcm", question: "Que doit acheter Clara ?", choix: ["Du riz.", "Du pain.", "Une bouteille d’eau."], r: 2,
      e: "La personne demande à Clara de prendre une bouteille d’eau." },
    { type: "qcm", question: "À quelle heure peuvent-ils manger ?", choix: ["À vingt heures.", "À dix-huit heures.", "À vingt-deux heures."], r: 0,
      e: "La personne propose de manger vers vingt heures." }
  ]
};
