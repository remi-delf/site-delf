// Type « saisie » : taper une réponse courte.
// Données : { type: "saisie", question, reponses: ["réponse", "autre réponse acceptée"], e }
// Accents tolérés, sauf si la série (ou l'exercice) indique accents: true.
Entr.ajouterType("saisie", {
  consigne: { fr: "Écrivez la réponse.", en: "Write the answer.", zh: "请写出答案。", vi: "Viết câu trả lời." },
  afficher: function (item, zone, nom, accents) {
    zone.innerHTML = '<p class="saisie"><input type="text" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Votre réponse"></p>';
    var champ = zone.querySelector("input");
    return {
      verifier: function () {
        if (!champ.value.trim()) return null;
        var ok = Entr.egal(champ.value, item.reponses, accents);
        champ.classList.add(ok ? "juste" : "faux");
        champ.disabled = true;
        return { juste: ok, bonne: item.reponses[0] };
      }
    };
  }
});
