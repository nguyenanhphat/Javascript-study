const ul = document.querySelector("ul");

ul.addEventListener("click", event => {
  //   console.log("event----:", event.currentTarget);
  //   console.log("event----:", event.target);
  //   event.target.classList.toggle("hightlight");
  event.target.closest("li").classList.toggle("hightlight");
});
