// DELF A2 – Compréhension de l'oral – Sujet 1
// Textes originaux. Audios créés par Rémi (Google AI Studio), rangés dans audio/.
//
// Comme pour la compréhension des écrits :
// - chaque document a un fichier audio et sa transcription ;
// - dans la transcription, <span data-s="a">…</span> marque la phrase
//   qui sera surlignée à la correction (question : s:"a") ;
// - temps officiels, en secondes, réglés pour chaque exercice :
//   lecture = pour lire les questions avant la 1re écoute,
//   pause   = entre les deux écoutes,
//   apres   = après la 2e écoute, pour compléter les réponses.
//   Exercices 1 et 2 : 15 / 10 / 10. Exercices 3 et 4 : 30 / 30 / 30.
//
// Sujet en cours de construction : un seul document pour l'instant.
// Le sujet complet aura 4 exercices et 25 points.

window.SUJET = {
  numero: 1,
  exercices: [

    // ---------------------------------------------------------------
    {
      titre: "Exercice 1",
      points: 2,
      lecture: 15, pause: 10, apres: 10,
      consigne: "Vous êtes à la gare. Vous entendez cette annonce. Lisez la question, écoutez le document, puis répondez.",
      documents: [
        {
          id: "d1",
          titre: "Document 1 – Annonce à la gare",
          audio: "oral01_ex1_doc1.mp3",
          transcription: `<p>Mesdames et messieurs, le train pour Lyon partira avec vingt minutes de retard. <span data-s="a">Merci de rester sur le quai numéro 4.</span> Nous vous prions de nous excuser.</p>`
        }
      ],
      questions: [
        { doc: "d1", s: "a", q: "Qu'est-ce que vous devez faire ?",
          choix: ["Changer de quai.", "Attendre sur le même quai.", "Prendre un autre train."], r: 1, p: 2,
          e: "Le train a du retard, mais l'annonce dit : « Merci de rester sur le quai numéro 4. »" }
      ]
    }
  ]
};
