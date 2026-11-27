// DELF A2 – Compréhension des écrits – Sujet 8
// (appelé « Sujet 9 » dans le document de Rémi ; numéroté 8 sur le site pour éviter un trou)
// Textes originaux (proposés avec l'aide de l'IA, corrigés et validés par Rémi) :
// exercice 4 version « zoo » ; exercice 2, questions 1 et 2 échangées ; explication de Sarah.
// Présentation du site : annonces numérotées 1 à 6 (A à F dans le document),
// personnes nommées A à H (1 à 8 dans le document), dans le même ordre.
// Ne jamais copier les vrais sujets.
//
// Même rangement que ecrits_01.js :
// - <span data-s="a">…</span> = phrase surlignée à la correction (question : s:"a") ;
// - doc:"d1" = document où se trouve la réponse ;
// - choix = réponses proposées, r = numéro de la bonne réponse (0 = la première),
//   p = points, e = explication.

window.SUJET = {
  numero: 8,
  exercices: [

    // ---------------------------------------------------------------
    {
      titre: "Exercice 1",
      points: 6,
      consigne: "Vous lisez ces annonces dans le journal de votre quartier. Ces personnes cherchent une activité, un service ou un travail. Pour chaque annonce, choisissez la personne qui correspond. Attention : deux personnes ne correspondent à aucune annonce.",
      intro: `<h3>Les personnes</h3>
<ul class="personnes">
<li><b>A. Lina</b> est étudiante et a dix-neuf ans. Elle cherche un cours de cuisine le lundi soir et peut payer dix euros.</li>
<li><b>B. Mehdi</b> travaille à Liège. Il habite à Verviers et voudrait partager une voiture chaque matin de semaine.</li>
<li><b>C. Anaïs</b> veut vendre quelques objets dimanche. Elle peut payer cinq euros pour une table et réserver avant mercredi.</li>
<li><b>D. Victor</b> cherche une activité gratuite le samedi après-midi. Il aime marcher et peut s'inscrire à l'avance.</li>
<li><b>E. Sarah</b> veut acheter un bouquet pour dimanche matin. Elle souhaite le recevoir chez elle ce jour-là.</li>
<li><b>F. Hugo</b> cherche une laverie ouverte tard le soir. Il peut payer quatre euros pour laver son linge.</li>
<li><b>G. Nora</b> a dix-sept ans. Elle voudrait apprendre à cuisiner le lundi de dix-huit heures à vingt heures.</li>
<li><b>H. Élodie</b> souhaite acheter un bouquet pour samedi. Elle peut commander la veille et aller chercher ses fleurs à la boutique.</li>
</ul>`,
      choixCompacts: true,
      documents: [
        { id: "d1", html: `<h3>Annonce 1 – Fleurs pour une occasion spéciale</h3>
<p>La boutique Le Jasmin prépare des bouquets sur commande. <span data-s="a">Ouverture du mardi au samedi, de neuf heures à dix-huit heures.</span> Livraison possible dans le quartier. Commandez la veille.</p>` },
        { id: "d2", html: `<h3>Annonce 2 – Laverie automatique</h3>
<p><span data-s="a">Notre laverie est ouverte tous les jours de sept heures à vingt-deux heures. Une machine coûte quatre euros.</span> Des sèche-linge sont disponibles. Paiement par pièces ou carte bancaire.</p>` },
        { id: "d3", html: `<h3>Annonce 3 – Covoiturage pour le travail</h3>
<p><span data-s="a">Je cherche une personne pour partager ma voiture chaque matin du lundi au vendredi. Départ de Verviers à sept heures quinze, arrivée à Liège vers huit heures.</span> Participation : trois euros par trajet.</p>` },
        { id: "d4", html: `<h3>Annonce 4 – Vide-grenier du quartier</h3>
<p><span data-s="a">Venez vendre ou acheter des objets dimanche de neuf heures à quinze heures sur la place du Parc. Une table coûte cinq euros. Réservation obligatoire avant mercredi auprès de l'organisateur.</span></p>` },
        { id: "d5", html: `<h3>Annonce 5 – Promenade avec un guide</h3>
<p><span data-s="a">Découvrez les chemins de la région avec un guide local. Sortie le samedi à quatorze heures, durée : deux heures. Activité gratuite, mais inscription nécessaire.</span> Chaussures de marche conseillées.</p>` },
        { id: "d6", html: `<h3>Annonce 6 – Atelier de cuisine pour étudiants</h3>
<p>Apprenez à préparer trois plats faciles dans une cuisine équipée. <span data-s="a">Cours le lundi de dix-huit heures à vingt heures. Réservé aux étudiants de dix-huit ans minimum. Prix : dix euros.</span></p>` }
      ],
      questions: [
        { doc: "d1", s: "a", q: "L'annonce 1 correspond à…", choix: ["Lina","Mehdi","Anaïs","Victor","Sarah","Hugo","Nora","Élodie"], r: 7, p: 1.5,
          e: "Élodie veut un bouquet pour samedi et peut aller le chercher à la boutique : la boutique est ouverte « du mardi au samedi ». Attention : Sarah veut son bouquet dimanche, mais la boutique est ouverte du mardi au samedi, donc elle est fermée le dimanche. Elle ne peut donc pas recevoir son bouquet ce jour-là." },
        { doc: "d2", s: "a", q: "L'annonce 2 correspond à…", choix: ["Lina","Mehdi","Anaïs","Victor","Sarah","Hugo","Nora","Élodie"], r: 5, p: 1.5,
          e: "Hugo cherche une laverie ouverte tard le soir pour quatre euros : la laverie est ouverte « jusqu'à vingt-deux heures » et « une machine coûte quatre euros »." },
        { doc: "d3", s: "a", q: "L'annonce 3 correspond à…", choix: ["Lina","Mehdi","Anaïs","Victor","Sarah","Hugo","Nora","Élodie"], r: 1, p: 0.5,
          e: "Mehdi habite à Verviers, travaille à Liège et veut partager une voiture chaque matin de semaine : départ « de Verviers », arrivée « à Liège », « du lundi au vendredi »." },
        { doc: "d4", s: "a", q: "L'annonce 4 correspond à…", choix: ["Lina","Mehdi","Anaïs","Victor","Sarah","Hugo","Nora","Élodie"], r: 2, p: 1,
          e: "Anaïs veut vendre des objets dimanche et peut payer cinq euros : le vide-grenier a lieu « dimanche », « une table coûte cinq euros », avec réservation « avant mercredi »." },
        { doc: "d5", s: "a", q: "L'annonce 5 correspond à…", choix: ["Lina","Mehdi","Anaïs","Victor","Sarah","Hugo","Nora","Élodie"], r: 3, p: 1,
          e: "Victor cherche une activité gratuite le samedi après-midi et aime marcher : la promenade a lieu « le samedi à quatorze heures », elle est « gratuite », avec inscription." },
        { doc: "d6", s: "a", q: "L'annonce 6 correspond à…", choix: ["Lina","Mehdi","Anaïs","Victor","Sarah","Hugo","Nora","Élodie"], r: 0, p: 0.5,
          e: "Lina, étudiante de 19 ans, cherche un cours de cuisine le lundi soir pour dix euros : le cours a lieu « le lundi de dix-huit heures à vingt heures », pour « dix euros ». Attention : Nora a dix-sept ans, et l'atelier est « réservé aux étudiants de dix-huit ans minimum »." }
      ]
    },

    // ---------------------------------------------------------------
    {
      titre: "Exercice 2",
      points: 6,
      consigne: "Vous recevez ce message d'une amie. Lisez-le et répondez aux questions.",
      documents: [
        { id: "d1", html: `<h3>Objet : Quelques jours au camping</h3>
<p>Salut Maël,</p>
<p><span data-s="a">Je t'écris parce que je viens de passer trois jours dans un camping près d'un lac.</span> <span data-s="b">Je suis partie avec ma cousine et nous avons dormi dans une petite tente.</span> Nous avions réservé une place près des sanitaires, car c'était plus pratique. Le premier jour, nous avons installé nos affaires puis nous avons fait le tour du lac à pied. <span data-s="d">Le lendemain, nous avons loué deux kayaks pendant une heure.</span> C'était amusant, même si l'eau était assez froide ! Le soir, nous avons préparé des pâtes sur un petit réchaud. <span data-s="e">Il a plu pendant la nuit, mais notre tente était bien imperméable.</span> J'ai beaucoup aimé ce séjour parce que nous avons passé du temps dehors et rencontré des gens sympathiques. <span data-s="f">La prochaine fois, j'aimerais rester une semaine entière.</span> Tu voudrais venir avec moi en juillet ?</p>
<p>À bientôt,<br>Éva</p>` }
      ],
      questions: [
        { doc: "d1", s: "a", q: "Où se trouvait le camping ?", choix: ["Près d'un lac.","Dans une forêt.","Au bord de la mer."], r: 0, p: 1,
          e: "Éva a passé trois jours « dans un camping près d'un lac »." },
        { doc: "d1", s: "b", q: "Avec qui Éva est-elle partie ?", choix: ["Avec une amie.","Avec sa cousine.","Avec ses parents."], r: 1, p: 1,
          e: "« Je suis partie avec ma cousine. »" },
        { doc: "d1", s: "b", q: "Où ont-elles dormi ?", choix: ["Dans une caravane.","Dans un petit chalet.","Dans une tente."], r: 2, p: 1,
          e: "Elles ont « dormi dans une petite tente »." },
        { doc: "d1", s: "d", q: "Quelle activité ont-elles faite le lendemain ?", choix: ["Elles ont loué des kayaks.","Elles ont visité un musée.","Elles ont fait du vélo."], r: 0, p: 1,
          e: "« Le lendemain, nous avons loué deux kayaks pendant une heure. »" },
        { doc: "d1", s: "e", q: "Quel temps a-t-il fait pendant la nuit ?", choix: ["Il a fait très chaud.","Il a plu.","Il a neigé."], r: 1, p: 1,
          e: "« Il a plu pendant la nuit. »" },
        { doc: "d1", s: "f", q: "Combien de temps Éva aimerait-elle rester la prochaine fois ?", choix: ["Deux jours.","Trois jours.","Une semaine."], r: 2, p: 1,
          e: "« La prochaine fois, j'aimerais rester une semaine entière. » Trois jours, c'est la durée de ce séjour-ci." }
      ]
    },

    // ---------------------------------------------------------------
    {
      titre: "Exercice 3",
      points: 6,
      consigne: "Lisez ces deux documents et répondez aux questions.",
      documents: [
        { id: "d1", html: `<h3>Document 1 – Information à l'aéroport</h3>
<p><span data-s="a">La compagnie Air Nord informe ses voyageurs que l'enregistrement du vol AN quatre cent vingt à destination de Rome commencera à six heures trente, au comptoir douze.</span> <span data-s="b">Les passagers doivent présenter leur carte d'identité et leur billet.</span> <span data-s="c">Les bagages à déposer ne doivent pas dépasser vingt kilos.</span> L'embarquement commencera à sept heures quinze. La porte sera fermée vingt minutes avant le départ. Les voyageurs qui ont besoin d'aide peuvent s'adresser au personnel près de l'entrée principale.</p>` },
        { id: "d2", html: `<h3>Document 2 – Message de votre assurance</h3>
<p><span data-s="a">Pour demander un remboursement après un dégât dans votre logement, envoyez le formulaire à votre assurance dans les cinq jours.</span> <span data-s="b">Ajoutez des photos et gardez les factures des réparations.</span> Si vous avez besoin d'un artisan rapidement, téléphonez d'abord à votre conseiller. N'effectuez pas de gros travaux avant la visite de l'expert. <span data-s="c">Pour toute question, le service est disponible du lundi au vendredi, de neuf heures à seize heures, par téléphone ou sur le site internet.</span></p>` }
      ],
      questions: [
        { doc: "d1", s: "a", q: "À quelle heure commence l'enregistrement du vol ?", choix: ["À six heures trente.","À sept heures quinze.","À sept heures trente."], r: 0, p: 0.5,
          e: "L'enregistrement « commencera à six heures trente ». Sept heures quinze, c'est l'embarquement." },
        { doc: "d1", s: "b", q: "Quel document les passagers doivent-ils présenter ?", choix: ["Leur permis de conduire.","Leur carte d'identité et leur billet.","Une facture de voyage."], r: 1, p: 2,
          e: "« Les passagers doivent présenter leur carte d'identité et leur billet. »" },
        { doc: "d1", s: "c", q: "Quel poids maximum les bagages peuvent-ils avoir ?", choix: ["Quinze kilos.","Dix-huit kilos.","Vingt kilos."], r: 2, p: 0.5,
          e: "Les bagages « ne doivent pas dépasser vingt kilos »." },
        { doc: "d2", s: "a", q: "Dans quel délai faut-il envoyer le formulaire à l'assurance ?", choix: ["Dans les deux jours.","Dans les cinq jours.","Dans les dix jours."], r: 1, p: 1,
          e: "Il faut envoyer le formulaire « dans les cinq jours »." },
        { doc: "d2", s: "b", q: "Que faut-il joindre au formulaire ?", choix: ["Des photos et les factures des réparations.","Une copie du passeport.","Le contrat de location."], r: 0, p: 1,
          e: "« Ajoutez des photos et gardez les factures des réparations. »" },
        { doc: "d2", s: "c", q: "Quand le service de l'assurance est-il disponible ?", choix: ["Tous les jours.","Le week-end seulement.","Du lundi au vendredi."], r: 2, p: 1,
          e: "Le service est disponible « du lundi au vendredi, de neuf heures à seize heures »." }
      ]
    },

    // ---------------------------------------------------------------
    {
      titre: "Exercice 4",
      points: 7,
      consigne: "Vous lisez cet article dans un journal. Répondez aux questions.",
      documents: [
        { id: "d1", html: `<h3>Une nouvelle activité au zoo</h3>
<p><span data-s="a">Le zoo de Valmont propose une nouvelle activité pour les familles pendant les vacances scolaires.</span> Les visiteurs peuvent participer à une rencontre avec les soigneurs tous les samedis à 10 heures. <span data-s="b">Pendant une heure, ils découvrent le travail de ces professionnels et apprennent comment les animaux sont nourris.</span> <span data-s="c">Le groupe est limité à quinze personnes pour permettre à chacun de bien écouter les explications.</span> <span data-s="d">Cette activité est réservée aux visiteurs âgés de huit ans et plus.</span> Le prix est de cinq euros par personne, en plus du billet d'entrée. <span data-s="e">Il faut réserver sa place sur le site Internet du zoo au moins deux jours avant la visite.</span> Les participants doivent arriver dix minutes avant le début de l'activité, devant l'entrée principale.</p>` }
      ],
      questions: [
        { doc: "d1", s: "a", q: "À quelle période cette activité est-elle proposée ?", choix: ["Uniquement pendant les vacances d'été.","Pendant les vacances scolaires.","Tous les dimanches de l'année."], r: 1, p: 1,
          e: "L'activité est proposée « pendant les vacances scolaires »." },
        { doc: "d1", s: "b", q: "Que découvrent les visiteurs pendant cette rencontre ?", choix: ["La construction des espaces pour les animaux.","Les horaires d'ouverture des différents bâtiments.","Les tâches quotidiennes des personnes qui s'occupent des animaux."], r: 2, p: 1.5,
          e: "Ils « découvrent le travail de ces professionnels » (les soigneurs) et « comment les animaux sont nourris »." },
        { doc: "d1", s: "c", q: "Vrai ou faux ? Les groupes peuvent accueillir vingt personnes.", choix: ["Vrai","Faux"], r: 1, p: 1.5,
          e: "« Le groupe est limité à quinze personnes. »" },
        { doc: "d1", s: "d", q: "Quel âge faut-il avoir pour participer ?", choix: ["Il faut être âgé d'au moins huit ans.","L'activité est ouverte à tous les enfants.","Il faut avoir au moins six ans."], r: 0, p: 1.5,
          e: "L'activité est « réservée aux visiteurs âgés de huit ans et plus »." },
        { doc: "d1", s: "e", q: "Comment les visiteurs doivent-ils réserver leur participation ?", choix: ["En passant par le site du zoo deux jours au minimum à l'avance.","En envoyant un message aux soigneurs la veille.","En achetant leur place directement devant l'entrée principale."], r: 0, p: 1.5,
          e: "« Il faut réserver sa place sur le site Internet du zoo au moins deux jours avant la visite. »" }
      ]
    }
  ]
};
