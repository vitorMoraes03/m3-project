let counter = 0;

export function createBtnCounter(btnId: string): void {
  const btn = document.querySelectorAll(".btn-card");
  const cartCounter = document.querySelector(
    "#counter"
  ) as HTMLParagraphElement;

  btn.forEach((btn) => {
    if (btn.id === btnId) {
      btn.addEventListener("click", () => {
        console.log("oi");
        counter++;
        cartCounter.innerHTML = `${counter}`;
      });
    }
  });
}
