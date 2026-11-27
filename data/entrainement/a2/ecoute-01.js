// Démonstration écrite par l'IA, non vérifiée. Traductions par l'IA, à faire relire.
// Pas encore de vrai fichier audio : la page lit le texte avec la voix du navigateur.
window.SERIE = {
  rubrique: { fr: "Compréhension orale", en: "Listening", zh: "听力理解", vi: "Nghe hiểu" },
  titre: "À la boulangerie",
  consigne: { fr: "Écoutez le dialogue à la boulangerie, puis répondez. Vous pouvez réécouter autant de fois que vous voulez.",
    en: "Listen to the dialogue at the bakery, then answer. You can listen again as many times as you like.",
    zh: "听一段在面包店的对话，然后回答。你可以随意重复收听。",
    vi: "Nghe đoạn hội thoại ở tiệm bánh mì, sau đó trả lời. Bạn có thể nghe lại bao nhiêu lần tùy thích." },
  audio: { titre: "Dialogue : à la boulangerie",
    script: [
      "– Cliente : Bonjour madame. Je voudrais une baguette et deux croissants, s'il vous plaît.",
      "– Boulangère : Voilà. Ça fait trois euros dix.",
      "– Cliente : Tenez. Vous êtes ouverts dimanche ?",
      "– Boulangère : Oui, le dimanche, nous ouvrons de sept heures à midi.",
      "– Cliente : Parfait, merci. Bonne journée !"
    ] },
  items: [
    { type: "qcm", question: "Qu'est-ce que la cliente achète ?", choix: ["Deux baguettes et un croissant.", "Une baguette et deux croissants.", "Un gâteau au chocolat."], r: 1,
      e: "Elle dit : « Je voudrais une baguette et deux croissants. »" },
    { type: "qcm", question: "Combien est-ce que ça coûte ?", choix: ["2,10 €", "3,50 €", "3,10 €"], r: 2,
      e: "La boulangère dit : « Ça fait trois euros dix », c'est-à-dire 3,10 €." },
    { type: "qcm", question: "Le dimanche, la boulangerie ouvre…", choix: ["à sept heures.", "à huit heures.", "à midi."], r: 0,
      e: "« Le dimanche, nous ouvrons de sept heures à midi. » Midi, c'est l'heure de fermeture." },
    { type: "saisie", question: "Le dimanche, la boulangerie ferme à quelle heure ? (un mot)", reponses: ["midi", "12 heures", "12 h"],
      e: "Elle est ouverte « de sept heures à midi »." }
  ]
};
