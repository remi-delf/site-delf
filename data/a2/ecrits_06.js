// DELF A2 – Compréhension des écrits – Sujet 6
// Textes originaux (proposés avec l'aide de ChatGPT, corrigés et validés par Rémi).
// Corrections de Rémi : exercice 2, l'auteur du courriel s'appelle Nicolas ;
// exercice 3, question 4 : « De quelle heure à quelle heure… » ;
// une phrase ajoutée dans l'exercice 2 et dans l'exercice 4 pour respecter les longueurs officielles.
// Ne jamais copier les vrais sujets.
//
// Même rangement que ecrits_01.js :
// - <span data-s="a">…</span> = phrase surlignée à la correction (question : s:"a") ;
// - doc:"d1" = document où se trouve la réponse ;
// - choix = réponses proposées, r = numéro de la bonne réponse (0 = la première),
//   p = points, e = explication.

window.SUJET = {
  numero: 6,
  exercices: [

    // ---------------------------------------------------------------
    {
      titre: "Exercice 1",
      points: 6,
      consigne: "Vous lisez ces annonces dans le journal de votre quartier. Ces personnes cherchent une activité, un service ou un travail. Pour chaque annonce, choisissez la personne qui correspond. Attention : deux personnes ne correspondent à aucune annonce.",
      intro: `<h3>Les personnes</h3>
<ul class="personnes">
<li><b>A. Antoine</b>, 20 ans, cherche une activité pour apprendre à conduire une voiture. Il est disponible le samedi matin.</li>
<li><b>B. Manon</b>, 27 ans, cherche un emploi pour garder des enfants le mercredi après-midi.</li>
<li><b>C. David</b>, 42 ans, veut apprendre à utiliser un ordinateur. Il est disponible le lundi soir.</li>
<li><b>D. Clara</b>, 18 ans, cherche un cours de langue espagnole pour débutants le samedi après-midi.</li>
<li><b>E. Julien</b>, 35 ans, cherche un service pour faire nettoyer sa voiture le samedi matin.</li>
<li><b>F. Sophie</b>, 30 ans, cherche une activité pour apprendre à jouer de la guitare le mardi soir.</li>
<li><b>G. Romain</b>, 24 ans, cherche un cours de natation pour adultes le jeudi soir.</li>
<li><b>H. Amélie</b>, 37 ans, cherche un endroit où faire garder son chien pendant une journée.</li>
</ul>`,
      choixCompacts: true,
      documents: [
        { id: "d1", html: `<h3>Annonce 1 – Apprendre à conduire</h3>
<p><span data-s="a">Auto-école Horizon propose des leçons de conduite le samedi matin.</span> Les cours sont individuels et adaptés aux débutants. Inscription possible à partir de dix-huit ans.</p>` },
        { id: "d2", html: `<h3>Annonce 2 – Garde d'enfants</h3>
<p><span data-s="a">Une famille cherche une personne sérieuse pour garder deux enfants chaque mercredi après-midi, de quatorze heures à dix-huit heures.</span> Expérience avec les enfants souhaitée.</p>` },
        { id: "d3", html: `<h3>Annonce 3 – Cours d'informatique</h3>
<p><span data-s="a">Vous voulez être plus à l'aise avec votre ordinateur ? Cours pour débutants le lundi de dix-huit heures trente à vingt heures.</span> Matériel fourni.</p>` },
        { id: "d4", html: `<h3>Annonce 4 – Espagnol pour débutants</h3>
<p><span data-s="a">Cours d'espagnol pour adultes qui commencent la langue. Les cours ont lieu le samedi après-midi, de quatorze heures à seize heures.</span> Petit groupe de huit personnes.</p>` },
        { id: "d5", html: `<h3>Annonce 5 – Nettoyage automobile</h3>
<p><span data-s="a">Votre voiture a besoin d'un bon nettoyage ? Notre équipe travaille le samedi matin.</span> Intérieur et extérieur : trente-cinq euros. Réservation obligatoire.</p>` },
        { id: "d6", html: `<h3>Annonce 6 – Cours de guitare</h3>
<p><span data-s="a">Vous souhaitez apprendre les bases de la guitare ? Cours pour débutants le mardi soir.</span> Instrument disponible sur place pour les premières séances.</p>` }
      ],
      questions: [
        { doc: "d1", s: "a", q: "L'annonce 1 correspond à…", choix: ["Antoine","Manon","David","Clara","Julien","Sophie","Romain","Amélie"], r: 0, p: 1.5,
          e: "Antoine, 20 ans, veut apprendre à conduire le samedi matin : l'auto-école propose des leçons « le samedi matin », à partir de 18 ans. Attention : Julien est aussi libre le samedi matin, mais il veut faire nettoyer sa voiture." },
        { doc: "d2", s: "a", q: "L'annonce 2 correspond à…", choix: ["Antoine","Manon","David","Clara","Julien","Sophie","Romain","Amélie"], r: 1, p: 1.5,
          e: "Manon cherche un emploi pour garder des enfants le mercredi après-midi : la famille cherche quelqu'un « chaque mercredi après-midi »." },
        { doc: "d3", s: "a", q: "L'annonce 3 correspond à…", choix: ["Antoine","Manon","David","Clara","Julien","Sophie","Romain","Amélie"], r: 2, p: 0.5,
          e: "David veut apprendre l'informatique le lundi soir : le cours a lieu « le lundi de dix-huit heures trente à vingt heures »." },
        { doc: "d4", s: "a", q: "L'annonce 4 correspond à…", choix: ["Antoine","Manon","David","Clara","Julien","Sophie","Romain","Amélie"], r: 3, p: 1,
          e: "Clara, 18 ans, cherche un cours d'espagnol pour débutants le samedi après-midi : le cours est pour les « adultes qui commencent la langue », « le samedi après-midi »." },
        { doc: "d5", s: "a", q: "L'annonce 5 correspond à…", choix: ["Antoine","Manon","David","Clara","Julien","Sophie","Romain","Amélie"], r: 4, p: 1,
          e: "Julien veut faire nettoyer sa voiture le samedi matin : l'équipe de nettoyage « travaille le samedi matin »." },
        { doc: "d6", s: "a", q: "L'annonce 6 correspond à…", choix: ["Antoine","Manon","David","Clara","Julien","Sophie","Romain","Amélie"], r: 5, p: 0.5,
          e: "Sophie veut apprendre la guitare le mardi soir : le cours pour débutants a lieu « le mardi soir »." }
      ]
    },

    // ---------------------------------------------------------------
    {
      titre: "Exercice 2",
      points: 6,
      consigne: "Vous recevez ce message d'un ami. Lisez-le et répondez aux questions.",
      documents: [
        { id: "d1", html: `<p>Bonjour Marc,</p>
<p>Je voulais te raconter ma journée de samedi. <span data-s="a">Le matin, j'ai participé à un atelier dans une association près de chez moi.</span> Nous avons appris à réparer de petits objets de la maison. <span data-s="b">J'ai surtout travaillé sur une lampe qui ne fonctionnait plus.</span> Maintenant, elle fonctionne très bien et je l'ai mise dans ma chambre. L'animateur nous a expliqué comment chercher le problème et utiliser les bons outils. Après l'atelier, je suis allé chez ma sœur. <span data-s="c">Elle avait besoin d'aide pour installer une étagère dans son bureau.</span> <span data-s="d">Nous avons travaillé pendant deux heures, puis nous avons préparé le déjeuner ensemble.</span> <span data-s="e">Je suis rentré chez moi vers dix-sept heures.</span> J'étais fatigué, mais content d'avoir passé une journée utile. <span data-s="f">Dimanche, je vais rester tranquillement à la maison.</span> Et toi, qu'est-ce que tu as prévu pour ce week-end ?</p>
<p>À bientôt,<br>Nicolas</p>` }
      ],
      questions: [
        { doc: "d1", s: "a", q: "Où Nicolas participe-t-il à une activité le matin ?", choix: ["Dans une association.","Chez sa sœur.","Dans un magasin."], r: 0, p: 1,
          e: "« Le matin, j'ai participé à un atelier dans une association près de chez moi. » Il va chez sa sœur après l'atelier." },
        { doc: "d1", s: "b", q: "Sur quel objet travaille-t-il principalement ?", choix: ["Une table.","Une lampe.","Une étagère."], r: 1, p: 1,
          e: "« J'ai surtout travaillé sur une lampe. » L'étagère, c'est chez sa sœur, l'après-midi." },
        { doc: "d1", s: "c", q: "Pourquoi va-t-il chez sa sœur ?", choix: ["Pour préparer une fête.","Pour lui apporter un objet.","Pour l'aider à installer quelque chose."], r: 2, p: 1,
          e: "Sa sœur « avait besoin d'aide pour installer une étagère »." },
        { doc: "d1", s: "d", q: "Combien de temps travaille-t-il avec sa sœur ?", choix: ["Une heure.","Deux heures.","Trois heures."], r: 1, p: 1,
          e: "« Nous avons travaillé pendant deux heures. »" },
        { doc: "d1", s: "e", q: "À quelle heure environ Nicolas rentre-t-il chez lui ?", choix: ["Vers midi.","Vers quinze heures.","Vers dix-sept heures."], r: 2, p: 1,
          e: "« Je suis rentré chez moi vers dix-sept heures. »" },
        { doc: "d1", s: "f", q: "Que prévoit Nicolas pour dimanche ?", choix: ["Rester tranquillement chez lui.","Retourner chez sa sœur.","Participer à un nouvel atelier."], r: 0, p: 1,
          e: "« Dimanche, je vais rester tranquillement à la maison. »" }
      ]
    },

    // ---------------------------------------------------------------
    {
      titre: "Exercice 3",
      points: 6,
      consigne: "Lisez ces deux documents et répondez aux questions.",
      documents: [
        { id: "d1", html: `<h3>Document 1 – Cours de premiers secours</h3>
<p><span data-s="a">Une association organise une formation aux premiers secours samedi prochain.</span> Le cours aura lieu de neuf heures à midi dans une salle municipale. Les participants apprendront les gestes simples à faire en cas de malaise ou de petite blessure. <span data-s="b">La formation est ouverte aux adultes et aux jeunes de plus de quinze ans.</span> <span data-s="c">Le prix est de dix euros par personne.</span> Il faut s'inscrire avant mercredi, car le nombre de places est limité.</p>` },
        { id: "d2", html: `<h3>Document 2 – Journée sans voiture</h3>
<p><span data-s="a">Dimanche, la rue principale sera réservée aux piétons et aux cyclistes de dix heures à dix-sept heures.</span> Les voitures ne pourront pas y circuler pendant cette période. Des activités seront proposées pour les enfants sur la place centrale. Les habitants pourront également utiliser gratuitement un petit espace de jeux. Les commerces resteront ouverts normalement. <span data-s="b">Les personnes qui doivent se déplacer en voiture pourront utiliser les rues voisines.</span></p>` }
      ],
      questions: [
        { doc: "d1", s: "a", q: "Quand aura lieu la formation aux premiers secours ?", choix: ["Samedi.","Dimanche.","Mercredi."], r: 0, p: 0.5,
          e: "La formation a lieu « samedi prochain ». Mercredi, c'est la date limite pour s'inscrire." },
        { doc: "d1", s: "b", q: "Qui peut participer à cette formation ?", choix: ["Seulement les professionnels de santé.","Les adultes et les jeunes de plus de quinze ans.","Les enfants de moins de dix ans."], r: 1, p: 2,
          e: "« La formation est ouverte aux adultes et aux jeunes de plus de quinze ans. »" },
        { doc: "d1", s: "c", q: "Combien coûte la formation ?", choix: ["Cinq euros.","Quinze euros.","Dix euros."], r: 2, p: 0.5,
          e: "« Le prix est de dix euros par personne. » Quinze, c'est l'âge minimum." },
        { doc: "d2", s: "a", q: "De quelle heure à quelle heure la rue principale sera-t-elle fermée aux voitures ?", choix: ["De neuf heures à midi.","De dix heures à dix-sept heures.","De midi à dix-huit heures."], r: 1, p: 1,
          e: "La rue est réservée aux piétons et aux cyclistes « de dix heures à dix-sept heures ». De neuf heures à midi, c'est la formation du document 1." },
        { doc: "d2", s: "a", q: "Qui pourra circuler dans cette rue pendant la journée ?", choix: ["Les voitures et les bus.","Les motos uniquement.","Les piétons et les cyclistes."], r: 2, p: 1,
          e: "La rue sera « réservée aux piétons et aux cyclistes »." },
        { doc: "d2", s: "b", q: "Que pourront faire les personnes qui doivent utiliser leur voiture ?", choix: ["Prendre les rues situées à côté.","Stationner gratuitement dans la rue principale.","Utiliser la place centrale."], r: 0, p: 1,
          e: "Elles « pourront utiliser les rues voisines », c'est-à-dire les rues situées à côté." }
      ]
    },

    // ---------------------------------------------------------------
    {
      titre: "Exercice 4",
      points: 7,
      consigne: "Vous lisez cet article dans un journal. Répondez aux questions.",
      documents: [
        { id: "d1", html: `<h3>Une nouvelle activité pour les jeunes</h3>
<p>Depuis septembre, une maison de jeunes propose un atelier de cuisine sans cuisson pour les adolescents. <span data-s="a">Chaque mardi, les participants se retrouvent après les cours pour préparer des recettes simples avec des fruits, des légumes et différents produits frais.</span> <span data-s="b">Ils apprennent aussi à présenter joliment les plats.</span> <span data-s="c">Au début, certains jeunes ne connaissaient presque rien à la préparation des repas.</span> Maintenant, ils sont plus autonomes et proposent eux-mêmes des idées de recettes. Les jeunes apprécient beaucoup ce moment de partage après une longue journée. Le groupe prépare actuellement une petite présentation pour les parents. <span data-s="d">Elle aura lieu le vendredi vingt-huit juin à dix-neuf heures.</span> Les familles pourront goûter gratuitement les préparations. <span data-s="e">L'activité reprendra en septembre prochain avec un nouveau programme et quelques recettes différentes.</span></p>` }
      ],
      questions: [
        { doc: "d1", s: "a", q: "Quand a lieu l'atelier ?", choix: ["Le mardi après les cours.","Le vendredi matin.","Le mercredi soir."], r: 0, p: 1,
          e: "« Chaque mardi, les participants se retrouvent après les cours. » Le vendredi, c'est la présentation pour les parents." },
        { doc: "d1", s: "b", q: "Qu'apprennent les jeunes pendant l'activité ?", choix: ["À préparer seulement des desserts.","À préparer des recettes simples et à présenter les plats.","À travailler dans un restaurant."], r: 1, p: 1.5,
          e: "Ils préparent « des recettes simples » et « apprennent aussi à présenter joliment les plats »." },
        { doc: "d1", s: "c", q: "Vrai ou faux ? Au début, tous les participants savaient déjà bien préparer les repas.", choix: ["Vrai","Faux"], r: 1, p: 1.5,
          e: "« Au début, certains jeunes ne connaissaient presque rien à la préparation des repas. »" },
        { doc: "d1", s: "d", q: "Quand aura lieu la présentation pour les parents ?", choix: ["Le vendredi vingt-huit juin à dix-neuf heures.","Chaque mardi à dix-neuf heures.","En septembre prochain."], r: 0, p: 1.5,
          e: "La présentation « aura lieu le vendredi vingt-huit juin à dix-neuf heures »." },
        { doc: "d1", s: "e", q: "Que va-t-il se passer après l'été ?", choix: ["L'activité va disparaître.","L'activité continuera avec un nouveau programme.","Les parents participeront chaque semaine."], r: 1, p: 1.5,
          e: "« L'activité reprendra en septembre prochain avec un nouveau programme. »" }
      ]
    }
  ]
};
