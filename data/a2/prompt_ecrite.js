// Texte du prompt copié par l'élève pour la production écrite (validé par Rémi).
// Rémi peut le modifier ici librement.
// Remplacés automatiquement par la page :
//   {{SUJET1}} {{MOTS1}} {{TEXTE1}} {{SUJET2}} {{MOTS2}} {{TEXTE2}}
//   {{GRILLE}} = la grille de data/a2/grilles.js (en attente : tant qu'elle est vide,
//                une phrase demande à l'IA d'utiliser la grille officielle actuelle)
//   {{LANGUE}} = une phrase pour expliquer aussi les erreurs dans la langue
//                choisie sur l'accueil (vide si l'élève a choisi le français)

window.PROMPT_ECRITE = `Tu es correcteur du DELF A2 (épreuve de production écrite, format actuel de France Éducation international). Corrige et note ma copie comme un vrai correcteur.

Exercice 1 – Sujet : « {{SUJET1}} »
Mon texte ({{MOTS1}} mots) : « {{TEXTE1}} »

Exercice 2 – Sujet : « {{SUJET2}} »
Mon texte ({{MOTS2}} mots) : « {{TEXTE2}} »

Réponds en français simple, au niveau A2 :
1. Ma note pour chaque exercice et ma note totale sur 25, selon la grille officielle ci-dessous. Donne les points de chaque critère, avec une phrase qui explique chaque note.
2. Mes 3 points forts.
3. Mes erreurs : pour chacune, la phrase fausse, la phrase correcte et une explication très courte. Classe-les en grammaire, vocabulaire, orthographe et ponctuation.{{LANGUE}}
4. Mes deux textes corrigés en entier. Garde mes idées et mon niveau : ne les réécris pas comme un niveau B1 ou B2.
5. 3 conseils précis pour progresser.

Règles : si un texte a moins de 60 mots ou ne répond pas au sujet, dis-le et applique la grille comme à l'examen. Ne donne pas de note plus haute pour être gentil.

{{GRILLE}}`;
