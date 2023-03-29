// Settings tabs (on settings page) //
const opcijeStranice = document.querySelectorAll(".opcije-hamburger");
const podesavanjaSadrzaj = document.querySelectorAll(".podesavanja-sadrzaj");

opcijeStranice.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    podesavanjaSadrzaj.forEach((sadrzaj) => {
      sadrzaj.classList.remove("is-active");
    });

    opcijeStranice.forEach((tab) => {
      tab.classList.remove("is-active");
    });

    opcijeStranice[index].classList.add("is-active");
    podesavanjaSadrzaj[index].classList.add("is-active");
  });
});
