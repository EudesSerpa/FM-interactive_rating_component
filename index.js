const $ = (selector) => document.querySelector(selector);

const rating_card = $("#rating-card");
const thanks_card = $("#thanks-card");

const showThanksCard = () => {
  rating_card.classList.add("hide");
  thanks_card.classList.add("show");
};

const hideThanksCard = () => {
  setTimeout(() => {
    rating_card.classList.remove("hide");
    thanks_card.classList.remove("show");
  }, 5000);
};

$(".form").addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const rating = formData.get("rating");

  if (!rating) return;

  showThanksCard();
  $("[data-rating-selected]").textContent = rating;
  hideThanksCard();

  e.target.reset();
});
