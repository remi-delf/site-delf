// DELF A2 – Compréhension des écrits – Sujet 9
// Textes originaux (proposés avec l'aide de l'IA, validés par Rémi).
// Exercice 1 remplacé par Rémi (fête des voisins, surf, patinoire, baby-sitting, natation, kermesse).
// Présentation du site : annonces numérotées 1 à 6 (A à F dans le document),
// personnes A à H dans le même ordre. Points de l'exercice 1 par annonce.
// Ne jamais copier les vrais sujets.
//
// Même rangement que ecrits_01.js :
// - <span data-s="a">…</span> = phrase surlignée à la correction (question : s:"a") ;
// - doc:"d1" = document où se trouve la réponse ;
// - choix = réponses proposées, r = numéro de la bonne réponse (0 = la première),
//   p = points, e = explication.

window.SUJET = {
  numero: 9,
  exercices: [

    // ---------------------------------------------------------------
    {
      titre: "Exercice 1",
      points: 6,
      consigne: "Vous lisez ces annonces dans le journal de votre quartier. Ces personnes cherchent une activité, un service ou un travail. Pour chaque annonce, choisissez la personne qui correspond. Attention : deux personnes ne correspondent à aucune annonce.",
      intro: `<h3>Les personnes</h3>
<ul class="personnes">
<li><b>A. Pascal</b> travaille le soir du mardi au jeudi. Il cherche quelqu'un pour garder sa fille de quatre ans. Il peut payer huit euros de l'heure.</li>
<li><b>B. Étienne</b> aimerait apprendre à danser le jeudi soir. Il peut payer vingt euros par mois.</li>
<li><b>C. Océane</b> habite rue des Roses. Elle voudrait rencontrer ses voisins vendredi soir et peut apporter un gâteau.</li>
<li><b>D. Kévin</b> a quinze ans. Il voudrait faire du surf samedi matin et peut payer trente euros.</li>
<li><b>E. Delphine</b> cherche une personne pour promener son chien le soir. Elle peut payer cinq euros par promenade.</li>
<li><b>F. Laure</b> est adulte et ne sait pas nager. Elle cherche un cours le lundi soir et peut payer vingt euros par mois.</li>
<li><b>G. Samuel</b> cherche une sortie gratuite pour sa famille samedi après-midi. Ses enfants aiment les jeux.</li>
<li><b>H. Nathalie</b> veut emmener son fils de neuf ans à la patinoire mercredi. Elle cherche un prix réduit.</li>
</ul>`,
      choixCompacts: true,
      documents: [
        { id: "d1", html: `<h3>Annonce 1 – Fête des voisins</h3>
<p><span data-s="a">Les habitants de la rue des Roses organisent une fête des voisins. Rendez-vous vendredi soir dans la salle des fêtes. Chaque famille apporte un plat ou un gâteau à partager.</span> L'entrée est gratuite.</p>` },
        { id: "d2", html: `<h3>Annonce 2 – École de surf</h3>
<p><span data-s="a">L'école de surf de la plage propose une première leçon samedi matin pour les jeunes de quatorze ans et plus. Le prix est de trente euros.</span> Les cours ont lieu au bord de la mer, avec un moniteur.</p>` },
        { id: "d3", html: `<h3>Annonce 3 – Patinoire</h3>
<p><span data-s="a">La patinoire de la ville propose un tarif réduit tous les mercredis aux enfants de moins de douze ans : six euros au lieu de dix euros.</span> Elle est ouverte toute la journée.</p>` },
        { id: "d4", html: `<h3>Annonce 4 – Baby-sitting</h3>
<p><span data-s="a">Étudiante sérieuse, je garde vos enfants le soir, du lundi au jeudi. Je prends huit euros de l'heure. J'accepte les enfants de trois à dix ans.</span> Contactez-moi par message.</p>` },
        { id: "d5", html: `<h3>Annonce 5 – Cours de natation</h3>
<p><span data-s="a">La piscine du centre-ville ouvre un cours de natation pour adultes débutants, tous les lundis soir. Le prix est de vingt euros par mois.</span> L'inscription se fait à l'accueil de la piscine.</p>` },
        { id: "d6", html: `<h3>Annonce 6 – Kermesse</h3>
<p><span data-s="a">La kermesse de l'école aura lieu samedi après-midi dans la cour. Il y aura des jeux, des boissons et de la musique pour toute la famille. L'entrée est gratuite.</span></p>` }
      ],
      questions: [
        { doc: "d1", s: "a", q: "L'annonce 1 correspond à…", choix: ["Pascal","Étienne","Océane","Kévin","Delphine","Laure","Samuel","Nathalie"], r: 2, p: 1.5,
          e: "Océane habite rue des Roses et veut rencontrer ses voisins vendredi soir avec un gâteau : c'est la fête des voisins de « la rue des Roses », « vendredi soir », où chacun apporte « un plat ou un gâteau »." },
        { doc: "d2", s: "a", q: "L'annonce 2 correspond à…", choix: ["Pascal","Étienne","Océane","Kévin","Delphine","Laure","Samuel","Nathalie"], r: 3, p: 1.5,
          e: "Kévin, 15 ans, veut faire du surf samedi matin pour trente euros : la leçon a lieu « samedi matin », pour les jeunes « de quatorze ans et plus », à « trente euros »." },
        { doc: "d3", s: "a", q: "L'annonce 3 correspond à…", choix: ["Pascal","Étienne","Océane","Kévin","Delphine","Laure","Samuel","Nathalie"], r: 7, p: 0.5,
          e: "Nathalie veut emmener son fils de neuf ans à la patinoire mercredi, à prix réduit : le tarif réduit est « tous les mercredis », pour les enfants « de moins de douze ans »." },
        { doc: "d4", s: "a", q: "L'annonce 4 correspond à…", choix: ["Pascal","Étienne","Océane","Kévin","Delphine","Laure","Samuel","Nathalie"], r: 0, p: 1,
          e: "Pascal travaille le soir du mardi au jeudi et cherche quelqu'un pour sa fille de quatre ans, à huit euros de l'heure : l'étudiante garde les enfants « le soir, du lundi au jeudi », « de trois à dix ans », pour « huit euros de l'heure »." },
        { doc: "d5", s: "a", q: "L'annonce 5 correspond à…", choix: ["Pascal","Étienne","Océane","Kévin","Delphine","Laure","Samuel","Nathalie"], r: 5, p: 1,
          e: "Laure est adulte, ne sait pas nager et cherche un cours le lundi soir pour vingt euros par mois : le cours est « pour adultes débutants », « tous les lundis soir », à « vingt euros par mois ». Attention : Étienne peut aussi payer vingt euros par mois, mais il veut danser le jeudi." },
        { doc: "d6", s: "a", q: "L'annonce 6 correspond à…", choix: ["Pascal","Étienne","Océane","Kévin","Delphine","Laure","Samuel","Nathalie"], r: 6, p: 0.5,
          e: "Samuel cherche une sortie gratuite en famille samedi après-midi, avec des jeux : la kermesse a lieu « samedi après-midi », avec « des jeux », et « l'entrée est gratuite »." }
      ]
    },


    // ---------------------------------------------------------------
    {
      titre: "Exercice 2",
      points: 6,
      consigne: "Vous recevez ce message d'un ami. Lisez-le et répondez aux questions.",
      documents: [
        { id: "d1", html: `<p>Salut Basile,</p>
<p>Je voulais te raconter mon entretien pour le poste de vendeur dans un magasin de décoration. <span data-s="a">L'entretien avait lieu mardi matin, à 9 h 30.</span> <span data-s="b">Je suis arrivé quinze minutes avant et j'ai attendu dans une petite salle avec deux autres candidats.</span> <span data-s="c">La responsable m'a d'abord demandé de parler de mon expérience.</span> Ensuite, elle m'a posé des questions sur mes horaires possibles et sur mes qualités. <span data-s="d">J'ai expliqué que je pouvais travailler le samedi, mais pas le mercredi matin.</span> <span data-s="e">Elle m'a aussi demandé de faire un petit exercice avec un client imaginaire.</span> J'étais un peu stressé au début, puis je me suis senti plus à l'aise. <span data-s="f">À la fin, elle m'a dit que j'aurais une réponse vendredi.</span> Le magasin est assez grand et l'équipe semble jeune et sympathique. J'espère vraiment obtenir ce travail !</p>
<p>À bientôt,<br>Nassim</p>` }
      ],
      questions: [
        { doc: "d1", s: "a", q: "À quelle heure a lieu l'entretien de Nassim ?", choix: ["À 8 h 30.","À 9 h 30.","À 10 h 15."], r: 1, p: 1,
          e: "« L'entretien avait lieu mardi matin, à 9 h 30. »" },
        { doc: "d1", s: "b", q: "Combien de temps avant l'entretien Nassim arrive-t-il ?", choix: ["Un quart d'heure avant.","Une demi-heure avant.","Cinq minutes avant."], r: 0, p: 1,
          e: "Il est arrivé « quinze minutes avant » : quinze minutes, c'est un quart d'heure." },
        { doc: "d1", s: "c", q: "Quelle est la première chose demandée par la responsable ?", choix: ["Ses horaires de travail.","Ses qualités personnelles.","Son expérience professionnelle."], r: 2, p: 1,
          e: "« La responsable m'a d'abord demandé de parler de mon expérience. » Les horaires et les qualités, c'est ensuite." },
        { doc: "d1", s: "d", q: "Quel jour Nassim peut-il travailler ?", choix: ["Le mercredi matin.","Le samedi.","Le vendredi seulement."], r: 1, p: 1,
          e: "« Je pouvais travailler le samedi, mais pas le mercredi matin. »" },
        { doc: "d1", s: "e", q: "Que doit faire Nassim pendant l'entretien ?", choix: ["S'entraîner avec un client imaginaire.","Présenter le magasin.","Préparer une commande."], r: 0, p: 1,
          e: "La responsable lui a demandé « de faire un petit exercice avec un client imaginaire »." },
        { doc: "d1", s: "f", q: "Quand Nassim doit-il recevoir une réponse ?", choix: ["Jeudi.","Vendredi.","La semaine suivante."], r: 1, p: 1,
          e: "« Elle m'a dit que j'aurais une réponse vendredi. »" }
      ]
    },

    // ---------------------------------------------------------------
    {
      titre: "Exercice 3",
      points: 6,
      consigne: "Lisez ces deux documents et répondez aux questions.",
      documents: [
        { id: "d1", html: `<h3>Document 1 – Clés perdues</h3>
<p><span data-s="a">Samedi après-midi, une personne a perdu un trousseau de trois clés dans le parc des Tilleuls.</span> <span data-s="b">Elles étaient attachées à un porte-clés rouge en forme de cœur.</span> <span data-s="c">La personne pense les avoir oubliées près de la fontaine, vers 16 heures.</span> Si vous les avez trouvées, merci de les déposer dans la petite boutique située à l'entrée du parc. Elle est ouverte tous les jours jusqu'à 18 heures. Une récompense sera offerte.</p>` },
        { id: "d2", html: `<h3>Document 2 – Objets trouvés</h3>
<p><span data-s="a">Dans notre centre culturel, les objets trouvés sont conservés à l'accueil pendant trente jours.</span> <span data-s="b">Pour récupérer un objet, il faut venir personnellement et décrire précisément ce que l'on a perdu.</span> Les sacs et les objets de valeur sont placés dans une armoire fermée. L'accueil est ouvert du mardi au samedi, de 9 h à 18 h. Le dimanche, il est fermé. <span data-s="c">Après trente jours, les objets non réclamés sont donnés à une association locale.</span></p>` }
      ],
      questions: [
        { doc: "d1", s: "a", q: "Combien de clés la personne a-t-elle perdues ?", choix: ["Deux.","Quatre.","Trois."], r: 2, p: 0.5,
          e: "Elle a perdu « un trousseau de trois clés »." },
        { doc: "d1", s: "b", q: "À quoi ressemble le porte-clés ?", choix: ["À un cœur rouge.","À une petite voiture rouge.","À une étoile bleue."], r: 0, p: 2,
          e: "C'est « un porte-clés rouge en forme de cœur »." },
        { doc: "d1", s: "c", q: "Où la personne pense-t-elle avoir perdu ses clés ?", choix: ["Près de l'entrée du parc.","À côté d'un banc.","Près de la fontaine."], r: 2, p: 0.5,
          e: "Elle pense les avoir oubliées « près de la fontaine ». L'entrée du parc, c'est là où il faut déposer les clés." },
        { doc: "d2", s: "a", q: "Pendant combien de temps les objets trouvés sont-ils gardés au centre culturel ?", choix: ["Deux semaines.","Un mois.","Deux mois."], r: 1, p: 1,
          e: "Ils sont conservés « pendant trente jours » : c'est environ un mois." },
        { doc: "d2", s: "b", q: "Que faut-il faire pour récupérer un objet ?", choix: ["Envoyer un message avec une photo.","Demander à un ami de venir.","Se présenter et expliquer ce que l'on a perdu."], r: 2, p: 1,
          e: "Il faut « venir personnellement et décrire précisément ce que l'on a perdu »." },
        { doc: "d2", s: "c", q: "Que deviennent les objets qui ne sont pas réclamés ?", choix: ["Ils sont remis à une association.","Ils sont vendus à l'accueil.","Ils sont conservés pendant un an."], r: 0, p: 1,
          e: "« Les objets non réclamés sont donnés à une association locale. »" }
      ]
    },

    // ---------------------------------------------------------------
    {
      titre: "Exercice 4",
      points: 7,
      consigne: "Vous lisez cet article dans un journal. Répondez aux questions.",
      documents: [
        { id: "d1", html: `<h3>Un immeuble utilise moins d'eau</h3>
<p>Dans un immeuble de Namur, les habitants ont participé pendant un mois à un défi pour utiliser moins d'eau. <span data-s="a">L'idée est venue du gardien, qui a remarqué une forte consommation dans le bâtiment.</span> Chaque famille a reçu une petite fiche avec des conseils simples. <span data-s="b">Par exemple, il était conseillé de fermer le robinet pendant qu'on se brosse les dents et de prendre des douches plus courtes.</span> Les habitants pouvaient aussi récupérer l'eau froide qui coule avant que l'eau chaude arrive, puis l'utiliser pour nettoyer leur logement. <span data-s="c">Après quatre semaines, la consommation totale avait diminué de 18 %.</span> Les familles ont été surprises par ce résultat. Beaucoup ont décidé de garder ces nouvelles habitudes. <span data-s="e">Le gardien souhaite maintenant proposer le même défi dans d'autres immeubles de la ville.</span></p>` }
      ],
      questions: [
        { doc: "d1", s: "a", q: "Pourquoi le gardien a-t-il proposé ce défi ?", choix: ["Parce que les habitants demandaient une nouvelle activité.","Parce que l'eau était trop chère dans la ville.","Parce que l'immeuble consommait beaucoup d'eau."], r: 2, p: 1,
          e: "Le gardien « a remarqué une forte consommation dans le bâtiment »." },
        { doc: "d1", s: "b", q: "Quel conseil était donné aux habitants ?", choix: ["Prendre des douches plus rapides.","Faire couler davantage l'eau chaude.","Nettoyer leur logement chaque jour."], r: 0, p: 1.5,
          e: "Il était conseillé de « prendre des douches plus courtes », c'est-à-dire plus rapides." },
        { doc: "d1", s: "c", q: "Vrai ou faux ? Le défi a duré seulement deux semaines.", choix: ["Vrai","Faux"], r: 1, p: 1.5,
          e: "Le défi a duré « pendant un mois » : le résultat est donné « après quatre semaines »." },
        { doc: "d1", s: "c", q: "Quel a été le résultat après quatre semaines ?", choix: ["La consommation a augmenté de 18 %.","La consommation a baissé de 18 %.","La consommation est restée identique."], r: 1, p: 1.5,
          e: "« La consommation totale avait diminué de 18 %. » Diminuer, c'est baisser." },
        { doc: "d1", s: "e", q: "Que souhaite faire le gardien maintenant ?", choix: ["Arrêter définitivement le défi.","Organiser une réunion chaque semaine.","Proposer le même défi dans d'autres immeubles."], r: 2, p: 1.5,
          e: "« Le gardien souhaite maintenant proposer le même défi dans d'autres immeubles de la ville. »" }
      ]
    }
  ]
};
