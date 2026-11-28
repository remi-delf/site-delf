// Contenu écrit par ChatGPT, corrigé et validé par Rémi. Audio de Rémi (serie3.mp3).
// Traduction de la consigne : par l'IA, à faire relire.
window.SERIE = {
  rubrique: { fr: "Compréhension orale", en: "Listening", zh: "听力理解", vi: "Nghe hiểu" },
  titre: "Un service entre voisins",
  consigne: { fr: "Écoutez le dialogue, puis répondez. Vous pouvez réécouter autant de fois que vous voulez.",
    en: "Listen to the dialogue, then answer. You can listen again as many times as you like.",
    zh: "听这段对话，然后回答。你可以随意重复收听。",
    vi: "Nghe đoạn hội thoại, sau đó trả lời. Bạn có thể nghe lại bao nhiêu lần tùy thích." },
  audio: { titre: "Dialogue", fichier: "a2_ecoute_voisins.mp3",
    script: [
      "Voix 1 : Bonjour Sami, tu as vu le message du voisin ?",
      "Voix 2 : Non, quel message ?",
      "Voix 1 : Il aimerait que tu ailles chez lui pour arroser ses plantes la semaine prochaine.",
      "Voix 2 : Je peux le faire. Il part quand ?",
      "Voix 1 : Il part lundi à huit heures et il aimerait que tu passes vers sept heures.",
      "Voix 2 : D’accord. Je peux aussi relever son courrier.",
      "Voix 1 : C’est gentil. Il rentre dimanche soir."
    ] },
  items: [
    { type: "qcm", question: "Que cherche le voisin ?", choix: ["Quelqu’un pour promener son chien.", "Quelqu’un pour arroser ses plantes.", "Quelqu’un pour nettoyer son appartement."], r: 1,
      e: "Le voisin cherche quelqu’un pour arroser ses plantes." },
    { type: "qcm", question: "Quand Sami doit-il passer chez le voisin ?", choix: ["Vers sept heures.", "Vers huit heures.", "Vers neuf heures."], r: 0,
      e: "Le voisin souhaite que Sami passe vers sept heures." },
    { type: "qcm", question: "Que propose aussi Sami ?", choix: ["Acheter des plantes.", "Garder son chat.", "Relever son courrier."], r: 2,
      e: "Sami propose également de relever le courrier." },
    { type: "qcm", question: "Quand le voisin rentre-t-il ?", choix: ["Samedi soir.", "Dimanche soir.", "Lundi matin."], r: 1,
      e: "Le voisin rentre dimanche soir." }
  ]
};
