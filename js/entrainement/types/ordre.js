// Type « ordre » : remettre des mots dans l'ordre en les touchant.
// Données : { type: "ordre", mots: [...], solution: "Phrase attendue", autres: ["autre ordre accepté"], e }
Entr.ajouterType("ordre", {
  consigne: { fr: "Touchez les mots pour remettre la phrase dans l'ordre.", en: "Tap the words to put the sentence in order.", zh: "点击单词，把句子排成正确的顺序。", vi: "Chạm vào các từ để sắp xếp câu theo đúng thứ tự." },
  afficher: function (item, zone) {
    // Mélange les mots (sans retomber sur l'ordre de la solution).
    var mots = item.mots.slice();
    for (var essai = 0; essai < 10; essai++) {
      for (var i = mots.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = mots[i]; mots[i] = mots[j]; mots[j] = t; }
      if (mots.join(" ") !== item.solution) break;
    }
    zone.innerHTML = '<div class="ordre-phrase" aria-live="polite"></div><div class="ordre-mots"></div>' +
      '<div class="actions"><button type="button" class="effacer secondaire">' + Entr.bilingue("effacer") + "</button></div>";
    var phrase = zone.querySelector(".ordre-phrase"), banque = zone.querySelector(".ordre-mots"), fini = false;
    mots.forEach(function (m) {
      var b = document.createElement("button");
      b.type = "button"; b.className = "mot"; b.textContent = m;
      b.addEventListener("click", function () {
        if (fini) return;
        (b.parentNode === banque ? phrase : banque).appendChild(b);
      });
      banque.appendChild(b);
    });
    zone.querySelector(".effacer").addEventListener("click", function () {
      if (fini) return;
      Array.prototype.slice.call(phrase.children).forEach(function (b) { banque.appendChild(b); });
    });
    return {
      verifier: function () {
        if (banque.children.length) return null;
        var texte = Array.prototype.map.call(phrase.children, function (b) { return b.textContent; }).join(" ");
        fini = true;
        zone.querySelectorAll("button").forEach(function (b) { b.disabled = true; });
        return { juste: Entr.egal(texte, [item.solution].concat(item.autres || []), true), bonne: item.solution };
      }
    };
  }
});
