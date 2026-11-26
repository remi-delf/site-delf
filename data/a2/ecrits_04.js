// DELF A2 – Compréhension des écrits – Sujet 4
// Textes originaux (proposés avec l'aide de ChatGPT, corrigés et validés par Rémi).
// Correction de Rémi : exercice 1, personne C (« Maria aimerait adopter un chat. »).
// Ne jamais copier les vrais sujets.
//
// Même rangement que ecrits_01.js :
// - <span data-s="a">…</span> = phrase surlignée à la correction (question : s:"a") ;
// - doc:"d1" = document où se trouve la réponse ;
// - choix = réponses proposées, r = numéro de la bonne réponse (0 = la première),
//   p = points, e = explication.

window.SUJET = {
  numero: 4,
  exercices: [

    // ---------------------------------------------------------------
    {
      titre: "Exercice 1",
      points: 6,
      consigne: "Vous lisez ces annonces dans le journal de votre quartier. Ces personnes cherchent une activité, un service ou un travail. Pour chaque annonce, choisissez la personne qui correspond. Attention : deux personnes ne correspondent à aucune annonce.",
      intro: `<h3>Les personnes</h3>
<ul class="personnes">
<li><b>A. Sophie</b> est étudiante. Elle aime la musique classique et cherche un concert à petit prix vendredi soir.</li>
<li><b>B. Daniel</b> veut apprendre à parler français avec d'autres personnes. Il cherche une activité le mercredi soir.</li>
<li><b>C. Maria</b> aimerait adopter un chat. Elle cherche un animal qui a besoin d'une nouvelle famille.</li>
<li><b>D. Thomas</b> cherche un petit travail pour le week-end. Il aime travailler dans les hôtels.</li>
<li><b>E. Julie</b> cherche un manteau chaud pour l'hiver, mais elle ne veut pas acheter un vêtement neuf.</li>
<li><b>F. Antoine</b> aime cuisiner et voudrait apprendre à faire du pain pendant un cours le samedi.</li>
<li><b>G. Claire</b> cherche un cours de dessin pour son fils de dix ans le mercredi après-midi.</li>
<li><b>H. Paul</b> veut faire réparer son téléphone et cherche un magasin ouvert le dimanche.</li>
</ul>`,
      choixCompacts: true,
      documents: [
        { id: "d1", html: `<h3>Annonce 1 – Adoption de chats</h3>
<p><span data-s="a">Notre association cherche une famille pour plusieurs chats adultes.</span> Les animaux sont vaccinés et en bonne santé. Venez les rencontrer samedi après-midi dans notre centre. Une petite participation est demandée pour l'adoption.</p>` },
        { id: "d2", html: `<h3>Annonce 2 – Français autrement</h3>
<p><span data-s="a">Vous voulez pratiquer le français dans une ambiance simple et agréable ? Venez parler avec d'autres personnes chaque mercredi de 19 h à 20 h 30.</span> Activité gratuite, sans inscription. Tous les niveaux sont acceptés.</p>` },
        { id: "d3", html: `<h3>Annonce 3 – Concert classique</h3>
<p><span data-s="a">Étudiants : profitez d'un tarif spécial pour le concert de vendredi à 20 h. Au programme : Mozart et Beethoven.</span> Présentez votre carte d'étudiant à l'entrée pour obtenir votre réduction.</p>` },
        { id: "d4", html: `<h3>Annonce 4 – Atelier du petit boulanger</h3>
<p><span data-s="a">Apprenez à préparer du pain maison avec un boulanger professionnel. L'atelier a lieu tous les samedis de 10 h à 12 h.</span> Le matériel et les ingrédients sont compris dans le prix du cours.</p>` },
        { id: "d5", html: `<h3>Annonce 5 – Grande vente de vêtements</h3>
<p><span data-s="a">Manteaux, pulls, pantalons et chaussures à petits prix ! Tous les vêtements sont d'occasion mais en très bon état.</span> La vente a lieu samedi et dimanche de 10 h à 17 h.</p>` },
        { id: "d6", html: `<h3>Annonce 6 – Hôtel des Étoiles</h3>
<p><span data-s="a">Notre hôtel recherche une personne pour aider au petit déjeuner le samedi et le dimanche matin.</span> Travail de 7 h à 11 h. Une première expérience dans un hôtel est appréciée, mais elle n'est pas obligatoire.</p>` }
      ],
      questions: [
        { doc: "d1", s: "a", q: "L'annonce 1 correspond à…", choix: ["Sophie","Daniel","Maria","Thomas","Julie","Antoine","Claire","Paul"], r: 2, p: 1.5,
          e: "Maria aimerait adopter un chat qui a besoin d'une nouvelle famille : l'association « cherche une famille pour plusieurs chats adultes »." },
        { doc: "d2", s: "a", q: "L'annonce 2 correspond à…", choix: ["Sophie","Daniel","Maria","Thomas","Julie","Antoine","Claire","Paul"], r: 1, p: 1.5,
          e: "Daniel veut parler français avec d'autres personnes le mercredi soir : l'activité a lieu « chaque mercredi de 19 h à 20 h 30 »." },
        { doc: "d3", s: "a", q: "L'annonce 3 correspond à…", choix: ["Sophie","Daniel","Maria","Thomas","Julie","Antoine","Claire","Paul"], r: 0, p: 0.5,
          e: "Sophie est étudiante et cherche un concert classique à petit prix le vendredi soir : il y a un « tarif spécial » pour les étudiants au concert « de vendredi à 20 h », avec Mozart et Beethoven." },
        { doc: "d4", s: "a", q: "L'annonce 4 correspond à…", choix: ["Sophie","Daniel","Maria","Thomas","Julie","Antoine","Claire","Paul"], r: 5, p: 1,
          e: "Antoine veut apprendre à faire du pain le samedi : l'atelier apprend à « préparer du pain maison », « tous les samedis »." },
        { doc: "d5", s: "a", q: "L'annonce 5 correspond à…", choix: ["Sophie","Daniel","Maria","Thomas","Julie","Antoine","Claire","Paul"], r: 4, p: 1,
          e: "Julie cherche un manteau mais pas un vêtement neuf : la vente propose des « manteaux », et « tous les vêtements sont d'occasion »." },
        { doc: "d6", s: "a", q: "L'annonce 6 correspond à…", choix: ["Sophie","Daniel","Maria","Thomas","Julie","Antoine","Claire","Paul"], r: 3, p: 0.5,
          e: "Thomas cherche un petit travail le week-end dans un hôtel : l'hôtel cherche quelqu'un « le samedi et le dimanche matin »." }
      ]
    },

    // ---------------------------------------------------------------
    {
      titre: "Exercice 2",
      points: 6,
      consigne: "Vous recevez ce message d'un ami. Lisez-le et répondez aux questions.",
      documents: [
        { id: "d1", html: `<h3>Un week-end à Dinant</h3>
<p>Bonjour Camille,</p>
<p>Je voulais te raconter mon week-end à Dinant. <span data-s="a">Samedi matin, je suis parti en train avec mon frère.</span> <span data-s="b">Nous avons visité la citadelle, puis nous avons mangé dans un petit restaurant près de la rivière.</span> J'ai choisi une soupe et un plat de poisson. L'après-midi, nous avons fait une promenade en bateau. <span data-s="c">Il faisait un peu froid, mais le paysage était très beau.</span> <span data-s="d">Le soir, nous avons aussi écouté un concert gratuit avant de retourner à l'hôtel.</span> Dimanche, nous avons pris notre petit déjeuner dans l'hôtel et nous sommes allés au musée. <span data-s="e">J'ai surtout aimé les anciennes photos de la ville.</span> Nous sommes rentrés à Bruxelles vers 18 heures. Le voyage était court, mais nous avons bien profité du week-end. <span data-s="f">La prochaine fois, j'aimerais rester deux jours de plus.</span> Tu pourrais venir avec nous !</p>
<p>À bientôt,<br>Marc</p>` }
      ],
      questions: [
        { doc: "d1", s: "a", q: "Avec qui Marc est-il parti à Dinant ?", choix: ["Avec un ami.","Avec son frère.","Avec sa famille."], r: 1, p: 1,
          e: "Marc écrit : « je suis parti en train avec mon frère »." },
        { doc: "d1", s: "b", q: "Qu'a fait Marc après avoir visité la citadelle ?", choix: ["Il est allé au musée.","Il a pris le train.","Il a mangé dans un restaurant."], r: 2, p: 1,
          e: "« Nous avons visité la citadelle, puis nous avons mangé dans un petit restaurant. » Le musée, c'était le dimanche." },
        { doc: "d1", s: "c", q: "Comment était le temps pendant la promenade en bateau ?", choix: ["Il faisait un peu froid.","Il faisait très chaud.","Il pleuvait beaucoup."], r: 0, p: 1,
          e: "Pendant la promenade, « il faisait un peu froid »." },
        { doc: "d1", s: "d", q: "Qu'est-ce que Marc a fait samedi soir ?", choix: ["Il a visité une exposition.","Il a assisté à un concert.","Il a pris le bateau."], r: 1, p: 1,
          e: "« Le soir, nous avons aussi écouté un concert gratuit. » Le bateau, c'était l'après-midi." },
        { doc: "d1", s: "e", q: "Qu'est-ce que Marc a particulièrement apprécié au musée ?", choix: ["Les tableaux modernes.","Les objets anciens.","Les vieilles photos de la ville."], r: 2, p: 1,
          e: "« J'ai surtout aimé les anciennes photos de la ville » : ce sont de vieilles photos." },
        { doc: "d1", s: "f", q: "Que voudrait faire Marc lors d'un prochain voyage ?", choix: ["Rester plus longtemps.","Voyager seul.","Changer d'hôtel."], r: 0, p: 1,
          e: "« La prochaine fois, j'aimerais rester deux jours de plus » : il veut rester plus longtemps." }
      ]
    },

    // ---------------------------------------------------------------
    {
      titre: "Exercice 3",
      points: 6,
      consigne: "Lisez ces deux documents et répondez aux questions.",
      documents: [
        { id: "d1", html: `<h3>Document 1 – Musée des Sciences</h3>
<p><span data-s="a">Pour visiter le musée des Sciences, vous devez réserver votre billet sur Internet avant votre arrivée.</span> <span data-s="b">Le musée est ouvert du mardi au dimanche, de 10 h à 18 h.</span> Le lundi, il est fermé. Présentez votre billet sur votre téléphone à l'entrée. <span data-s="c">Les sacs à dos sont interdits dans les salles, mais vous pouvez les laisser gratuitement au vestiaire.</span> La dernière entrée est à 17 h 15. Les enfants de moins de douze ans doivent être accompagnés d'un adulte.</p>` },
        { id: "d2", html: `<h3>Document 2 – Information voyageurs</h3>
<p><span data-s="a">Attention ! Le train pour Namur partira exceptionnellement du quai 4 aujourd'hui.</span> Le départ est prévu à 16 h 20. En raison de travaux, le train s'arrêtera seulement à Gembloux et Namur. <span data-s="b">Les voyageurs qui vont à Ottignies doivent prendre le train de 16 h 05.</span> <span data-s="c">Pour les personnes qui ont besoin d'aide avec leurs bagages, un agent est disponible près de l'escalier principal.</span> Merci de vérifier votre billet avant de monter dans le train.</p>` }
      ],
      questions: [
        { doc: "d1", s: "a", q: "Comment faut-il réserver son entrée au musée ?", choix: ["Sur Internet.","À l'entrée du musée.","Par téléphone."], r: 0, p: 0.5,
          e: "Il faut « réserver [son] billet sur Internet avant [son] arrivée ». Le téléphone sert seulement à montrer le billet à l'entrée." },
        { doc: "d1", s: "b", q: "À quelle heure le musée ferme-t-il ?", choix: ["À 17 h 15.","À 18 h.","À 19 h."], r: 1, p: 2,
          e: "Le musée est ouvert « de 10 h à 18 h ». 17 h 15, c'est l'heure de la dernière entrée, pas de la fermeture." },
        { doc: "d1", s: "c", q: "Où peut-on laisser son sac à dos ?", choix: ["Dans la salle d'exposition.","À l'entrée du musée.","Au vestiaire."], r: 2, p: 0.5,
          e: "Les sacs à dos sont interdits dans les salles, « mais vous pouvez les laisser gratuitement au vestiaire »." },
        { doc: "d2", s: "a", q: "De quel quai part exceptionnellement le train pour Namur ?", choix: ["Du quai 2.","Du quai 4.","Du quai 6."], r: 1, p: 1,
          e: "« Le train pour Namur partira exceptionnellement du quai 4 aujourd'hui. »" },
        { doc: "d2", s: "b", q: "Que doivent faire les voyageurs qui vont à Ottignies ?", choix: ["Prendre le train de 16 h 05.","Descendre à Gembloux.","Attendre le train de 16 h 20."], r: 0, p: 1,
          e: "Ils « doivent prendre le train de 16 h 05 ». Le train de 16 h 20 s'arrête seulement à Gembloux et Namur." },
        { doc: "d2", s: "c", q: "Où peut-on trouver un agent pour aider avec les bagages ?", choix: ["Dans le train de 16 h 20.","À côté du quai 4.","Près de l'escalier principal."], r: 2, p: 1,
          e: "« Un agent est disponible près de l'escalier principal. »" }
      ]
    },

    // ---------------------------------------------------------------
    {
      titre: "Exercice 4",
      points: 7,
      consigne: "Vous lisez cet article dans un journal. Répondez aux questions.",
      documents: [
        { id: "d1", html: `<h3>Une cantine contre le gaspillage</h3>
<p><span data-s="a">Depuis septembre, la cantine du collège Jean-Moulin a changé son organisation pour jeter moins de nourriture.</span> <span data-s="b">Avant le repas, les élèves choisissent entre une petite et une grande portion.</span> Ils peuvent aussi demander seulement une partie des légumes. <span data-s="c">À la fin du déjeuner, les aliments encore emballés sont gardés pour le lendemain.</span></p>
<p><span data-s="d">Le collège a également installé une balance pour mesurer chaque jour la quantité de nourriture jetée.</span> Après deux mois, le résultat est encourageant : les élèves jettent beaucoup moins qu'avant. <span data-s="e">La directrice veut maintenant expliquer cette expérience aux familles.</span> Elle espère que les élèves feront aussi attention au gaspillage à la maison. Au printemps, le collège prévoit une journée spéciale avec des recettes simples pour utiliser les restes.</p>` }
      ],
      questions: [
        { doc: "d1", s: "a", q: "Pourquoi la cantine a-t-elle changé son organisation ?", choix: ["Pour proposer de nouveaux repas.","Pour réduire la quantité de nourriture jetée.","Pour faire manger les élèves plus rapidement."], r: 1, p: 1,
          e: "La cantine a changé son organisation « pour jeter moins de nourriture »." },
        { doc: "d1", s: "b", q: "Que peuvent choisir les élèves avant de manger ?", choix: ["La taille de leur portion.","Le jour de leur repas.","Le prix de leur repas."], r: 0, p: 1.5,
          e: "Les élèves choisissent « entre une petite et une grande portion » : c'est la taille de la portion." },
        { doc: "d1", s: "c", q: "Vrai ou faux ? Les aliments encore emballés peuvent être conservés pour le lendemain.", choix: ["Vrai","Faux"], r: 0, p: 1.5,
          e: "« Les aliments encore emballés sont gardés pour le lendemain. »" },
        { doc: "d1", s: "d", q: "Que mesure la balance installée au collège ?", choix: ["Le nombre d'élèves à la cantine.","La quantité de nourriture préparée.","La quantité de nourriture jetée."], r: 2, p: 1.5,
          e: "La balance sert à « mesurer chaque jour la quantité de nourriture jetée »." },
        { doc: "d1", s: "e", q: "Que veut faire la directrice maintenant ?", choix: ["Présenter cette expérience aux familles.","Fermer la cantine au printemps.","Supprimer les petites portions."], r: 0, p: 1.5,
          e: "« La directrice veut maintenant expliquer cette expérience aux familles. »" }
      ]
    }
  ]
};
