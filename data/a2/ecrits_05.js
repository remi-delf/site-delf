// DELF A2 – Compréhension des écrits – Sujet 5
// Textes originaux (proposés avec l'aide de ChatGPT, corrigés et validés par Rémi).
// Corrections de Rémi : exercice 1, personne H remplacée par Caroline (annonce 2) ;
// exercice 3, document 1 : « inscrivez-vous à l'accueil au plus tard jeudi ».
// Ne jamais copier les vrais sujets.
//
// Même rangement que ecrits_01.js :
// - <span data-s="a">…</span> = phrase surlignée à la correction (question : s:"a") ;
// - doc:"d1" = document où se trouve la réponse ;
// - choix = réponses proposées, r = numéro de la bonne réponse (0 = la première),
//   p = points, e = explication.

window.SUJET = {
  numero: 5,
  exercices: [

    // ---------------------------------------------------------------
    {
      titre: "Exercice 1",
      points: 6,
      consigne: "Vous lisez ces annonces dans le journal de votre quartier. Ces personnes cherchent une activité, un service ou un travail. Pour chaque annonce, choisissez la personne qui correspond. Attention : deux personnes ne correspondent à aucune annonce.",
      intro: `<h3>Les personnes</h3>
<ul class="personnes">
<li><b>A. Léa</b> a 22 ans. Elle veut apprendre à coudre. Elle est disponible le samedi après-midi et peut payer jusqu'à 30 euros.</li>
<li><b>B. Hugo</b> a 17 ans. Il cherche un petit travail pendant le mois de juillet. Il aimerait travailler avec des enfants.</li>
<li><b>C. Nadia</b> veut faire réparer ses chaussures. Elle cherche un cordonnier ouvert le samedi matin.</li>
<li><b>D. Thomas</b> veut apprendre à préparer des plats italiens. Il est disponible le dimanche matin et cherche un cours à moins de 35 euros.</li>
<li><b>E. Mei</b> cherche un cours de photographie pour débutants. Elle est libre le mercredi soir.</li>
<li><b>F. Paul</b> veut donner ses vieux livres. Il cherche une association qui accepte les livres le samedi après-midi.</li>
<li><b>G. Sarah</b> cherche un cours de danse pour sa fille de 12 ans. Elle est disponible le mercredi après-midi.</li>
<li><b>H. Caroline</b> a 19 ans. En juillet, elle cherche un emploi du lundi au vendredi. Elle aime s'occuper d'enfants.</li>
</ul>`,
      choixCompacts: true,
      documents: [
        { id: "d1", html: `<h3>Annonce 1 – Atelier couture</h3>
<p><span data-s="a">Vous avez au moins 16 ans et vous souhaitez apprendre à coudre ? Notre atelier a lieu chaque samedi de 15 h à 17 h. Le prix est de 25 euros par séance.</span> Débutants bienvenus.</p>` },
        { id: "d2", html: `<h3>Annonce 2 – Animateurs pour enfants</h3>
<p><span data-s="a">Nous recherchons des jeunes de 18 ans ou plus pour travailler avec des enfants pendant le mois de juillet. Travail du lundi au vendredi, de 9 h à 16 h.</span> Contrat rémunéré.</p>` },
        { id: "d3", html: `<h3>Annonce 3 – Cordonnerie Martin</h3>
<p>Votre magasin de chaussures est fermé ? <span data-s="a">Notre cordonnerie est ouverte du lundi au vendredi de 9 h à 18 h et le samedi de 9 h à 12 h. Réparation de chaussures et de sacs.</span></p>` },
        { id: "d4", html: `<h3>Annonce 4 – Cours de cuisine italienne</h3>
<p><span data-s="a">Apprenez à préparer des recettes italiennes simples avec notre cuisinier. Cours chaque dimanche de 10 h à 12 h. Prix : 30 euros.</span> Le matériel et les ingrédients sont compris.</p>` },
        { id: "d5", html: `<h3>Annonce 5 – Photo pour débutants</h3>
<p>Vous voulez apprendre les bases de la photographie ? <span data-s="a">Notre cours pour débutants a lieu tous les mercredis de 19 h à 21 h.</span> Appareil photo non obligatoire pour la première séance.</p>` },
        { id: "d6", html: `<h3>Annonce 6 – Livres pour tous</h3>
<p><span data-s="a">Notre association récupère vos livres en bon état pour les donner à des écoles et à des centres sociaux. Dépôt possible le samedi de 14 h à 17 h.</span></p>` }
      ],
      questions: [
        { doc: "d1", s: "a", q: "L'annonce 1 correspond à…", choix: ["Léa","Hugo","Nadia","Thomas","Mei","Paul","Sarah","Caroline"], r: 0, p: 1.5,
          e: "Léa a 22 ans, veut apprendre à coudre le samedi après-midi et peut payer 30 euros : l'atelier est pour les « au moins 16 ans », « chaque samedi de 15 h à 17 h », à « 25 euros »." },
        { doc: "d2", s: "a", q: "L'annonce 2 correspond à…", choix: ["Léa","Hugo","Nadia","Thomas","Mei","Paul","Sarah","Caroline"], r: 7, p: 1.5,
          e: "Caroline a 19 ans et cherche un emploi avec des enfants en juillet, du lundi au vendredi : l'annonce cherche des jeunes « de 18 ans ou plus ». Attention : Hugo n'a que 17 ans, il est trop jeune." },
        { doc: "d3", s: "a", q: "L'annonce 3 correspond à…", choix: ["Léa","Hugo","Nadia","Thomas","Mei","Paul","Sarah","Caroline"], r: 2, p: 0.5,
          e: "Nadia veut faire réparer ses chaussures le samedi matin : la cordonnerie est ouverte « le samedi de 9 h à 12 h »." },
        { doc: "d4", s: "a", q: "L'annonce 4 correspond à…", choix: ["Léa","Hugo","Nadia","Thomas","Mei","Paul","Sarah","Caroline"], r: 3, p: 1,
          e: "Thomas veut cuisiner italien le dimanche matin pour moins de 35 euros : le cours a lieu « chaque dimanche de 10 h à 12 h », pour « 30 euros »." },
        { doc: "d5", s: "a", q: "L'annonce 5 correspond à…", choix: ["Léa","Hugo","Nadia","Thomas","Mei","Paul","Sarah","Caroline"], r: 4, p: 1,
          e: "Mei cherche un cours de photo pour débutants le mercredi soir : le cours a lieu « tous les mercredis de 19 h à 21 h »." },
        { doc: "d6", s: "a", q: "L'annonce 6 correspond à…", choix: ["Léa","Hugo","Nadia","Thomas","Mei","Paul","Sarah","Caroline"], r: 5, p: 0.5,
          e: "Paul veut donner ses livres le samedi après-midi : l'association « récupère vos livres », avec un « dépôt possible le samedi de 14 h à 17 h »." }
      ]
    },

    // ---------------------------------------------------------------
    {
      titre: "Exercice 2",
      points: 6,
      consigne: "Vous recevez ce message d'un ami. Lisez-le et répondez aux questions.",
      documents: [
        { id: "d1", html: `<h3>Mon nouveau travail</h3>
<p>Bonjour Nadia,</p>
<p>Je t'écris pour te donner des nouvelles de mon travail. <span data-s="a">Depuis lundi, je travaille dans une petite boulangerie près de la place centrale.</span> <span data-s="b">Je commence à six heures du matin, alors je me lève très tôt.</span> Au début, c'était difficile, mais maintenant j'aime bien mon nouveau rythme. <span data-s="c">Ma collègue, Sophie, m'apprend à préparer les pains et les croissants.</span> Le mercredi, je travaille seulement le matin et je termine à midi. <span data-s="d">C'est pratique parce que je peux faire mes courses l'après-midi.</span> <span data-s="e">La boulangerie ferme à dix-huit heures, sauf le samedi où elle ferme à seize heures.</span> J'aime surtout le vendredi, car nous préparons beaucoup de gâteaux pour le week-end. Si tu es libre samedi prochain, viens me voir ! Je pourrai te montrer mon nouveau travail. <span data-s="f">J'espère garder ce travail longtemps, car l'équipe est vraiment sympathique.</span></p>
<p>À bientôt,<br>Éric</p>` }
      ],
      questions: [
        { doc: "d1", s: "a", q: "Où Éric travaille-t-il ?", choix: ["Dans un restaurant.","Dans une boulangerie.","Dans un magasin."], r: 1, p: 1,
          e: "Éric écrit : « je travaille dans une petite boulangerie »." },
        { doc: "d1", s: "b", q: "À quelle heure Éric commence-t-il son travail ?", choix: ["À 6 heures.","À 8 heures.","À midi."], r: 0, p: 1,
          e: "« Je commence à six heures du matin. » Midi, c'est l'heure où il termine le mercredi." },
        { doc: "d1", s: "c", q: "Qui lui apprend son nouveau travail ?", choix: ["Sa sœur.","Sa patronne.","Sa collègue Sophie."], r: 2, p: 1,
          e: "« Ma collègue, Sophie, m'apprend à préparer les pains et les croissants. »" },
        { doc: "d1", s: "d", q: "Que fait Éric le mercredi après-midi ?", choix: ["Il travaille à la boulangerie.","Il peut faire ses courses.","Il prépare des gâteaux."], r: 1, p: 1,
          e: "Le mercredi, il travaille seulement le matin : « je peux faire mes courses l'après-midi ». Les gâteaux, c'est le vendredi." },
        { doc: "d1", s: "e", q: "Quel jour la boulangerie ferme-t-elle le plus tôt ?", choix: ["Le vendredi.","Le samedi.","Le mercredi."], r: 1, p: 1,
          e: "Elle ferme à 18 heures, « sauf le samedi où elle ferme à seize heures ». Le mercredi, c'est Éric qui termine à midi, pas la boulangerie qui ferme." },
        { doc: "d1", s: "f", q: "Pourquoi Éric aime-t-il particulièrement son équipe ?", choix: ["Parce que ses collègues sont sympathiques.","Parce qu'ils travaillent seulement le matin.","Parce qu'ils habitent près de chez lui."], r: 0, p: 1,
          e: "Éric écrit que « l'équipe est vraiment sympathique »." }
      ]
    },

    // ---------------------------------------------------------------
    {
      titre: "Exercice 3",
      points: 6,
      consigne: "Lisez ces deux documents et répondez aux questions.",
      documents: [
        { id: "d1", html: `<h3>Document 1 – Atelier de poterie</h3>
<p><span data-s="a">Pour participer à l'atelier de poterie, inscrivez-vous à l'accueil au plus tard jeudi.</span> <span data-s="b">L'atelier commence samedi à 14 h et se termine à 16 h 30.</span> <span data-s="c">Le matériel est fourni, mais vous devez apporter un vieux tablier pour protéger vos vêtements.</span> Les participants doivent avoir au moins quatorze ans. Après l'atelier, les objets restent dans le centre pendant une semaine pour sécher. Vous pourrez ensuite venir les chercher pendant les heures d'ouverture.</p>` },
        { id: "d2", html: `<h3>Document 2 – Un portefeuille retrouvé</h3>
<p>Bonjour Ana, j'ai trouvé ton portefeuille ce matin dans le café près de la mairie. <span data-s="a">Je l'ai donné au serveur, qui l'a placé dans un tiroir derrière le comptoir.</span> <span data-s="b">Il m'a dit qu'il pouvait le garder jusqu'à vendredi soir.</span> Après cette date, il le donnera au responsable du café. <span data-s="c">Je ne peux pas passer te voir aujourd'hui parce que je travaille jusqu'à 19 heures.</span> Appelle-moi si tu veux que je t'accompagne demain.</p>` }
      ],
      questions: [
        { doc: "d1", s: "a", q: "Quand faut-il s'inscrire à l'atelier de poterie au plus tard ?", choix: ["Mercredi.","Jeudi.","Samedi."], r: 1, p: 0.5,
          e: "« Inscrivez-vous à l'accueil au plus tard jeudi. » Samedi, c'est le jour de l'atelier." },
        { doc: "d1", s: "b", q: "À quelle heure l'atelier se termine-t-il ?", choix: ["À 14 h.","À 16 h.","À 16 h 30."], r: 2, p: 2,
          e: "L'atelier « se termine à 16 h 30 ». 14 h, c'est l'heure du début." },
        { doc: "d1", s: "c", q: "Que doivent apporter les participants ?", choix: ["Un tablier usagé.","Du matériel de poterie.","Des vêtements neufs."], r: 0, p: 0.5,
          e: "Il faut « apporter un vieux tablier » : c'est un tablier usagé. Le matériel, lui, est fourni." },
        { doc: "d2", s: "a", q: "Où est le portefeuille d'Ana ?", choix: ["Chez la personne qui l'a trouvé.","Dans un tiroir du café.","À la mairie."], r: 1, p: 1,
          e: "Le serveur « l'a placé dans un tiroir derrière le comptoir » du café." },
        { doc: "d2", s: "b", q: "Jusqu'à quand le serveur peut-il garder le portefeuille ?", choix: ["Jusqu'à jeudi soir.","Jusqu'à vendredi soir.","Jusqu'à samedi matin."], r: 1, p: 1,
          e: "« Il pouvait le garder jusqu'à vendredi soir. »" },
        { doc: "d2", s: "c", q: "Pourquoi la personne ne peut-elle pas voir Ana aujourd'hui ?", choix: ["Elle travaille jusqu'à 19 heures.","Elle doit aller à la mairie.","Elle est dans un autre café."], r: 0, p: 1,
          e: "« Je ne peux pas passer te voir aujourd'hui parce que je travaille jusqu'à 19 heures. »" }
      ]
    },

    // ---------------------------------------------------------------
    {
      titre: "Exercice 4",
      points: 7,
      consigne: "Vous lisez cet article dans un journal. Répondez aux questions.",
      documents: [
        { id: "d1", html: `<h3>Une bibliothèque d'objets pour les habitants</h3>
<p>La ville de Valmont vient de créer une bibliothèque d'objets. <span data-s="a">Le principe est simple : au lieu d'acheter certains objets rarement utilisés, les habitants peuvent les emprunter gratuitement.</span> <span data-s="b">On trouve par exemple une perceuse, une machine à coudre, des outils de jardinage et un appareil pour nettoyer les vitres.</span> <span data-s="c">Pour emprunter un objet, il faut avoir une carte de la bibliothèque et respecter une durée de sept jours.</span></p>
<p><span data-s="d">Le service fonctionne depuis un mois et reçoit déjà beaucoup de demandes.</span> <span data-s="e">Les responsables veulent maintenant acheter d'autres objets, notamment un petit nettoyeur à vapeur. Ils demandent aussi aux habitants de proposer des objets utiles à ajouter à la collection.</span> La ville espère ainsi aider les habitants à faire des économies et à acheter moins de matériel.</p>` }
      ],
      questions: [
        { doc: "d1", s: "a", q: "Pourquoi la ville a-t-elle créé cette bibliothèque d'objets ?", choix: ["Pour vendre du matériel aux habitants.","Pour permettre d'utiliser des objets sans toujours les acheter.","Pour remplacer les magasins de la ville."], r: 1, p: 1,
          e: "« Au lieu d'acheter certains objets rarement utilisés, les habitants peuvent les emprunter gratuitement. »" },
        { doc: "d1", s: "b", q: "Que peut-on notamment emprunter ?", choix: ["Une machine à coudre.","Un ordinateur portable.","Une télévision."], r: 0, p: 1.5,
          e: "On trouve « une perceuse, une machine à coudre, des outils de jardinage » et un appareil pour les vitres." },
        { doc: "d1", s: "c", q: "Vrai ou faux ? Les habitants peuvent garder un objet emprunté pendant une semaine.", choix: ["Vrai","Faux"], r: 0, p: 1.5,
          e: "Il faut « respecter une durée de sept jours » : sept jours, c'est une semaine." },
        { doc: "d1", s: "d", q: "Comment le service fonctionne-t-il depuis son ouverture ?", choix: ["Il reçoit déjà beaucoup de demandes.","Il est utilisé seulement par les familles.","Il a peu de visiteurs."], r: 0, p: 1.5,
          e: "Le service « reçoit déjà beaucoup de demandes »." },
        { doc: "d1", s: "e", q: "Que veulent faire les responsables maintenant ?", choix: ["Fermer le service pendant l'hiver.","Acheter de nouveaux objets et écouter les propositions des habitants.","Faire payer tous les emprunts."], r: 1, p: 1.5,
          e: "Ils veulent « acheter d'autres objets » et demandent aux habitants « de proposer des objets utiles »." }
      ]
    }
  ]
};
