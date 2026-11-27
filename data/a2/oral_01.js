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
// Sujet complet : 4 exercices, 25 points.

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
    },

    // ---------------------------------------------------------------
    {
      titre: "Exercice 2 – À la radio",
      points: 6,
      lecture: 15, pause: 10, apres: 10,
      consigne: "Vous écoutez la radio. Lisez les questions, écoutez, puis répondez.",
      documents: [
        {
          id: "d1",
          titre: "Document 1 – Un festival",
          audio: "oral01_ex2_doc1.mp3",
          transcription: `<p><span data-s="a">Samedi, dans le parc de la ville, venez assister au grand festival de danse africaine.</span> Le spectacle commence à 15 heures. <span data-s="b">L'entrée coûte 5 euros, et c'est gratuit pour les enfants de moins de 12 ans.</span></p>`
        },
        {
          id: "d2",
          titre: "Document 2 – Une salle de sport",
          audio: "oral01_ex2_doc2.mp3",
          transcription: `<p>Bonne nouvelle pour les sportifs : la ville ouvre une nouvelle salle de sport au centre-ville. <span data-s="a">Elle est ouverte sept jours sur sept, de 7 heures à 22 heures.</span> <span data-s="b">Et ce mois-ci, le premier cours de yoga est gratuit.</span></p>`
        },
        {
          id: "d3",
          titre: "Document 3 – Un café original",
          audio: "oral01_ex2_doc3.mp3",
          transcription: `<p><span data-s="a">Une idée originale à Bordeaux : un café où l'on peut réparer soi-même ses objets cassés, avec l'aide de bénévoles.</span> <span data-s="b">Le samedi après-midi, on vous apprend aussi à réparer votre vélo.</span></p>`
        }
      ],
      questions: [
        { doc: "d1", s: "a", q: "De quel événement parle la journaliste ?",
          choix: ["Un concert.", "Un spectacle de danse.", "Une pièce de théâtre."], r: 1, p: 0.5,
          e: "La journaliste parle du « grand festival de danse africaine »." },
        { doc: "d1", s: "b", q: "Qui ne paie pas ?",
          choix: ["Les étudiants.", "Les personnes âgées.", "Les jeunes enfants."], r: 2, p: 1,
          e: "C'est « gratuit pour les enfants de moins de 12 ans »." },
        { doc: "d2", s: "a", q: "Quand la salle est-elle ouverte ?",
          choix: ["Tous les jours.", "Du lundi au vendredi.", "Seulement le week-end."], r: 0, p: 1,
          e: "Elle est ouverte « sept jours sur sept » : c'est tous les jours." },
        { doc: "d2", s: "b", q: "Qu'est-ce qui est gratuit ce mois-ci ?",
          choix: ["Un cours de natation.", "Un cours de yoga.", "Un cours de danse."], r: 1, p: 1,
          e: "« Ce mois-ci, le premier cours de yoga est gratuit. »" },
        { doc: "d3", s: "a", q: "Pourquoi ce café est-il spécial ?",
          choix: ["On peut y réparer ses objets.", "Les boissons sont gratuites.", "Il est ouvert toute la nuit."], r: 0, p: 2,
          e: "Dans ce café, « on peut réparer soi-même ses objets cassés »." },
        { doc: "d3", s: "b", q: "Qu'est-ce qu'on apprend le samedi ?",
          choix: ["À cuisiner.", "À réparer un vélo.", "À dessiner."], r: 1, p: 0.5,
          e: "« Le samedi après-midi, on vous apprend aussi à réparer votre vélo. »" }
      ]
    },

    // ---------------------------------------------------------------
    {
      titre: "Exercice 3 – Message sur un répondeur",
      points: 6,
      lecture: 30, pause: 30, apres: 30,
      consigne: "Vous travaillez dans un restaurant. Vous écoutez ce message sur le répondeur. Lisez les questions, écoutez, puis répondez.",
      documents: [
        {
          id: "d1",
          titre: "Message de M. Garnier",
          audio: "oral01_ex3_doc1.mp3",
          transcription: `<p>Bonjour, ici Monsieur Garnier. <span data-s="a">Je voudrais réserver une table pour vendredi soir, pour fêter la retraite de mon collègue.</span> <span data-s="b">Nous serons douze personnes.</span> <span data-s="c">Nous aimerions une table dans le jardin, s'il fait beau.</span> <span data-s="e">Deux personnes sont végétariennes : est-ce que vous avez des plats sans viande ?</span> <span data-s="d">Rappelez-moi pour me dire si c'est possible.</span> Mon numéro est le 06 24 58 71 30. <span data-s="f">Ma femme passera mercredi pour payer l'acompte.</span> Merci beaucoup !</p>`
        }
      ],
      questions: [
        { doc: "d1", s: "a", q: "Qu'est-ce que Monsieur Garnier veut fêter ?",
          choix: ["Son anniversaire.", "La retraite d'un collègue.", "Un mariage."], r: 1, p: 0.5,
          e: "Il réserve une table « pour fêter la retraite de [son] collègue »." },
        { doc: "d1", s: "b", q: "Combien de personnes vont venir ?",
          choix: ["10.", "12.", "20."], r: 1, p: 2,
          e: "« Nous serons douze personnes. »" },
        { doc: "d1", s: "c", q: "Où Monsieur Garnier aimerait-il manger ?",
          choix: ["Dans le jardin.", "Près de la fenêtre.", "Dans une salle privée."], r: 0, p: 0.5,
          e: "« Nous aimerions une table dans le jardin, s'il fait beau. »" },
        { doc: "d1", s: "e", q: "Monsieur Garnier veut savoir si le restaurant propose…",
          choix: ["des plats sans viande.", "des desserts.", "des menus pour enfants."], r: 0, p: 0.5,
          e: "« Deux personnes sont végétariennes : est-ce que vous avez des plats sans viande ? »" },
        { doc: "d1", s: "d", q: "Vous devez…",
          choix: ["rappeler Monsieur Garnier.", "envoyer un courriel à Monsieur Garnier.", "attendre un appel de Monsieur Garnier."], r: 0, p: 1.5,
          e: "Il demande : « Rappelez-moi pour me dire si c'est possible », et il donne son numéro." },
        { doc: "d1", s: "f", q: "Qui va passer mercredi ?",
          choix: ["Monsieur Garnier.", "Son collègue.", "La femme de Monsieur Garnier."], r: 2, p: 1,
          e: "« Ma femme passera mercredi pour payer l'acompte. »" }
      ]
    },

    // ---------------------------------------------------------------
    {
      titre: "Exercice 4 – Quatre dialogues",
      points: 7,
      lecture: 30, pause: 30, apres: 30,
      consigne: "Vous écoutez 4 dialogues. Associez chaque dialogue à une situation. Attention : il y a 6 situations mais seulement 4 dialogues.",
      documents: [
        {
          id: "d1",
          titre: "Dialogue 1",
          audio: "oral01_ex4_doc1.mp3",
          transcription: `<p>– Femme : <span data-s="a">Excusez-moi, monsieur, la poste, s'il vous plaît ?</span><br>– Homme : Allez tout droit, puis tournez à gauche après la boulangerie.<br>– Femme : C'est loin ?<br>– Homme : Non, cinq minutes à pied.</p>`
        },
        {
          id: "d2",
          titre: "Dialogue 2",
          audio: "oral01_ex4_doc2.mp3",
          transcription: `<p>– Homme : Salut Julie ! Tu es libre samedi soir ?<br>– Femme : Oui, pourquoi ?<br>– Homme : <span data-s="a">Je fais une petite fête chez moi pour mes 30 ans. Tu veux venir ?</span><br>– Femme : Avec plaisir !</p>`
        },
        {
          id: "d3",
          titre: "Dialogue 3",
          audio: "oral01_ex4_doc3.mp3",
          transcription: `<p>– Femme : <span data-s="a">Bonjour, un aller-retour pour Marseille, s'il vous plaît.</span><br>– Homme : Pour quel jour ?<br>– Femme : Demain matin, vers 8 heures.<br>– Homme : Ça fait 64 euros, s'il vous plaît.</p>`
        },
        {
          id: "d4",
          titre: "Dialogue 4",
          audio: "oral01_ex4_doc4.mp3",
          transcription: `<p>– Homme : <span data-s="a">Pardon, je suis vraiment désolé, je suis en retard.</span><br>– Femme : Ce n'est pas grave. Qu'est-ce qui s'est passé ?<br>– Homme : Mon bus n'est pas venu. Excuse-moi encore.<br>– Femme : Ne t'inquiète pas, le film n'a pas commencé.</p>`
        }
      ],
      questions: [
        { doc: "d1", s: "a", q: "Le dialogue 1 correspond à…", choix: ["Inviter quelqu'un.", "Remercier quelqu'un.", "Demander un service.", "S'excuser.", "Acheter un billet.", "Demander son chemin."], r: 5, p: 2,
          e: "La femme cherche la poste : « la poste, s'il vous plaît ? ». Elle demande son chemin." },
        { doc: "d2", s: "a", q: "Le dialogue 2 correspond à…", choix: ["Inviter quelqu'un.", "Remercier quelqu'un.", "Demander un service.", "S'excuser.", "Acheter un billet.", "Demander son chemin."], r: 0, p: 0.5,
          e: "L'homme invite Julie à sa fête : « Tu veux venir ? »" },
        { doc: "d3", s: "a", q: "Le dialogue 3 correspond à…", choix: ["Inviter quelqu'un.", "Remercier quelqu'un.", "Demander un service.", "S'excuser.", "Acheter un billet.", "Demander son chemin."], r: 4, p: 2.5,
          e: "La femme achète « un aller-retour pour Marseille » : c'est un billet de train." },
        { doc: "d4", s: "a", q: "Le dialogue 4 correspond à…", choix: ["Inviter quelqu'un.", "Remercier quelqu'un.", "Demander un service.", "S'excuser.", "Acheter un billet.", "Demander son chemin."], r: 3, p: 2,
          e: "L'homme s'excuse d'être en retard : « je suis vraiment désolé », « excuse-moi encore »." }
      ]
    }
  ]
};
