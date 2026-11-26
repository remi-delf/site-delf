// DELF A2 – Compréhension des écrits – Sujet 2
// Textes originaux (document de Rémi « DELF A2 – Compréhension des écrits – Sujet 2 »),
// avec trois phrases ajoutées pour respecter les longueurs officielles
// et la question 2 de l'exercice 3 transformée en QCM (validé par Rémi).
// Ne jamais copier les vrais sujets.
//
// Même rangement que ecrits_01.js :
// - <span data-s="a">…</span> = phrase surlignée à la correction (question : s:"a") ;
// - doc:"d1" = document où se trouve la réponse ;
// - choix = réponses proposées, r = numéro de la bonne réponse (0 = la première),
//   p = points, e = explication.

window.SUJET = {
  numero: 2,
  exercices: [

    // ---------------------------------------------------------------
    {
      titre: "Exercice 1",
      points: 6,
      consigne: "Vous cherchez une activité pour vos amis. Lisez les annonces et dites à quelle personne correspond chaque annonce. Attention : deux personnes ne correspondent à aucune annonce.",
      intro: `<h3>Les personnes</h3>
<ul class="personnes">
<li><b>A. Sophie</b> veut parler anglais avec d'autres personnes, le week-end.</li>
<li><b>B. Karim</b> cherche un sport d'équipe pour son fils de 8 ans, le mercredi après-midi.</li>
<li><b>C. Léa</b> travaille toute la journée. Elle veut apprendre à cuisiner des plats italiens, le soir.</li>
<li><b>D. Marc</b> aime la nature. Il veut marcher en groupe le dimanche matin.</li>
<li><b>E. Julie</b> veut apprendre à jouer de la guitare, mais elle n'a pas d'instrument.</li>
<li><b>F. Paul</b> est à la retraite. Il cherche une activité calme, en semaine, le matin.</li>
<li><b>G. Nadia</b> veut apprendre à nager, le samedi.</li>
<li><b>H. Thomas</b> cherche un cours de photo, le lundi soir.</li>
</ul>`,
      choixCompacts: true,
      documents: [
        { id: "d1", html: `<h3>Annonce 1</h3>
<p><b>École de musique Do Ré Mi</b> – <span data-s="a">Cours de guitare pour adultes débutants. Nous vous prêtons une guitare pour la première année.</span></p>` },
        { id: "d2", html: `<h3>Annonce 2</h3>
<p><b>Club de foot des Petits Lions</b> – <span data-s="a">Pour les enfants de 6 à 10 ans. Entraînement le mercredi de 14 h à 16 h.</span> Inscription : 40 € par an.</p>` },
        { id: "d3", html: `<h3>Annonce 3</h3>
<p><b>Café des langues</b> – <span data-s="a">Chaque samedi à 16 h, venez discuter en anglais autour d'un café.</span> Tous niveaux. Gratuit.</p>` },
        { id: "d4", html: `<h3>Annonce 4</h3>
<p><b>Atelier peinture</b> – <span data-s="a">Pour les adultes, le lundi et le jeudi, de 10 h à 12 h. Ambiance calme et conviviale.</span></p>` },
        { id: "d5", html: `<h3>Annonce 5</h3>
<p><b>Atelier cuisine « Saveurs d'Italie »</b> – <span data-s="a">Pâtes fraîches, pizza, tiramisu… Cours le mardi et le jeudi, de 19 h à 21 h.</span></p>` },
        { id: "d6", html: `<h3>Annonce 6</h3>
<p><b>Les Randonneurs du Val</b> – <span data-s="a">Promenade de 10 km en forêt, tous les dimanches. Départ à 9 h devant la mairie.</span></p>` }
      ],
      questions: [
        { doc: "d1", s: "a", q: "L'annonce 1 correspond à…", choix: ["Sophie","Karim","Léa","Marc","Julie","Paul","Nadia","Thomas"], r: 4, p: 1.5,
          e: "Julie veut apprendre la guitare mais n'a pas d'instrument : l'école propose des cours pour « adultes débutants » et « prête une guitare »." },
        { doc: "d2", s: "a", q: "L'annonce 2 correspond à…", choix: ["Sophie","Karim","Léa","Marc","Julie","Paul","Nadia","Thomas"], r: 1, p: 1.5,
          e: "Karim cherche un sport d'équipe pour son fils de 8 ans, le mercredi après-midi : le club de foot accueille les enfants « de 6 à 10 ans », « le mercredi de 14 h à 16 h »." },
        { doc: "d3", s: "a", q: "L'annonce 3 correspond à…", choix: ["Sophie","Karim","Léa","Marc","Julie","Paul","Nadia","Thomas"], r: 0, p: 0.5,
          e: "Sophie veut parler anglais le week-end : le café des langues propose de « discuter en anglais » « chaque samedi »." },
        { doc: "d4", s: "a", q: "L'annonce 4 correspond à…", choix: ["Sophie","Karim","Léa","Marc","Julie","Paul","Nadia","Thomas"], r: 5, p: 1,
          e: "Paul cherche une activité calme, en semaine, le matin : l'atelier a lieu « le lundi et le jeudi, de 10 h à 12 h », dans une « ambiance calme »." },
        { doc: "d5", s: "a", q: "L'annonce 5 correspond à…", choix: ["Sophie","Karim","Léa","Marc","Julie","Paul","Nadia","Thomas"], r: 2, p: 1,
          e: "Léa veut cuisiner italien le soir : l'atelier « Saveurs d'Italie » a lieu « de 19 h à 21 h »." },
        { doc: "d6", s: "a", q: "L'annonce 6 correspond à…", choix: ["Sophie","Karim","Léa","Marc","Julie","Paul","Nadia","Thomas"], r: 3, p: 0.5,
          e: "Marc veut marcher en groupe dans la nature le dimanche matin : la promenade a lieu « en forêt, tous les dimanches », « départ à 9 h »." }
      ]
    },

    // ---------------------------------------------------------------
    {
      titre: "Exercice 2",
      points: 6,
      consigne: "Vous recevez ce message d'une amie. Lisez le message et répondez aux questions.",
      documents: [
        { id: "d1", html: `<p>Salut Camille,</p>
<p><span data-s="a">Je t'écris de Nantes, où je suis depuis lundi pour mon nouveau travail.</span> Je suis très contente : <span data-s="b">mes collègues sont sympas et le bureau est à dix minutes à pied de mon appartement.</span> <span data-s="c">Le seul problème, c'est que je ne connais encore personne ici.</span> Le soir, je reste souvent seule chez moi. La ville est très belle, mais c'est un peu triste de la visiter sans amis.</p>
<p><span data-s="d">Samedi prochain, j'organise une petite fête pour mon anniversaire.</span> J'aimerais beaucoup que tu viennes ! Tu peux dormir chez moi, j'ai une chambre pour les amis. Si tu prends le train de 10 h, j'irai te chercher à la gare.</p>
<p><span data-s="e">Est-ce que tu peux apporter ta guitare ?</span> Mes nouveaux collègues adorent la musique. Moi, je prépare le repas : une grande salade et un gâteau au chocolat.</p>
<p><span data-s="f">Réponds-moi avant jeudi, s'il te plaît.</span></p>
<p>Bises,<br>Manon</p>` }
      ],
      questions: [
        { doc: "d1", s: "a", q: "Manon est à Nantes pour…", choix: ["ses vacances.","son travail.","ses études."], r: 1, p: 1,
          e: "Manon est à Nantes « pour [son] nouveau travail »." },
        { doc: "d1", s: "b", q: "Comment Manon va-t-elle au bureau ?", choix: ["À pied.","En bus.","En voiture."], r: 0, p: 1,
          e: "Le bureau est « à dix minutes à pied » de son appartement." },
        { doc: "d1", s: "c", q: "Quel est le problème de Manon ?", choix: ["Elle n'aime pas ses collègues.","Elle ne connaît personne.","Son appartement est petit."], r: 1, p: 1,
          e: "« Le seul problème, c'est que je ne connais encore personne ici. » Ses collègues, eux, sont « sympas »." },
        { doc: "d1", s: "d", q: "Pourquoi Manon organise-t-elle une fête ?", choix: ["Pour son anniversaire.","Pour son nouvel appartement.","Pour son nouveau travail."], r: 0, p: 1,
          e: "Elle organise « une petite fête pour [son] anniversaire »." },
        { doc: "d1", s: "e", q: "Qu'est-ce que Camille doit apporter ?", choix: ["Un gâteau.","Une salade.","Sa guitare."], r: 2, p: 1,
          e: "Manon demande : « Est-ce que tu peux apporter ta guitare ? » La salade et le gâteau, c'est Manon qui les prépare." },
        { doc: "d1", s: "f", q: "Camille doit répondre avant…", choix: ["mercredi.","jeudi.","samedi."], r: 1, p: 1,
          e: "« Réponds-moi avant jeudi, s'il te plaît. »" }
      ]
    },

    // ---------------------------------------------------------------
    {
      titre: "Exercice 3",
      points: 6,
      consigne: "Lisez ces deux documents et répondez aux questions.",
      documents: [
        { id: "d1", html: `<h3>Document 1 – Avis aux habitants de la résidence Les Tilleuls</h3>
<p><span data-s="a">Des travaux auront lieu dans l'ascenseur du lundi 12 au vendredi 16 mai. Pendant cette semaine, l'ascenseur ne fonctionnera pas.</span> <span data-s="b">Les personnes âgées ou malades peuvent appeler le gardien, M. Lopez, au 01 45 22 18 90 : il les aidera à porter leurs courses.</span> <span data-s="c">Merci de ne pas laisser vos vélos dans l'entrée pendant les travaux.</span> Nous nous excusons pour le bruit et vous remercions de votre patience.</p>
<p>La direction</p>` },
        { id: "d2", html: `<h3>Document 2 – Bibliothèque municipale : nouveaux horaires</h3>
<p><span data-s="a">À partir du 1er juin, la bibliothèque sera ouverte le dimanche matin, de 10 h à 13 h.</span> Elle sera en revanche fermée le lundi. Pour emprunter des livres, il faut une carte de lecteur. <span data-s="b">Elle est gratuite pour les moins de 18 ans et coûte 15 € par an pour les adultes.</span> <span data-s="c">Pour l'obtenir, apportez une photo et un justificatif de domicile.</span></p>` }
      ],
      questions: [
        { doc: "d1", s: "a", q: "Pendant combien de temps l'ascenseur ne fonctionnera-t-il pas ?", choix: ["Un jour.","Une semaine.","Un mois."], r: 1, p: 0.5,
          e: "Les travaux ont lieu « du lundi 12 au vendredi 16 mai » : « pendant cette semaine », l'ascenseur ne fonctionnera pas." },
        { doc: "d1", s: "b", q: "Le gardien peut aider…", choix: ["les personnes âgées ou malades à porter leurs courses.","tous les habitants à réparer l'ascenseur.","les enfants à monter leurs vélos."], r: 0, p: 2,
          e: "« Les personnes âgées ou malades peuvent appeler le gardien […] : il les aidera à porter leurs courses. »" },
        { doc: "d1", s: "c", q: "Pendant les travaux, il est interdit de…", choix: ["garer sa voiture devant la résidence.","laisser son vélo dans l'entrée.","prendre l'escalier."], r: 1, p: 0.5,
          e: "« Merci de ne pas laisser vos vélos dans l'entrée pendant les travaux. »" },
        { doc: "d2", s: "a", q: "À partir du 1er juin, la bibliothèque ouvre aussi…", choix: ["le samedi soir.","le dimanche matin.","le lundi matin."], r: 1, p: 1,
          e: "Elle « sera ouverte le dimanche matin, de 10 h à 13 h ». Le lundi, elle sera fermée." },
        { doc: "d2", s: "b", q: "La carte de lecteur est gratuite pour…", choix: ["tout le monde.","les moins de 18 ans.","les adultes."], r: 1, p: 1,
          e: "Elle est « gratuite pour les moins de 18 ans ». Les adultes paient 15 € par an." },
        { doc: "d2", s: "c", q: "Que faut-il apporter pour obtenir la carte ?", choix: ["Une photo et un justificatif de domicile.","Une carte d'identité.","15 €, pour tout le monde."], r: 0, p: 1,
          e: "« Pour l'obtenir, apportez une photo et un justificatif de domicile. »" }
      ]
    },

    // ---------------------------------------------------------------
    {
      titre: "Exercice 4",
      points: 7,
      consigne: "Lisez cet article et répondez aux questions.",
      documents: [
        { id: "d1", html: `<h3>Les jardins partagés, un succès en ville</h3>
<p>À Lille, de plus en plus d'habitants cultivent des légumes au milieu des immeubles. <span data-s="a">Depuis trois ans, la ville a créé douze jardins partagés.</span> Chaque habitant peut louer une petite parcelle pour 20 euros par an. <span data-s="b">Les outils et l'eau sont fournis.</span></p>
<p><span data-s="c">« Je n'avais jamais planté de tomates avant »</span>, raconte Julien, 34 ans. « Maintenant, je mange mes propres légumes tout l'été. Et surtout, j'ai rencontré mes voisins ! »</p>
<p>Les écoles du quartier en profitent aussi : les enfants viennent y apprendre le nom des plantes.</p>
<p><span data-s="d">Ces jardins sont aussi bons pour l'environnement : ils apportent de la fraîcheur en été, et les jardiniers n'utilisent pas de produits chimiques.</span></p>
<p><span data-s="e">Mais il y a un problème : les places sont rares. Aujourd'hui, plus de 300 personnes attendent une parcelle.</span> La mairie prévoit d'ouvrir cinq nouveaux jardins l'année prochaine.</p>` }
      ],
      questions: [
        { doc: "d1", s: "a", q: "Combien de jardins partagés la ville a-t-elle créés ?", choix: ["Trois.","Cinq.","Douze."], r: 2, p: 1,
          e: "« La ville a créé douze jardins partagés. » Trois, c'est le nombre d'années ; cinq, les nouveaux jardins de l'année prochaine." },
        { doc: "d1", s: "b", q: "Qu'est-ce qui est fourni aux jardiniers ?", choix: ["Les outils et l'eau.","Les graines.","Les légumes."], r: 0, p: 1.5,
          e: "« Les outils et l'eau sont fournis. »" },
        { doc: "d1", s: "c", q: "Vrai ou faux ? Julien avait déjà planté des tomates avant.", choix: ["Vrai","Faux"], r: 1, p: 1.5,
          e: "Julien dit : « Je n'avais jamais planté de tomates avant. »" },
        { doc: "d1", s: "d", q: "Pourquoi ces jardins sont-ils bons pour l'environnement ?", choix: ["Ils apportent de la fraîcheur et on n'y utilise pas de produits chimiques.","Ils réduisent le nombre de voitures.","Ils recyclent les déchets des habitants."], r: 0, p: 1.5,
          e: "Ils « apportent de la fraîcheur en été » et les jardiniers « n'utilisent pas de produits chimiques »." },
        { doc: "d1", s: "e", q: "Quel est le problème des jardins partagés ?", choix: ["Ils sont trop chers.","Il n'y a pas assez de places.","Ils sont loin du centre-ville."], r: 1, p: 1.5,
          e: "« Les places sont rares » : plus de 300 personnes attendent une parcelle." }
      ]
    }
  ]
};
