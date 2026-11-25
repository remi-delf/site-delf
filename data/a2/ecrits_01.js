// DELF A2 – Compréhension des écrits – Sujet 1
// Textes originaux. Ne jamais copier les vrais sujets.
//
// Comment c'est rangé :
// - chaque exercice a des « documents » et des « questions » ;
// - dans un document, une phrase entourée de <span data-s="a">…</span>
//   peut être surlignée ; la question indique laquelle avec s:"a" ;
// - doc:"d1" dit dans quel document se trouve la réponse ;
// - choix = les réponses proposées, r = numéro de la bonne réponse
//   (0 pour la première, 1 pour la deuxième…), p = points, e = explication.

window.SUJET = {
  numero: 1,
  exercices: [

    // ---------------------------------------------------------------
    {
      titre: "Exercice 1",
      points: 6,
      consigne: "Vous lisez ces annonces dans le journal de votre quartier. Ces personnes cherchent une activité ou un service. Pour chaque annonce, choisissez la personne qui correspond. Attention : deux personnes ne correspondent à aucune annonce.",
      intro: `<h3>Les personnes</h3>
<ul class="personnes">
<li><b>A. Sofia</b> veut apprendre à cuisiner des plats d'autres pays.</li>
<li><b>B. Karim</b> cherche une activité sportive pour le dimanche matin.</li>
<li><b>C. Léa</b> voudrait un travail pour l'été, avec des enfants.</li>
<li><b>D. M. Petit</b> veut vendre ses vieux meubles.</li>
<li><b>E. Anna</b> cherche un cours de français gratuit, le soir.</li>
<li><b>F. Hugo</b> aimerait jouer de la guitare dans un groupe.</li>
<li><b>G. Mme Roux</b> cherche quelqu'un pour garder son chien pendant ses vacances.</li>
<li><b>H. Tom</b> veut visiter un musée avec sa classe.</li>
</ul>`,
      choixCompacts: true,
      documents: [
        { id: "d1", html: `<h3>Annonce 1</h3>
<p><b>Association Bonjour !</b> Cours de français pour adultes, tous niveaux. <span data-s="a">Le mardi et le jeudi, de 19 h à 20 h 30. Inscription gratuite à la mairie.</span></p>` },
        { id: "d2", html: `<h3>Annonce 2</h3>
<p><b>Club Courir ensemble.</b> <span data-s="a">Rendez-vous chaque dimanche à 9 h devant le parc des Sports pour une course de 5 km.</span> Tous les âges sont bienvenus. Pensez à apporter de l'eau !</p>` },
        { id: "d3", html: `<h3>Annonce 3</h3>
<p><b>Atelier « Saveurs du monde ».</b> <span data-s="a">Chaque samedi, un chef vous apprend une recette d'un autre pays : Maroc, Japon, Mexique…</span> 15 € la séance, ingrédients compris.</p>` },
        { id: "d4", html: `<h3>Annonce 4</h3>
<p>Étudiante sérieuse, 22 ans, j'adore les animaux. <span data-s="a">Je peux m'occuper de votre chat ou de votre chien pendant vos vacances</span>, chez vous ou chez moi. Appelez-moi le soir.</p>` },
        { id: "d5", html: `<h3>Annonce 5</h3>
<p><b>Centre de loisirs Les Petits Loups.</b> <span data-s="a">Nous cherchons des animateurs pour juillet et août.</span> <span data-s="b">Vous aimez jouer avec les enfants de 6 à 10 ans ?</span> Envoyez votre CV avant le 30 avril.</p>` },
        { id: "d6", html: `<h3>Annonce 6</h3>
<p>Nous sommes trois amis et nous jouons du rock le vendredi soir. <span data-s="a">Il nous manque un guitariste !</span> Pas besoin d'être professionnel. Venez nous voir au café La Note, rue des Lilas.</p>` }
      ],
      questions: [
        { doc: "d1", s: "a", q: "L'annonce 1 correspond à…", choix: ["Sofia","Karim","Léa","M. Petit","Anna","Hugo","Mme Roux","Tom"], r: 4, p: 1.5,
          e: "Anna cherche un cours de français gratuit le soir : les cours ont lieu « de 19 h à 20 h 30 » et l'inscription est « gratuite »." },
        { doc: "d2", s: "a", q: "L'annonce 2 correspond à…", choix: ["Sofia","Karim","Léa","M. Petit","Anna","Hugo","Mme Roux","Tom"], r: 1, p: 1.5,
          e: "Karim cherche un sport pour le dimanche matin : le club court « chaque dimanche à 9 h »." },
        { doc: "d3", s: "a", q: "L'annonce 3 correspond à…", choix: ["Sofia","Karim","Léa","M. Petit","Anna","Hugo","Mme Roux","Tom"], r: 0, p: 0.5,
          e: "Sofia veut cuisiner des plats d'autres pays : le chef apprend « une recette d'un autre pays »." },
        { doc: "d4", s: "a", q: "L'annonce 4 correspond à…", choix: ["Sofia","Karim","Léa","M. Petit","Anna","Hugo","Mme Roux","Tom"], r: 6, p: 1,
          e: "Mme Roux cherche quelqu'un pour son chien : l'étudiante peut « [s']occuper de votre chien pendant vos vacances »." },
        { doc: "d5", s: "a", q: "L'annonce 5 correspond à…", choix: ["Sofia","Karim","Léa","M. Petit","Anna","Hugo","Mme Roux","Tom"], r: 2, p: 1,
          e: "Léa veut travailler l'été avec des enfants : le centre cherche des animateurs « pour juillet et août »." },
        { doc: "d6", s: "a", q: "L'annonce 6 correspond à…", choix: ["Sofia","Karim","Léa","M. Petit","Anna","Hugo","Mme Roux","Tom"], r: 5, p: 0.5,
          e: "Hugo veut jouer de la guitare dans un groupe : « Il nous manque un guitariste ! »" }
      ]
    },

    // ---------------------------------------------------------------
    {
      titre: "Exercice 2",
      points: 6,
      consigne: "Vous habitez dans cet immeuble. Vous recevez ce message. Lisez-le et répondez aux questions.",
      documents: [
        { id: "d1", html: `<h3>Objet : Fête des voisins – samedi 14 juin</h3>
<p>Chers voisins,</p>
<p>Cette année encore, <span data-s="a">l'association « Vivre ensemble rue Verte » organise la fête des voisins.</span> <span data-s="b">Elle aura lieu le samedi 14 juin, de 18 h à 23 h, dans le jardin derrière l'immeuble.</span> S'il pleut, nous irons dans la salle commune, au rez-de-chaussée.</p>
<p><span data-s="c">Chaque famille apporte un plat salé ou sucré à partager.</span> L'association offre les boissons et le pain. <span data-s="d">Pour les enfants, un magicien fera un spectacle à 19 h 30.</span> Ensuite, il y aura de la musique et on pourra danser.</p>
<p><span data-s="e">Si vous voulez participer, inscrivez-vous avant le 7 juin sur la feuille dans le hall d'entrée</span>, ou envoyez un courriel à Martine, au 3e étage. <span data-s="f">Nous cherchons aussi des volontaires pour installer les tables à 17 h.</span></p>
<p>C'est l'occasion de faire connaissance avec les nouveaux habitants !</p>
<p>À bientôt,<br>Martine Dubois, présidente de l'association</p>` }
      ],
      questions: [
        { doc: "d1", s: "a", q: "Ce message vous invite à…", choix: ["un anniversaire.","une fête entre voisins.","une réunion de travail."], r: 1, p: 1,
          e: "L'association « organise la fête des voisins »." },
        { doc: "d1", s: "b", q: "S'il fait beau, où aura lieu la fête ?", choix: ["Dans le jardin.","Dans la salle commune.","Dans un restaurant."], r: 0, p: 1,
          e: "La fête a lieu « dans le jardin derrière l'immeuble ». La salle commune, c'est seulement s'il pleut." },
        { doc: "d1", s: "c", q: "Qu'est-ce que chaque famille doit apporter ?", choix: ["Des boissons.","Du pain.","Un plat."], r: 2, p: 1,
          e: "« Chaque famille apporte un plat ». Les boissons et le pain sont offerts par l'association." },
        { doc: "d1", s: "d", q: "Qu'est-ce qui est prévu pour les enfants ?", choix: ["Un spectacle de magie.","Un atelier de dessin.","Un concours de danse."], r: 0, p: 1,
          e: "Un magicien fera un spectacle à 19 h 30." },
        { doc: "d1", s: "e", q: "Pour participer, il faut…", choix: ["téléphoner à Martine.","s'inscrire avant le 7 juin.","payer 5 euros."], r: 1, p: 1,
          e: "Il faut s'inscrire « avant le 7 juin » sur la feuille ou par courriel." },
        { doc: "d1", s: "f", q: "L'association cherche des personnes pour…", choix: ["préparer les plats.","installer les tables.","jouer de la musique."], r: 1, p: 1,
          e: "Elle cherche « des volontaires pour installer les tables »." }
      ]
    },

    // ---------------------------------------------------------------
    {
      titre: "Exercice 3",
      points: 6,
      consigne: "Vous lisez ces trois documents. Répondez aux questions.",
      documents: [
        { id: "d1", html: `<h3>Document 1 – Un message sur le frigo</h3>
<p>Salut Nora,</p>
<p><span data-s="a">Je pars tôt ce matin pour mon entretien d'embauche</span>, je rentre vers 14 h. Peux-tu acheter du pain et des œufs ? L'argent est dans la boîte bleue, sur l'étagère. Attention : <span data-s="b">le plombier vient à 11 h pour réparer la douche. Ouvre-lui la porte, s'il te plaît</span>, et ne prends pas de douche avant son passage ! Ce soir, mes parents viennent dîner.</p>
<p>Merci beaucoup !<br>Camille</p>` },
        { id: "d2", html: `<h3>Document 2 – Piscine municipale : à lire avant d'entrer</h3>
<p><span data-s="a">Le bonnet de bain est obligatoire pour tous.</span> Vous pouvez l'acheter à l'accueil (2 €). Prenez une douche avant d'aller dans l'eau. Les enfants de moins de 10 ans doivent venir avec un adulte. Il est interdit de manger au bord du bassin : <span data-s="b">une salle est prévue pour les pique-niques au premier étage.</span> La piscine ferme ses portes 30 minutes avant la fin de la séance.</p>` },
        { id: "d3", html: `<h3>Document 3 – Laverie du Marché : mode d'emploi</h3>
<ol>
<li>Mettez votre linge dans une machine libre et fermez bien la porte.</li>
<li><span data-s="a">Choisissez la température : 30 °C pour les couleurs, 60 °C pour le blanc.</span></li>
<li><span data-s="b">Payez à la caisse automatique avec des pièces ou une carte bancaire.</span> Indiquez le numéro de votre machine.</li>
<li>Le lavage dure 40 minutes. Ensuite, vous pouvez utiliser le sèche-linge (1 € pour 10 minutes).</li>
</ol>
<p>En cas de problème, appelez le numéro affiché sur la porte.</p>` }
      ],
      questions: [
        { doc: "d1", s: "a", q: "Pourquoi Camille est-elle partie tôt ?", choix: ["Pour un entretien d'embauche.","Pour faire les courses.","Pour chercher ses parents."], r: 0, p: 0.5,
          e: "Camille écrit : « Je pars tôt ce matin pour mon entretien d'embauche »." },
        { doc: "d1", s: "b", q: "Qu'est-ce que Nora doit faire à 11 h ?", choix: ["Acheter du pain.","Ouvrir la porte au plombier.","Prendre une douche."], r: 1, p: 2,
          e: "« Le plombier vient à 11 h » : Nora doit lui ouvrir la porte. Elle ne doit pas prendre de douche avant son passage." },
        { doc: "d2", s: "a", q: "À la piscine, le bonnet de bain est…", choix: ["obligatoire.","interdit.","offert à l'accueil."], r: 0, p: 0.5,
          e: "« Le bonnet de bain est obligatoire pour tous. » Il n'est pas offert : il coûte 2 €." },
        { doc: "d2", s: "b", q: "Où est-ce qu'on peut manger ?", choix: ["Au bord du bassin.","À l'accueil.","Dans une salle au premier étage."], r: 2, p: 1,
          e: "Il est interdit de manger au bord du bassin, mais « une salle est prévue pour les pique-niques au premier étage »." },
        { doc: "d3", s: "a", q: "Pour laver du linge blanc, il faut choisir…", choix: ["30 °C.","40 °C.","60 °C."], r: 2, p: 1,
          e: "« 60 °C pour le blanc ». 40, c'est la durée du lavage en minutes." },
        { doc: "d3", s: "b", q: "Comment est-ce qu'on peut payer ?", choix: ["Seulement avec des pièces.","Avec des pièces ou une carte bancaire.","Seulement sur Internet."], r: 1, p: 1,
          e: "On paie « avec des pièces ou une carte bancaire »." }
      ]
    },

    // ---------------------------------------------------------------
    {
      titre: "Exercice 4",
      points: 7,
      consigne: "Vous lisez cet article dans un journal. Répondez aux questions.",
      documents: [
        { id: "d1", html: `<h3>Lyon : des vélos gratuits pour les étudiants</h3>
<p><span data-s="a">Depuis le 1er septembre, la ville de Lyon prête des vélos aux étudiants de moins de 26 ans.</span> <span data-s="b">Le prêt est gratuit pendant un an : il faut seulement montrer sa carte d'étudiant et payer une caution de 50 euros.</span> Cet argent est rendu quand on rapporte le vélo.</p>
<p><span data-s="c">La mairie veut réduire la pollution et aider les jeunes qui ont peu d'argent.</span> <span data-s="d">« Le bus coûte cher et il est souvent plein le matin »</span>, explique Inès, 20 ans, étudiante en médecine. « Avec mon vélo, je vais à l'université en quinze minutes. »</p>
<p>Pour le moment, 2 000 vélos sont disponibles, mais la ville espère en proposer le double l'année prochaine. <span data-s="e">Les étudiants peuvent aussi suivre un atelier gratuit, le mercredi après-midi, pour apprendre à réparer leur vélo.</span> Le succès est déjà là : en trois semaines, plus de 1 500 étudiants se sont inscrits.</p>` }
      ],
      questions: [
        { doc: "d1", s: "a", q: "Cet article parle…", choix: ["d'une nouvelle piste cyclable.","d'un service de prêt de vélos.","d'une course de vélo."], r: 1, p: 1,
          e: "La ville « prête des vélos aux étudiants »." },
        { doc: "d1", s: "b", q: "Pour avoir un vélo, il faut…", choix: ["payer 50 euros par mois.","donner une caution.","acheter un casque."], r: 1, p: 1.5,
          e: "Il faut « payer une caution de 50 euros », rendue à la fin. Le prêt est gratuit." },
        { doc: "d1", s: "c", q: "Vrai ou faux ? La mairie a créé ce service pour réduire la pollution.", choix: ["Vrai","Faux"], r: 0, p: 1.5,
          e: "« La mairie veut réduire la pollution » et aider les jeunes qui ont peu d'argent." },
        { doc: "d1", s: "d", q: "Selon Inès, le bus…", choix: ["est pratique et rapide.","coûte cher et il est souvent plein le matin.","ne va pas jusqu'à l'université."], r: 1, p: 1.5,
          e: "Inès dit que le bus « coûte cher » et qu'il est « souvent plein le matin »." },
        { doc: "d1", s: "e", q: "Le mercredi après-midi, les étudiants peuvent…", choix: ["rendre leur vélo.","apprendre à réparer leur vélo.","louer un deuxième vélo."], r: 1, p: 1.5,
          e: "Il y a « un atelier gratuit » pour « apprendre à réparer leur vélo »." }
      ]
    }
  ]
};
