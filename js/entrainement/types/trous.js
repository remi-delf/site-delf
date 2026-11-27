// Type « trous » : compléter une phrase.
// Données : { type: "trous", texte: "Il ___ trois enfants.", reponses: [["a"]], e }
// Chaque « ___ » devient une case ; reponses donne, pour chaque case, les réponses acceptées.
Entr.ajouterType("trous", {
  consigne: { fr: "Complétez la phrase.", en: "Complete the sentence.", zh: "请补全句子。", vi: "Hoàn thành câu." },
  afficher: function (item, zone, nom, accents) {
    var morceaux = item.texte.split("___");
    zone.innerHTML = '<p class="trous">' + morceaux.map(function (m, i) {
      return Entr.esc(m) + (i < morceaux.length - 1
        ? '<input type="text" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Case ' + (i + 1) + '">' : "");
    }).join("") + "</p>";
    var cases = zone.querySelectorAll("input");
    return {
      verifier: function () {
        for (var i = 0; i < cases.length; i++) if (!cases[i].value.trim()) return null;
        var juste = true;
        cases.forEach(function (c, i) {
          var ok = Entr.egal(c.value, item.reponses[i] || [], accents);
          c.classList.add(ok ? "juste" : "faux");
          c.disabled = true;
          if (!ok) juste = false;
        });
        var bonne = morceaux.map(function (m, i) { return m + (i < morceaux.length - 1 ? (item.reponses[i] || [""])[0] : ""); }).join("");
        return { juste: juste, bonne: bonne };
      }
    };
  }
});
