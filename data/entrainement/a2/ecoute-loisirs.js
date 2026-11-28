// Contenu écrit par ChatGPT, corrigé et validé par Rémi. Audio de Rémi (serie4.mp3).
// Traduction de la consigne : par l'IA, à faire relire.
window.SERIE = {
  rubrique: { fr: "Compréhension orale", en: "Listening", zh: "听力理解", vi: "Nghe hiểu" },
  titre: "Une sortie au cinéma",
  consigne: { fr: "Écoutez le dialogue, puis répondez. Vous pouvez réécouter autant de fois que vous voulez.",
    en: "Listen to the dialogue, then answer. You can listen again as many times as you like.",
    zh: "听这段对话，然后回答。你可以随意重复收听。",
    vi: "Nghe đoạn hội thoại, sau đó trả lời. Bạn có thể nghe lại bao nhiêu lần tùy thích." },
  audio: { titre: "Dialogue", fichier: "a2_ecoute_loisirs.mp3",
    script: [
      "Voix 1 : Alors, tu as choisi une activité pour samedi ?",
      "Voix 2 : Oui, je vais au cinéma avec ma sœur.",
      "Voix 1 : Quel film allez-vous voir ?",
      "Voix 2 : Une comédie française. La séance commence à dix-huit heures.",
      "Voix 1 : Vous allez manger avant le film ?",
      "Voix 2 : Oui, nous allons prendre un sandwich près du cinéma. Ensuite, nous rentrerons directement à la maison."
    ] },
  items: [
    { type: "qcm", question: "Avec qui la personne va-t-elle au cinéma ?", choix: ["Avec son frère.", "Avec une amie.", "Avec sa sœur."], r: 2,
      e: "Elle dit qu’elle va au cinéma avec sa sœur." },
    { type: "qcm", question: "Quel type de film vont-ils voir ?", choix: ["Une comédie française.", "Un film d’action.", "Un documentaire."], r: 0,
      e: "Ils vont voir une comédie française." },
    { type: "qcm", question: "À quelle heure commence la séance ?", choix: ["À dix-sept heures.", "À dix-huit heures.", "À dix-neuf heures."], r: 1,
      e: "La séance commence à dix-huit heures." },
    { type: "qcm", question: "Que vont-ils manger ?", choix: ["Une pizza.", "Un gâteau.", "Un sandwich."], r: 2,
      e: "Ils vont prendre un sandwich près du cinéma." }
  ]
};
