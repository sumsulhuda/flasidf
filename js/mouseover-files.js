const mouseHover = document.querySelectorAll(".my-card-items");
mouseHover.forEach(circle => {
  circle.addEventListener("mouseover", () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
      circle.style.backgroundColor = "#" + randomColor;
    });

  circle.addEventListener("mouseout", () => {
    circle.style.backgroundColor = "";
    });
});