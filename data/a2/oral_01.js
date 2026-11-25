// DELF A2 – Compréhension de l'oral – Sujet 1
// Textes originaux (document de Rémi « DELF A2 – Compréhension de l'oral – Sujet 1 »).
// Audios créés par Rémi (Google AI Studio), convertis en MP3, rangés dans audio/.
//
// Comme pour la compréhension des écrits :
// - chaque document a un fichier audio et sa transcription ;
// - audio: "" = audio pas encore reçu : la page affiche « Audio bientôt disponible » ;
// - dans la transcription, <span data-s="a">…</span> marque la phrase
//   qui sera surlignée à la correction (question : s:"a") ;
// - temps officiels, en secondes, réglés pour chaque exercice :
//   lecture = pour lire les questions avant la 1re écoute,
//   pause   = entre les deux écoutes,
//   apres   = après la 2e écoute, pour compléter les réponses.
//   Exercices 1 et 2 : 15 / 10 / 10. Exercices 3 et 4 : 30 / 30 / 30.
//
// Sujet en cours de construction : exercice 1 seulement pour l'instant.
// Le sujet complet aura 4 exercices et 25 points.

window.SUJET = {
  numero: 1,
  exercices: [

    // ---------------------------------------------------------------
    {
      titre: "Exercice 1 – Annonces publiques",
      points: 6,
      lecture: 15, pause: 10, apres: 10,
      consigne: "Vous écoutez des annonces publiques. Pour chaque document : lisez la question, écoutez, puis répondez.",
      documents: [
        {
          id: "d1",
          titre: "Document 1 – À la gare",
          audio: "oral01_ex1_doc1.mp3",
          transcription: `<p>Mesdames et messieurs, le train pour Lyon partira avec vingt minutes de retard. <span data-s="a">Merci de rester sur le quai numéro 4.</span> Nous vous prions de nous excuser.</p>`
        },
        {
          id: "d2",
          titre: "Document 2 – Dans un magasin",
          audio: "oral01_ex1_doc2.mp3",
          transcription: `<p>Chers clients, notre magasin ferme dans dix minutes. Merci de passer aux caisses. <span data-s="a">Nous sommes ouverts demain dès 9 heures.</span></p>`
        },
        {
          id: "d3",
          titre: "Document 3 – Au musée",
          audio: "oral01_ex1_doc3.mp3",
          transcription: `<p>Bienvenue au musée. Les visites guidées commencent toutes les heures. <span data-s="a">Pour vous inscrire, adressez-vous à l'accueil, à côté de l'entrée.</span></p>`
        },
        {
          id: "d4",
          titre: "Document 4 – Au cinéma",
          audio: "oral01_ex1_doc4.mp3",
          transcription: `<p>Bonjour à tous. Le film va commencer. Nous vous demandons d'éteindre vos téléphones portables. <span data-s="a">Il est aussi interdit de manger dans la salle.</span> Bonne séance !</p>`
        },
        {
          id: "d5",
          titre: "Document 5 – À la piscine",
          audio: "oral01_ex1_doc5.mp3",
          transcription: `<p>Attention, s'il vous plaît. <span data-s="a">La piscine extérieure est fermée aujourd'hui à cause de l'orage.</span> La piscine intérieure reste ouverte jusqu'à 20 heures.</p>`
        },
        {
          id: "d6",
          titre: "Document 6 – Au supermarché",
          audio: "oral01_ex1_doc6.mp3",
          transcription: `<p><span data-s="a">Cette semaine seulement, au rayon boulangerie, deux baguettes achetées, la troisième est offerte !</span> Profitez-en vite !</p>`
        }
      ],
      questions: [
        { doc: "d1", s: "a", q: "Qu'est-ce que vous devez faire ?",
          choix: ["Changer de quai.", "Attendre sur le même quai.", "Prendre un autre train."], r: 1, p: 2,
          e: "Le train a du retard, mais l'annonce dit : « Merci de rester sur le quai numéro 4. »" },
        { doc: "d2", s: "a", q: "Quand le magasin ouvre-t-il demain ?",
          choix: ["À 8 h.", "À 9 h.", "À 10 h."], r: 1, p: 1,
          e: "L'annonce dit : « Nous sommes ouverts demain dès 9 heures. »" },
        { doc: "d3", s: "a", q: "Où pouvez-vous vous inscrire ?",
          choix: ["Sur Internet.", "À l'accueil.", "Par téléphone."], r: 1, p: 1,
          e: "Pour s'inscrire, il faut s'adresser « à l'accueil, à côté de l'entrée »." },
        { doc: "d4", s: "a", q: "Qu'est-ce qui est interdit ?",
          choix: ["Boire.", "Manger.", "Parler."], r: 1, p: 0.5,
          e: "« Il est aussi interdit de manger dans la salle. »" },
        { doc: "d5", s: "a", q: "Pourquoi la piscine extérieure est-elle fermée ?",
          choix: ["À cause du mauvais temps.", "À cause de travaux.", "À cause d'un accident."], r: 0, p: 0.5,
          e: "Elle est fermée « à cause de l'orage » : c'est le mauvais temps." },
        { doc: "d6", s: "a", q: "Qu'est-ce qui est en promotion ?",
          choix: ["Le pain.", "Les gâteaux.", "Le fromage."], r: 0, p: 1,
          e: "La promotion est « au rayon boulangerie » : pour deux baguettes achetées, la troisième est offerte. Les baguettes, c'est du pain." }
      ]
    }
  ]
};
