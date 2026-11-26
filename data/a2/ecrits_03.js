// DELF A2 – Compréhension des écrits – Sujet 3
// Textes originaux (proposés avec l'aide de ChatGPT, corrigés et validés par Rémi).
// Corrections de Rémi : exercice 4 (« Certains demandent aussi plus de stations »,
// question 5 reformulée) ; exercice 3, questions 4 et 5 : bonnes réponses reformulées.
// Ne jamais copier les vrais sujets.
//
// Même rangement que ecrits_01.js :
// - <span data-s="a">…</span> = phrase surlignée à la correction (question : s:"a") ;
// - doc:"d1" = document où se trouve la réponse ;
// - choix = réponses proposées, r = numéro de la bonne réponse (0 = la première),
//   p = points, e = explication.

window.SUJET = {
  numero: 3,
  exercices: [

    // ---------------------------------------------------------------
    {
      titre: "Exercice 1",
      points: 6,
      consigne: "Lisez les annonces. Ces personnes cherchent une activité, un service ou un logement. Pour chaque annonce, choisissez la personne qui correspond. Attention : deux personnes ne correspondent à aucune annonce.",
      intro: `<h3>Les personnes</h3>
<ul class="personnes">
<li><b>A. Paul</b> veut acheter des légumes frais directement auprès des producteurs. Il est disponible le samedi matin.</li>
<li><b>B. Sofia</b> cherche une activité sportive qu'elle peut pratiquer après son travail, deux fois par semaine.</li>
<li><b>C. Karim</b> veut apprendre à faire des gâteaux et des desserts. Il préfère un cours le week-end.</li>
<li><b>D. Emma</b> travaille près de la gare et cherche un petit appartement à louer près de son travail, avec une chambre.</li>
<li><b>E. Lucas</b> est étudiant. Il aime les films et cherche une séance de cinéma avec un prix réduit.</li>
<li><b>F. Anna</b> veut trouver un emploi pour les vacances d'été. Elle préfère travailler avec des enfants.</li>
<li><b>G. Marc</b> cherche un endroit calme pour étudier le soir et utiliser Internet gratuitement.</li>
<li><b>H. Julie</b> veut acheter un vélo d'occasion pour aller au travail.</li>
</ul>`,
      choixCompacts: true,
      documents: [
        { id: "d1", html: `<h3>Annonce 1 – Marché des producteurs</h3>
<p><span data-s="a">Tous les samedis matin, de 8 h à 13 h, place de la Mairie. Vous trouverez des légumes, des fruits, du fromage et du pain directement auprès des producteurs de la région.</span> Le marché est fermé le dimanche.</p>` },
        { id: "d2", html: `<h3>Annonce 2 – Cours de cuisine</h3>
<p>Vous aimez cuisiner ? <span data-s="a">Notre école propose un cours de pâtisserie chaque samedi de 14 h à 17 h. Apprenez à préparer des tartes, des gâteaux et des desserts simples.</span> Tous les niveaux sont acceptés. Réservation obligatoire.</p>` },
        { id: "d3", html: `<h3>Annonce 3 – Cinéma Lumière</h3>
<p><span data-s="a">Tous les mercredis, la séance de 18 h est à moitié prix pour les étudiants.</span> Découvrez les nouveaux films dans nos salles modernes. Présentez votre carte d'étudiant à l'entrée.</p>` },
        { id: "d4", html: `<h3>Annonce 4 – Appartement à louer</h3>
<p><span data-s="a">Petit appartement d'une chambre, situé près de la gare.</span> Cuisine équipée, salle de bains et petit balcon. L'appartement est disponible immédiatement. Loyer : 690 euros par mois, charges comprises.</p>` },
        { id: "d5", html: `<h3>Annonce 5 – Club de sport</h3>
<p><span data-s="a">Vous cherchez une activité après le travail ? Venez découvrir notre club de badminton. Les entraînements ont lieu le mardi et le jeudi de 19 h à 20 h 30.</span> Une séance d'essai gratuite est proposée.</p>` },
        { id: "d6", html: `<h3>Annonce 6 – Vacances en famille</h3>
<p><span data-s="a">La mairie recherche des animateurs pour les activités des enfants pendant les vacances d'été.</span> Travail du lundi au vendredi, de 9 h à 17 h. Une première expérience avec les enfants est souhaitée.</p>` }
      ],
      questions: [
        { doc: "d1", s: "a", q: "L'annonce 1 correspond à…", choix: ["Paul","Sofia","Karim","Emma","Lucas","Anna","Marc","Julie"], r: 0, p: 1.5,
          e: "Paul veut acheter des légumes aux producteurs le samedi matin : le marché a lieu « tous les samedis matin », « directement auprès des producteurs »." },
        { doc: "d2", s: "a", q: "L'annonce 2 correspond à…", choix: ["Paul","Sofia","Karim","Emma","Lucas","Anna","Marc","Julie"], r: 2, p: 1.5,
          e: "Karim veut apprendre les gâteaux et les desserts le week-end : le cours de pâtisserie a lieu « chaque samedi »." },
        { doc: "d3", s: "a", q: "L'annonce 3 correspond à…", choix: ["Paul","Sofia","Karim","Emma","Lucas","Anna","Marc","Julie"], r: 4, p: 0.5,
          e: "Lucas est étudiant et cherche un prix réduit au cinéma : la séance du mercredi est « à moitié prix pour les étudiants »." },
        { doc: "d4", s: "a", q: "L'annonce 4 correspond à…", choix: ["Paul","Sofia","Karim","Emma","Lucas","Anna","Marc","Julie"], r: 3, p: 1,
          e: "Emma cherche un petit appartement avec une chambre, près de la gare : c'est un « petit appartement d'une chambre, situé près de la gare »." },
        { doc: "d5", s: "a", q: "L'annonce 5 correspond à…", choix: ["Paul","Sofia","Karim","Emma","Lucas","Anna","Marc","Julie"], r: 1, p: 1,
          e: "Sofia cherche un sport après le travail, deux fois par semaine : le club de badminton s'entraîne « le mardi et le jeudi de 19 h à 20 h 30 »." },
        { doc: "d6", s: "a", q: "L'annonce 6 correspond à…", choix: ["Paul","Sofia","Karim","Emma","Lucas","Anna","Marc","Julie"], r: 5, p: 0.5,
          e: "Anna cherche un emploi d'été avec des enfants : la mairie « recherche des animateurs pour les activités des enfants pendant les vacances d'été »." }
      ]
    },

    // ---------------------------------------------------------------
    {
      titre: "Exercice 2",
      points: 6,
      consigne: "Vous recevez ce message d'une amie. Lisez-le et répondez aux questions.",
      documents: [
        { id: "d1", html: `<h3>Une nouvelle vie à Montclair</h3>
<p>Bonjour Léa,</p>
<p>Je t'écris pour te parler de mon nouveau quartier. <span data-s="a">J'habite maintenant près du centre-ville, dans un petit appartement avec un balcon.</span> <span data-s="b">J'aime beaucoup le quartier parce qu'il y a plusieurs magasins et un grand parc à cinq minutes à pied.</span> <span data-s="c">Le samedi matin, je vais souvent au marché avec ma voisine, Clara.</span> Nous achetons des fruits, du fromage et parfois des fleurs. Il y a aussi une petite bibliothèque près de chez moi. <span data-s="d">Elle organise un club de lecture le mercredi soir, et je voudrais y participer.</span> <span data-s="e">Le seul problème, c'est le bruit dans la rue le vendredi soir.</span> Heureusement, mon appartement est au troisième étage et les fenêtres ferment bien. <span data-s="f">Si tu viens me voir le mois prochain, je pourrai te montrer le parc et le marché.</span> Dis-moi quel week-end te convient.</p>
<p>À bientôt,<br>Nina</p>` }
      ],
      questions: [
        { doc: "d1", s: "a", q: "Où habite Nina maintenant ?", choix: ["Dans un village.","Près du centre-ville.","Près de la gare."], r: 1, p: 1,
          e: "Nina écrit : « J'habite maintenant près du centre-ville »." },
        { doc: "d1", s: "b", q: "Pourquoi Nina aime-t-elle son quartier ?", choix: ["Il y a un grand parc près de chez elle.","Il y a une grande piscine.","Il est très calme le soir."], r: 0, p: 1,
          e: "Elle aime le quartier parce qu'il y a « un grand parc à cinq minutes à pied »." },
        { doc: "d1", s: "c", q: "Avec qui Nina va-t-elle au marché ?", choix: ["Avec Léa.","Avec sa sœur.","Avec sa voisine."], r: 2, p: 1,
          e: "Elle va au marché « avec [sa] voisine, Clara »." },
        { doc: "d1", s: "d", q: "Que peut-on faire à la bibliothèque ?", choix: ["Participer à un club de lecture.","Faire du sport.","Acheter des livres."], r: 0, p: 1,
          e: "La bibliothèque « organise un club de lecture le mercredi soir »." },
        { doc: "d1", s: "e", q: "Quel est le problème du quartier ?", choix: ["Les magasins ferment tôt.","Il y a du bruit le vendredi soir.","Le parc est trop loin."], r: 1, p: 1,
          e: "« Le seul problème, c'est le bruit dans la rue le vendredi soir. »" },
        { doc: "d1", s: "f", q: "Que propose Nina à Léa ?", choix: ["Lui faire découvrir le parc et le marché.","Lui prêter son appartement.","Aller avec elle à la bibliothèque."], r: 0, p: 1,
          e: "Nina écrit : « je pourrai te montrer le parc et le marché »." }
      ]
    },

    // ---------------------------------------------------------------
    {
      titre: "Exercice 3",
      points: 6,
      consigne: "Lisez ces deux documents et répondez aux questions.",
      documents: [
        { id: "d1", html: `<h3>Document 1 – Salle de sport Horizon</h3>
<p><span data-s="a">Pour utiliser la salle de sport, vous devez d'abord prendre une carte à l'accueil.</span> <span data-s="b">La salle est ouverte du lundi au vendredi de 7 h à 21 h et le samedi de 9 h à 17 h.</span> Le dimanche, elle est fermée. N'oubliez pas de mettre des chaussures propres. <span data-s="c">Les serviettes sont disponibles gratuitement à l'entrée, mais vous devez les déposer dans le panier après votre séance.</span> Les personnes de moins de seize ans doivent être accompagnées d'un adulte.</p>` },
        { id: "d2", html: `<h3>Document 2 – Un message pour Marc</h3>
<p>Bonjour Marc, je suis passé chez toi hier après-midi, mais tu n'étais pas là. <span data-s="a">J'ai laissé ton livre sur la petite table devant la porte.</span> <span data-s="b">J'ai aussi pris ton courrier dans la boîte aux lettres parce qu'il pleuvait beaucoup.</span> Je l'ai mis dans une enveloppe et je l'ai déposée chez ta voisine, Mme Bernard. Elle sera chez elle ce soir après 18 heures. <span data-s="c">Pour le dîner de vendredi, je peux apporter une salade et un gâteau.</span> Dis-moi si cela te convient.</p>` }
      ],
      questions: [
        { doc: "d1", s: "a", q: "Que faut-il prendre à l'accueil de la salle de sport ?", choix: ["Une carte.","Une serviette.","Des chaussures."], r: 0, p: 0.5,
          e: "« Vous devez d'abord prendre une carte à l'accueil. » Les serviettes sont à l'entrée." },
        { doc: "d1", s: "b", q: "À quelle heure la salle ouvre-t-elle le samedi ?", choix: ["À 7 h.","À 9 h.","À 17 h."], r: 1, p: 2,
          e: "Le samedi, la salle est ouverte « de 9 h à 17 h ». 7 h, c'est en semaine ; 17 h, c'est l'heure de fermeture." },
        { doc: "d1", s: "c", q: "Que faut-il faire avec les serviettes après la séance ?", choix: ["Les garder.","Les laver chez soi.","Les mettre dans le panier."], r: 2, p: 0.5,
          e: "« Vous devez les déposer dans le panier après votre séance. »" },
        { doc: "d2", s: "a", q: "Où le livre de Marc a-t-il été laissé ?", choix: ["Dans la boîte aux lettres.","Sur un petit meuble, devant chez Marc.","Chez Mme Bernard."], r: 1, p: 1,
          e: "« J'ai laissé ton livre sur la petite table devant la porte. » C'est le courrier qui était dans la boîte aux lettres, et qui est maintenant chez Mme Bernard." },
        { doc: "d2", s: "b", q: "Pourquoi la personne a-t-elle pris le courrier de Marc ?", choix: ["Parce qu'il faisait mauvais temps.","Parce que Marc était au travail.","Parce que Mme Bernard était absente."], r: 0, p: 1,
          e: "Elle a pris le courrier « parce qu'il pleuvait beaucoup » : il faisait mauvais temps." },
        { doc: "d2", s: "c", q: "Que veut apporter la personne pour le dîner ?", choix: ["Du fromage et du pain.","Une salade et un gâteau.","Des fruits et des fleurs."], r: 1, p: 1,
          e: "« Pour le dîner de vendredi, je peux apporter une salade et un gâteau. »" }
      ]
    },

    // ---------------------------------------------------------------
    {
      titre: "Exercice 4",
      points: 7,
      consigne: "Vous lisez cet article dans un journal. Répondez aux questions.",
      documents: [
        { id: "d1", html: `<h3>Des vélos électriques dans toute la ville</h3>
<p><span data-s="a">Depuis quelques mois, la ville de Montreval propose un nouveau service pour aider les habitants à se déplacer autrement.</span> <span data-s="b">Des vélos électriques sont disponibles dans douze stations, près de la gare, des écoles et des quartiers résidentiels.</span> Pour utiliser un vélo, il faut télécharger l'application de la ville et créer un compte. <span data-s="c">La première demi-heure est gratuite, puis chaque demi-heure en plus coûte un euro.</span></p>
<p><span data-s="d">Le service rencontre déjà beaucoup de succès, surtout le matin.</span> Selon la mairie, les habitants utilisent principalement les vélos pour aller au travail ou faire de petites courses. <span data-s="e">Certains demandent aussi plus de stations dans les quartiers éloignés du centre. La mairie étudie cette possibilité pour l'année prochaine.</span> Elle souhaite aussi installer des places de stationnement supplémentaires près du marché.</p>` }
      ],
      questions: [
        { doc: "d1", s: "a", q: "Pourquoi la ville propose-t-elle ce service ?", choix: ["Pour aider les habitants à se déplacer autrement.","Pour vendre des vélos électriques.","Pour organiser des courses dans la ville."], r: 0, p: 1,
          e: "La ville propose ce service « pour aider les habitants à se déplacer autrement »." },
        { doc: "d1", s: "b", q: "Où peut-on trouver des vélos électriques ?", choix: ["Seulement près de la gare.","Dans douze stations de la ville.","Uniquement près du marché."], r: 1, p: 1.5,
          e: "Les vélos sont « disponibles dans douze stations », près de la gare mais aussi des écoles et des quartiers résidentiels." },
        { doc: "d1", s: "c", q: "Vrai ou faux ? La première demi-heure d'utilisation d'un vélo électrique est gratuite.", choix: ["Vrai","Faux"], r: 0, p: 1.5,
          e: "« La première demi-heure est gratuite », ensuite chaque demi-heure coûte un euro." },
        { doc: "d1", s: "d", q: "Quand les habitants utilisent-ils surtout les vélos ?", choix: ["Le soir.","Le week-end.","Le matin."], r: 2, p: 1.5,
          e: "Le service a du succès « surtout le matin »." },
        { doc: "d1", s: "e", q: "Qu'est-ce que la mairie étudie pour l'année prochaine ?", choix: ["Supprimer plusieurs stations.","Ajouter des stations dans les quartiers éloignés du centre.","Augmenter le prix de la première demi-heure."], r: 1, p: 1.5,
          e: "Des habitants demandent « plus de stations dans les quartiers éloignés du centre » et « la mairie étudie cette possibilité pour l'année prochaine »." }
      ]
    }
  ]
};
