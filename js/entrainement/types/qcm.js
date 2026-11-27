// Type « qcm » : choisir une réponse parmi plusieurs.
// Données : { type: "qcm", question, choix: [...], r: numéro de la bonne réponse (0 = la première), e }
Entr.ajouterType("qcm", {
  consigne: { fr: "Choisissez la bonne réponse.", en: "Choose the correct answer.", zh: "请选择正确答案。", vi: "Chọn đáp án đúng." },
  afficher: function (item, zone, nom) {
    var lettres = "ABCDEFGH";
    zone.innerHTML = '<div class="choix">' + item.choix.map(function (c, j) {
      return '<label><input type="radio" name="' + nom + '" value="' + j + '"> ' +
        (item.choix.length > 2 ? lettres[j] + ". " : "") + Entr.esc(c) + "</label>";
    }).join("") + "</div>";
    return {
      verifier: function () {
        var v = zone.querySelector("input:checked");
        if (!v) return null;
        var labels = zone.querySelectorAll("label");
        labels[item.r].classList.add("good");
        if (+v.value !== item.r) labels[+v.value].classList.add("bad");
        zone.querySelectorAll("input").forEach(function (i) { i.disabled = true; });
        return { juste: +v.value === item.r, bonne: item.choix[item.r] };
      }
    };
  }
});
