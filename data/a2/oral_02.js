// DELF A2 – Compréhension de l'oral – Sujet 2
// Textes originaux (proposés avec l'aide de ChatGPT, corrigés et validés par Rémi).
// Corrections de Rémi : exercice 2, document 1 (photographe des paysages au lever du soleil,
// question 1 réponse C) ; exercice 1, document 6 (« mairie »).
// Audios créés par Rémi (Google AI Studio), à ranger dans audio/ : oral02_ex1_doc1.mp3, etc.
//
// Même rangement que oral_01.js :
// - audio: "" = audio pas encore reçu : la page affiche « Audio bientôt disponible » ;
// - <span data-s="a">…</span> = phrase surlignée à la correction (question : s:"a") ;
// - temps officiels : exercices 1 et 2 = 15 / 10 / 10 s ; exercices 3 et 4 = 30 / 30 / 30 s.

window.SUJET = {
  numero: 2,
  exercices: [

    // ---------------------------------------------------------------
    {
      titre: "Exercice 1 – Annonces publiques",
      points: 6,
      lecture: 15, pause: 10, apres: 10,
      consigne: "Vous allez écouter six annonces publiques. Pour chaque annonce, lisez la question, écoutez, puis répondez.",
      documents: [
        { id: "d1", titre: "Document 1 – À la médiathèque", audio: "oral02_ex1_doc1.mp3",
          transcription: `<p><span data-s="a">Attention, la médiathèque sera exceptionnellement fermée mardi matin pour une réunion du personnel.</span> Elle ouvrira à quatorze heures. Les livres réservés pourront être retirés mercredi.</p>` },
        { id: "d2", titre: "Document 2 – Le marché", audio: "oral02_ex1_doc2.mp3",
          transcription: `<p>Le marché de la place centrale commencera une heure plus tôt demain. <span data-s="a">Les commerçants seront installés dès sept heures.</span> Merci de laisser libres les accès aux garages pendant la matinée.</p>` },
        { id: "d3", titre: "Document 3 – Un objet trouvé", audio: "oral02_ex1_doc3.mp3",
          transcription: `<p>Une paire de lunettes a été trouvée près de l'entrée du parc. Elle est noire, avec une petite boîte bleue. <span data-s="a">La personne qui l'a perdue peut appeler l'accueil municipal.</span></p>` },
        { id: "d4", titre: "Document 4 – Une salle chauffée", audio: "oral02_ex1_doc4.mp3",
          transcription: `<p><span data-s="a">En raison du froid, la mairie ouvre une salle chauffée pour les personnes qui en ont besoin.</span> Elle se trouve rue des Écoles et sera ouverte jusqu'à vingt heures.</p>` },
        { id: "d5", titre: "Document 5 – Un cours de cuisine", audio: "oral02_ex1_doc5.mp3",
          transcription: `<p><span data-s="a">Le cours de cuisine prévu ce soir est déplacé à jeudi, même heure.</span> Les participants doivent garder leur réservation. Pour toute question, contactez directement l'animatrice avant midi.</p>` },
        { id: "d6", titre: "Document 6 – Une collecte de vêtements", audio: "oral02_ex1_doc6.mp3",
          transcription: `<p><span data-s="a">Une collecte de vêtements pour enfants aura lieu samedi devant la mairie. Vous pouvez apporter des vêtements propres et en bon état, de la naissance à douze ans.</span></p>` }
      ],
      questions: [
        { doc: "d1", s: "a", q: "Pourquoi la médiathèque sera-t-elle fermée mardi matin ?",
          choix: ["Parce que les livres sont déplacés.", "Parce que le personnel a une réunion.", "Parce que les employés sont en vacances."], r: 1, p: 2,
          e: "Elle est fermée « pour une réunion du personnel »." },
        { doc: "d2", s: "a", q: "À quelle heure les commerçants seront-ils installés ?",
          choix: ["À sept heures.", "À huit heures.", "À neuf heures."], r: 0, p: 1,
          e: "« Les commerçants seront installés dès sept heures. »" },
        { doc: "d3", s: "a", q: "Que doit faire la personne qui a perdu ses lunettes ?",
          choix: ["Aller au parc demain matin.", "Acheter une nouvelle boîte.", "Contacter l'accueil de la mairie."], r: 2, p: 1,
          e: "Elle « peut appeler l'accueil municipal », c'est-à-dire l'accueil de la mairie." },
        { doc: "d4", s: "a", q: "Pourquoi cette salle est-elle ouverte ?",
          choix: ["Pour permettre aux personnes de se réchauffer.", "Pour organiser des activités pour les enfants.", "Pour accueillir une réunion municipale."], r: 0, p: 0.5,
          e: "« En raison du froid », la mairie ouvre « une salle chauffée » : on peut s'y réchauffer." },
        { doc: "d5", s: "a", q: "Quand aura lieu le cours de cuisine ?",
          choix: ["Ce soir.", "Mercredi soir.", "Jeudi soir."], r: 2, p: 0.5,
          e: "Le cours de ce soir est « déplacé à jeudi, même heure » : il aura lieu jeudi soir." },
        { doc: "d6", s: "a", q: "Quels vêtements peut-on donner ?",
          choix: ["Seulement des vêtements neufs.", "Des vêtements d'enfants en bon état.", "Des vêtements pour les adultes seulement."], r: 1, p: 1,
          e: "C'est une collecte de « vêtements pour enfants », « propres et en bon état »." }
      ]
    },

    // ---------------------------------------------------------------
    {
      titre: "Exercice 2 – À la radio",
      points: 6,
      lecture: 15, pause: 10, apres: 10,
      consigne: "Vous allez écouter trois extraits d'une émission de radio. Lisez les questions, écoutez, puis répondez.",
      documents: [
        { id: "d1", titre: "Document 1 – Une photographe", audio: "oral02_ex2_doc1.mp3",
          transcription: `<p><span data-s="a">Aujourd'hui, notre émission reçoit une jeune photographe qui photographie les paysages au lever du soleil.</span> <span data-s="b">Elle explique comment elle prépare ses images et pourquoi elle préfère travailler très tôt le matin, quand les rues sont calmes et la lumière naturelle revient doucement.</span></p>` },
        { id: "d2", titre: "Document 2 – Un marché aux plantes", audio: "oral02_ex2_doc2.mp3",
          transcription: `<p>Le marché aux plantes ouvrira dimanche dans le jardin public. <span data-s="a">On pourra acheter des fleurs, des plantes pour la maison et quelques graines.</span> <span data-s="b">Des jardiniers seront présents pour donner des conseils aux visiteurs et répondre aux questions des débutants.</span></p>` },
        { id: "d3", titre: "Document 3 – La météo", audio: "oral02_ex2_doc3.mp3",
          transcription: `<p>Après plusieurs jours de pluie, le soleil revient demain. Le matin sera encore frais, avec quelques nuages. <span data-s="a">L'après-midi, les températures monteront jusqu'à dix-neuf degrés.</span> <span data-s="b">Une petite averse reste possible en fin de journée, surtout dans le nord.</span></p>` }
      ],
      questions: [
        { doc: "d1", s: "a", q: "Quel type de photos fait la photographe ?",
          choix: ["Des portraits de famille.", "Des photos de magasins.", "Des paysages au lever du jour."], r: 2, p: 0.5,
          e: "C'est une photographe « qui photographie les paysages au lever du soleil »." },
        { doc: "d1", s: "b", q: "Pourquoi aime-t-elle travailler tôt le matin ?",
          choix: ["Parce que les rues sont tranquilles.", "Parce que les magasins ouvrent tôt.", "Parce qu'elle rencontre beaucoup de personnes."], r: 0, p: 1,
          e: "Elle préfère travailler tôt le matin, « quand les rues sont calmes »." },
        { doc: "d2", s: "a", q: "Qu'est-ce qu'on pourra acheter au marché ?",
          choix: ["Des vêtements et des chaussures.", "Des fleurs, des plantes et des graines.", "Des meubles pour le jardin."], r: 1, p: 1,
          e: "« On pourra acheter des fleurs, des plantes pour la maison et quelques graines. »" },
        { doc: "d2", s: "b", q: "Que pourront faire les visiteurs ?",
          choix: ["Demander des conseils aux jardiniers.", "Participer à un concours de cuisine.", "Visiter gratuitement une exposition."], r: 0, p: 1,
          e: "« Des jardiniers seront présents pour donner des conseils aux visiteurs. »" },
        { doc: "d3", s: "a", q: "Quel temps fera-t-il demain après-midi ?",
          choix: ["Il fera très froid toute la journée.", "Il y aura de la neige dans le nord.", "Il fera plus chaud avec du soleil."], r: 2, p: 2,
          e: "« Le soleil revient demain » et l'après-midi, « les températures monteront jusqu'à dix-neuf degrés »." },
        { doc: "d3", s: "b", q: "Quel temps est encore possible en fin de journée ?",
          choix: ["Un orage dans toute la région.", "Une petite pluie dans le nord.", "De fortes chutes de neige."], r: 1, p: 0.5,
          e: "« Une petite averse reste possible en fin de journée, surtout dans le nord. » Une averse, c'est une pluie courte." }
      ]
    },

    // ---------------------------------------------------------------
    {
      titre: "Exercice 3 – Message sur un répondeur",
      points: 6,
      lecture: 30, pause: 30, apres: 30,
      consigne: "Vous allez écouter un message laissé sur un répondeur. Lisez les questions, écoutez, puis répondez.",
      documents: [
        { id: "d1", titre: "Message de Marc", audio: "oral02_ex3_doc1.mp3",
          transcription: `<p>Salut Julie, c'est Marc. Je t'appelle pour notre dîner de ce soir. <span data-s="a">Je suis désolé, mais je ne pourrai pas venir : mon fils a de la fièvre et je dois rester avec lui.</span> <span data-s="b">Est-ce qu'on peut déplacer notre dîner à samedi à dix-neuf heures ?</span> <span data-s="c">Je peux apporter le dessert.</span> <span data-s="d">J'ai déjà acheté les légumes et le fromage, je les garderai pour samedi.</span> <span data-s="e">Dis-moi si cela te convient et rappelle-moi quand tu auras ce message.</span> <span data-s="f">Si tu préfères, nous pouvons choisir dimanche soir.</span> Merci et à bientôt.</p>` }
      ],
      questions: [
        { doc: "d1", s: "a", q: "Pourquoi Marc ne peut-il pas venir au dîner ?",
          choix: ["Il doit travailler ce soir.", "Son fils est malade.", "Il doit faire des courses."], r: 1, p: 0.5,
          e: "« Mon fils a de la fièvre et je dois rester avec lui » : son fils est malade." },
        { doc: "d1", s: "b", q: "Quand Marc propose-t-il de faire le dîner ?",
          choix: ["Vendredi à dix-neuf heures.", "Dimanche après-midi.", "Samedi à dix-neuf heures."], r: 2, p: 2,
          e: "« Est-ce qu'on peut déplacer notre dîner à samedi à dix-neuf heures ? » Dimanche, c'est le soir, et seulement si Julie préfère." },
        { doc: "d1", s: "c", q: "Qu'est-ce que Marc peut apporter ?",
          choix: ["Le dessert.", "Les boissons.", "Le pain."], r: 0, p: 0.5,
          e: "« Je peux apporter le dessert. »" },
        { doc: "d1", s: "d", q: "Qu'a-t-il déjà acheté ?",
          choix: ["Un gâteau et des fruits.", "Du pain et des boissons.", "Des légumes et du fromage."], r: 2, p: 0.5,
          e: "« J'ai déjà acheté les légumes et le fromage. »" },
        { doc: "d1", s: "e", q: "Que demande Marc à Julie ?",
          choix: ["De venir chez lui.", "De lui dire si la nouvelle date lui convient.", "De préparer le repas pour samedi."], r: 1, p: 1.5,
          e: "« Dis-moi si cela te convient et rappelle-moi. »" },
        { doc: "d1", s: "f", q: "Que peut faire Julie si samedi ne lui convient pas ?",
          choix: ["Proposer dimanche soir.", "Annuler définitivement le dîner.", "Inviter Marc à déjeuner demain."], r: 0, p: 1,
          e: "« Si tu préfères, nous pouvons choisir dimanche soir. »" }
      ]
    },

    // ---------------------------------------------------------------
    {
      titre: "Exercice 4 – Quatre dialogues",
      points: 7,
      lecture: 30, pause: 30, apres: 30,
      consigne: "Vous allez écouter quatre dialogues. Associez chaque dialogue à la bonne situation. Attention : deux situations ne sont pas utilisées.",
      documents: [
        { id: "d1", titre: "Dialogue 1", audio: "oral02_ex4_doc1.mp3",
          transcription: `<p>– Femme : <span data-s="a">Bonjour, je voudrais envoyer ce colis en Italie.</span><br>– Homme : D'accord. Il pèse combien ?<br>– Femme : Environ deux kilos. Je voudrais aussi un suivi.<br>– Homme : C'est possible. La livraison prendra environ cinq jours.<br>– Femme : Très bien, je choisis cette formule.</p>` },
        { id: "d2", titre: "Dialogue 2", audio: "oral02_ex4_doc2.mp3",
          transcription: `<p>– Homme : <span data-s="a">Bonjour, je voudrais changer mon rendez-vous.</span><br>– Femme : Quel rendez-vous avez-vous ?<br>– Homme : Celui de mardi matin. Je travaille à cette heure-là.<br>– Femme : Je peux vous proposer jeudi à quinze heures.<br>– Homme : Oui, jeudi après-midi me convient.</p>` },
        { id: "d3", titre: "Dialogue 3", audio: "oral02_ex4_doc3.mp3",
          transcription: `<p>– Femme : Excusez-moi, cette chambre est-elle encore disponible ?<br>– Homme : Oui, pour combien de nuits ?<br>– Femme : <span data-s="a">Pour deux nuits, à partir de vendredi.</span><br>– Homme : Très bien. Le petit-déjeuner est compris dans le prix.<br>– Femme : Parfait, je voudrais réserver cette chambre.</p>` },
        { id: "d4", titre: "Dialogue 4", audio: "oral02_ex4_doc4.mp3",
          transcription: `<p>– Homme : <span data-s="a">Bonjour, je cherche une paire de chaussures pour marcher.</span><br>– Femme : Quelle pointure faites-vous ?<br>– Homme : Du quarante-deux. Je voudrais quelque chose de confortable.<br>– Femme : Nous avons ce modèle, à soixante euros.<br>– Homme : Très bien, je peux les essayer ?</p>` }
      ],
      questions: [
        { doc: "d1", s: "a", q: "Le dialogue 1 correspond à…", choix: ["Vous voulez acheter des chaussures pour marcher.", "Vous voulez envoyer un colis dans un autre pays.", "Vous voulez changer la date d'un rendez-vous.", "Vous voulez réserver une chambre pour deux nuits.", "Vous voulez acheter des fournitures scolaires.", "Vous voulez louer une voiture pour quelques jours."], r: 1, p: 2,
          e: "La femme veut « envoyer ce colis en Italie » : c'est un autre pays." },
        { doc: "d2", s: "a", q: "Le dialogue 2 correspond à…", choix: ["Vous voulez acheter des chaussures pour marcher.", "Vous voulez envoyer un colis dans un autre pays.", "Vous voulez changer la date d'un rendez-vous.", "Vous voulez réserver une chambre pour deux nuits.", "Vous voulez acheter des fournitures scolaires.", "Vous voulez louer une voiture pour quelques jours."], r: 2, p: 0.5,
          e: "L'homme veut « changer [son] rendez-vous » de mardi à jeudi." },
        { doc: "d3", s: "a", q: "Le dialogue 3 correspond à…", choix: ["Vous voulez acheter des chaussures pour marcher.", "Vous voulez envoyer un colis dans un autre pays.", "Vous voulez changer la date d'un rendez-vous.", "Vous voulez réserver une chambre pour deux nuits.", "Vous voulez acheter des fournitures scolaires.", "Vous voulez louer une voiture pour quelques jours."], r: 3, p: 2.5,
          e: "La femme veut réserver la chambre « pour deux nuits, à partir de vendredi »." },
        { doc: "d4", s: "a", q: "Le dialogue 4 correspond à…", choix: ["Vous voulez acheter des chaussures pour marcher.", "Vous voulez envoyer un colis dans un autre pays.", "Vous voulez changer la date d'un rendez-vous.", "Vous voulez réserver une chambre pour deux nuits.", "Vous voulez acheter des fournitures scolaires.", "Vous voulez louer une voiture pour quelques jours."], r: 0, p: 2,
          e: "L'homme cherche « une paire de chaussures pour marcher »." }
      ]
    }
  ]
};
