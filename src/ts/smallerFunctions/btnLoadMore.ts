import { isSmallScreen } from "./isSmallScreen";

export function addBtnLoadMore(): void {
  const btnLoadMore = document.querySelector("#btn-load-more");
  const allCards = document.querySelectorAll(".card-product");

  btnLoadMore?.addEventListener("click", () => {
    let anyHiddenCards = false;
    let lengthLimit;
    isSmallScreen() ? (lengthLimit = 4) : (lengthLimit = 6);
    for (let i = lengthLimit; i < allCards.length; i++) {
      const element = allCards[i];
      element.classList.toggle("hidden");
      if (element.classList.contains("hidden")) {
        anyHiddenCards = true;
      }
    }
    if (anyHiddenCards) {
      btnLoadMore.innerHTML = "Carregar mais";
    } else {
      btnLoadMore.innerHTML = "Carregar menos";
    }
  });
}
