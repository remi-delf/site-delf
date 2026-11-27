// DELF A2 – Compréhension des écrits – Sujet 7
// Textes originaux (proposés avec l'aide de ChatGPT, corrigés et validés par Rémi).
// Corrections de Rémi (exercice 1) : Inès « peut payer cinq euros » ;
// annonce 3 : « Réservé aux adultes. La séance coûte quatre euros. » ;
// ordre des personnes mélangé pour que les réponses ne suivent pas l'ordre des annonces.
// Ne jamais copier les vrais sujets.
//
// Même rangement que ecrits_01.js :
// - <span data-s="a">…</span> = phrase surlignée à la correction (question : s:"a") ;
// - doc:"d1" = document où se trouve la réponse ;
// - choix = réponses proposées, r = numéro de la bonne réponse (0 = la première),
//   p = points, e = explication.

window.SUJET = {
  numero: 7,
  exercices: [

    // ---------------------------------------------------------------
    {
      titre: "Exercice 1",
      points: 6,
      consigne: "Vous lisez ces annonces dans le journal de votre quartier. Ces personnes cherchent une activité, un service ou un travail. Pour chaque annonce, choisissez la personne qui correspond. Attention : deux personnes ne correspondent à aucune annonce.",
      intro: `<h3>Les personnes</h3>
<ul class="personnes">
<li><b>A. Sami</b>, 44 ans, a de petits objets en métal à donner pour le recyclage. Il est disponible vendredi de dix-sept heures à dix-neuf heures.</li>
<li><b>B. Inès</b>, 30 ans, aimerait apprendre à fabriquer des bougies mercredi après-midi. Elle peut payer cinq euros.</li>
<li><b>C. Léa</b>, 27 ans, cherche une coupe de cheveux pour samedi matin. Elle peut payer vingt-huit euros.</li>
<li><b>D. Chloé</b>, 16 ans, cherche une activité de dessin pour débutants mercredi après-midi. Elle peut payer cinq euros.</li>
<li><b>E. Marc</b>, 15 ans, aimerait participer à une activité d'astronomie jeudi soir. Il est disponible de dix-huit heures trente à vingt heures.</li>
<li><b>F. Hugo</b>, 20 ans, aimerait apprendre à fabriquer des bougies. Il est disponible mercredi après-midi et peut payer six euros.</li>
<li><b>G. Paul</b>, 52 ans, doit faire une copie d'une clé samedi matin. Il peut payer sept euros.</li>
<li><b>H. Nadia</b>, 34 ans, aimerait découvrir l'astronomie jeudi soir. Elle est disponible de dix-huit heures trente à vingt heures.</li>
</ul>`,
      choixCompacts: true,
      documents: [
        { id: "d1", html: `<h3>Annonce 1 – Salon de coiffure</h3>
<p><span data-s="a">Samedi, de neuf heures à midi, le salon propose une coupe pour adultes à vingt-huit euros.</span> Les clients doivent réserver avant vendredi. Un shampoing est compris dans le prix.</p>` },
        { id: "d2", html: `<h3>Annonce 2 – Atelier de bougies</h3>
<p><span data-s="a">Mercredi, de quinze heures à dix-sept heures, notre atelier accueille les débutants pour apprendre à fabriquer des bougies.</span> Le matériel est fourni. <span data-s="b">La séance coûte six euros</span> et l'inscription est obligatoire.</p>` },
        { id: "d3", html: `<h3>Annonce 3 – Soirée astronomie</h3>
<p><span data-s="a">Jeudi soir, de dix-huit heures trente à vingt heures, venez découvrir l'astronomie avec un animateur.</span> Vous observerez la Lune avec du matériel spécial. <span data-s="b">Réservé aux adultes.</span> La séance coûte quatre euros.</p>` },
        { id: "d4", html: `<h3>Annonce 4 – Collecte de métal</h3>
<p><span data-s="a">Vendredi, de dix-sept heures à dix-neuf heures, une association récupère les petits objets en métal pour les recycler.</span> Le dépôt est gratuit. Vous pouvez apporter vos objets directement à l'entrée.</p>` },
        { id: "d5", html: `<h3>Annonce 5 – Atelier dessin</h3>
<p><span data-s="a">Mercredi, de quatorze heures à seize heures, un atelier propose aux débutants de découvrir le dessin au crayon. Le matériel est fourni et la séance coûte cinq euros.</span> Inscription obligatoire.</p>` },
        { id: "d6", html: `<h3>Annonce 6 – Serrurier</h3>
<p><span data-s="a">Samedi, de dix heures à midi, un serrurier propose la copie de clés. Une clé simple coûte sept euros.</span> Il faut apporter la clé originale. Le service est sans rendez-vous.</p>` }
      ],
      questions: [
        { doc: "d1", s: "a", q: "L'annonce 1 correspond à…", choix: ["Sami","Inès","Léa","Chloé","Marc","Hugo","Paul","Nadia"], r: 2, p: 1.5,
          e: "Léa cherche une coupe samedi matin pour vingt-huit euros : le salon propose une coupe « samedi, de neuf heures à midi », « à vingt-huit euros »." },
        { doc: "d2", s: "a", q: "L'annonce 2 correspond à…", choix: ["Sami","Inès","Léa","Chloé","Marc","Hugo","Paul","Nadia"], r: 5, p: 1.5,
          e: "Hugo veut fabriquer des bougies mercredi après-midi et peut payer six euros : la séance coûte « six euros ». Attention : Inès veut la même activité, mais elle ne peut payer que cinq euros." },
        { doc: "d3", s: "a", q: "L'annonce 3 correspond à…", choix: ["Sami","Inès","Léa","Chloé","Marc","Hugo","Paul","Nadia"], r: 7, p: 0.5,
          e: "Nadia, 34 ans, veut découvrir l'astronomie jeudi de 18 h 30 à 20 h : ce sont les horaires de la soirée. Attention : Marc a les mêmes horaires, mais il a 15 ans, et la soirée est « réservée aux adultes »." },
        { doc: "d4", s: "a", q: "L'annonce 4 correspond à…", choix: ["Sami","Inès","Léa","Chloé","Marc","Hugo","Paul","Nadia"], r: 0, p: 1,
          e: "Sami veut donner de petits objets en métal vendredi de 17 h à 19 h : l'association « récupère les petits objets en métal » à ces horaires." },
        { doc: "d5", s: "a", q: "L'annonce 5 correspond à…", choix: ["Sami","Inès","Léa","Chloé","Marc","Hugo","Paul","Nadia"], r: 3, p: 1,
          e: "Chloé cherche un atelier de dessin pour débutants mercredi après-midi, pour cinq euros : la séance a lieu « mercredi, de quatorze heures à seize heures » et « coûte cinq euros »." },
        { doc: "d6", s: "a", q: "L'annonce 6 correspond à…", choix: ["Sami","Inès","Léa","Chloé","Marc","Hugo","Paul","Nadia"], r: 6, p: 0.5,
          e: "Paul doit faire copier une clé samedi matin pour sept euros : le serrurier est là « samedi, de dix heures à midi », et « une clé simple coûte sept euros »." }
      ]
    },

    // ---------------------------------------------------------------
    {
      titre: "Exercice 2",
      points: 6,
      consigne: "Vous recevez ce message d'un ami. Lisez-le et répondez aux questions.",
      documents: [
        { id: "d1", html: `<h3>Le mariage de ma cousine</h3>
<p>Bonjour Thomas,</p>
<p>Je voulais te raconter le mariage de ma cousine auquel j'ai assisté samedi dernier. <span data-s="a">La cérémonie a eu lieu dans une petite église à dix heures trente, puis nous sommes allés dans une grande salle décorée avec des fleurs.</span> <span data-s="c">J'ai retrouvé plusieurs cousins que je n'avais pas vus depuis longtemps.</span> Après la cérémonie, nous avons beaucoup parlé en famille et les mariés ont ouvert les cadeaux. <span data-s="d">J'avais préparé un petit album avec des souvenirs de leur enfance.</span> Ils ont beaucoup aimé mon cadeau. Le soir, nous avons écouté de la musique et discuté avec les invités. Je suis rentré assez tard, mais j'étais très content de cette journée. <span data-s="e">L'ambiance était vraiment agréable et tout le monde semblait heureux.</span> <span data-s="f">Est-ce que tu aimerais venir chez moi dimanche prochain pour regarder mon album ?</span></p>
<p>À bientôt,<br>Julien</p>` }
      ],
      questions: [
        { doc: "d1", s: "a", q: "À quelle heure la cérémonie a-t-elle commencé ?", choix: ["À dix heures.","À dix heures trente.","À onze heures trente."], r: 1, p: 1,
          e: "La cérémonie a eu lieu « dans une petite église à dix heures trente »." },
        { doc: "d1", s: "a", q: "Où les invités sont-ils allés après la cérémonie ?", choix: ["Dans une grande salle.","Dans la maison de Julien.","Dans une petite église."], r: 0, p: 1,
          e: "« Puis nous sommes allés dans une grande salle décorée avec des fleurs. » L'église, c'est le lieu de la cérémonie." },
        { doc: "d1", s: "c", q: "Qui Julien a-t-il retrouvé pendant cette journée ?", choix: ["Des amis de son travail.","Les voisins de sa cousine.","Plusieurs membres de sa famille."], r: 2, p: 1,
          e: "Il a retrouvé « plusieurs cousins » : ce sont des membres de sa famille." },
        { doc: "d1", s: "d", q: "Qu'a offert Julien aux mariés ?", choix: ["Un petit album avec des souvenirs.","Des fleurs pour la salle.","Un grand livre sur leur famille."], r: 0, p: 1,
          e: "« J'avais préparé un petit album avec des souvenirs de leur enfance. »" },
        { doc: "d1", s: "e", q: "Comment Julien a-t-il trouvé la journée ?", choix: ["Elle était trop longue et fatigante.","Elle était agréable et tout le monde semblait heureux.","Elle était difficile parce qu'il connaissait peu de personnes."], r: 1, p: 1,
          e: "« L'ambiance était vraiment agréable et tout le monde semblait heureux. » Julien était « très content » de cette journée." },
        { doc: "d1", s: "f", q: "Que propose Julien à Thomas ?", choix: ["De participer au mariage dimanche prochain.","De rencontrer les cousins dimanche prochain.","De venir chez lui pour regarder son album."], r: 2, p: 1,
          e: "« Est-ce que tu aimerais venir chez moi dimanche prochain pour regarder mon album ? »" }
      ]
    },

    // ---------------------------------------------------------------
    {
      titre: "Exercice 3",
      points: 6,
      consigne: "Lisez ces deux documents et répondez aux questions.",
      documents: [
        { id: "d1", html: `<h3>Document 1 – Au cabinet dentaire</h3>
<p><span data-s="a">Le cabinet dentaire rappelle que les patients doivent arriver dix minutes avant leur rendez-vous.</span> <span data-s="b">En cas d'empêchement, il faut téléphoner au moins vingt-quatre heures à l'avance pour modifier l'horaire.</span> <span data-s="c">Les rendez-vous du mercredi après-midi sont réservés aux enfants.</span> Le cabinet accepte les paiements par carte ou en espèces. Pour une première visite, il faut apporter une pièce d'identité et les informations de son assurance.</p>` },
        { id: "d2", html: `<h3>Document 2 – Une collecte de sang</h3>
<p>La maison des associations organise une collecte de sang mardi prochain. Les donneurs peuvent venir entre quatorze heures et dix-huit heures, sans rendez-vous. <span data-s="a">Il faut avoir au moins dix-huit ans et présenter une pièce d'identité.</span> <span data-s="c">Après le don, une boisson et une petite collation sont proposées.</span> <span data-s="b">La collecte se déroule dans la grande salle du premier étage.</span> Une équipe médicale accueille les participants.</p>` }
      ],
      questions: [
        { doc: "d1", s: "a", q: "Combien de temps avant le rendez-vous faut-il arriver ?", choix: ["Cinq minutes.","Dix minutes.","Vingt minutes."], r: 1, p: 0.5,
          e: "Les patients « doivent arriver dix minutes avant leur rendez-vous »." },
        { doc: "d1", s: "b", q: "Que faut-il faire si on ne peut pas venir au rendez-vous ?", choix: ["Téléphoner au moins un jour avant.","Envoyer un message le jour même.","Venir directement à un autre moment."], r: 0, p: 2,
          e: "Il faut « téléphoner au moins vingt-quatre heures à l'avance » : vingt-quatre heures, c'est un jour." },
        { doc: "d1", s: "c", q: "Qui peut avoir un rendez-vous le mercredi après-midi ?", choix: ["Les adultes uniquement.","Tous les patients sans rendez-vous.","Les enfants."], r: 2, p: 0.5,
          e: "« Les rendez-vous du mercredi après-midi sont réservés aux enfants. »" },
        { doc: "d2", s: "a", q: "Quel âge faut-il avoir au minimum pour donner son sang ?", choix: ["Seize ans.","Dix-huit ans.","Vingt et un ans."], r: 1, p: 1,
          e: "« Il faut avoir au moins dix-huit ans. »" },
        { doc: "d2", s: "b", q: "Où se déroule la collecte ?", choix: ["Dans la petite salle du rez-de-chaussée.","Dans une salle située au deuxième étage.","Dans la grande salle du premier étage."], r: 2, p: 1,
          e: "« La collecte se déroule dans la grande salle du premier étage. »" },
        { doc: "d2", s: "c", q: "Que reçoit-on après le don ?", choix: ["Une boisson et quelque chose à manger.","Un rendez-vous médical.","Une pièce d'identité."], r: 0, p: 1,
          e: "On propose « une boisson et une petite collation » : une collation, c'est quelque chose à manger." }
      ]
    },

    // ---------------------------------------------------------------
    {
      titre: "Exercice 4",
      points: 7,
      consigne: "Vous lisez cet article dans un journal. Répondez aux questions.",
      documents: [
        { id: "d1", html: `<h3>Une chorale accueille de nouveaux membres</h3>
<p>La chorale municipale ouvre ses portes aux personnes qui aiment chanter. <span data-s="a">Depuis septembre, elle accueille des débutants à partir de seize ans.</span> Les répétitions ont lieu chaque mardi soir, de dix-neuf heures à vingt heures trente, dans une salle située près de la place centrale. <span data-s="c">Il n'est pas nécessaire de savoir lire la musique pour participer.</span> Le chef de chœur commence chaque séance par quelques exercices simples, puis le groupe travaille plusieurs chansons. <span data-s="d">La participation coûte quinze euros par mois.</span> <span data-s="e">Une séance découverte gratuite est proposée le 7 décembre.</span> Les personnes intéressées peuvent venir directement à cette séance ou téléphoner avant le vendredi précédent. Le responsable précise que le groupe compte actuellement vingt-deux membres et souhaite accueillir encore quelques nouvelles personnes cette année.</p>` }
      ],
      questions: [
        { doc: "d1", s: "a", q: "Depuis quand la chorale accueille-t-elle des débutants ?", choix: ["Depuis septembre.","Depuis octobre.","Depuis décembre."], r: 0, p: 1,
          e: "« Depuis septembre, elle accueille des débutants. » Décembre, c'est la séance découverte." },
        { doc: "d1", s: "a", q: "À partir de quel âge peut-on participer à la chorale ?", choix: ["À partir de quatorze ans.","À partir de seize ans.","À partir de dix-huit ans."], r: 1, p: 1.5,
          e: "Elle accueille des débutants « à partir de seize ans »." },
        { doc: "d1", s: "c", q: "Vrai ou faux ? Il faut savoir lire la musique pour participer à la chorale.", choix: ["Vrai","Faux"], r: 1, p: 1.5,
          e: "« Il n'est pas nécessaire de savoir lire la musique pour participer. »" },
        { doc: "d1", s: "d", q: "Combien coûte la participation chaque mois ?", choix: ["Dix euros.","Douze euros.","Quinze euros."], r: 2, p: 1.5,
          e: "« La participation coûte quinze euros par mois. »" },
        { doc: "d1", s: "e", q: "Quand aura lieu la séance découverte gratuite ?", choix: ["Le vendredi précédent.","Le 7 décembre.","Tous les mardis."], r: 1, p: 1.5,
          e: "« Une séance découverte gratuite est proposée le 7 décembre. » Le vendredi précédent, c'est la date limite pour téléphoner." }
      ]
    }
  ]
};
