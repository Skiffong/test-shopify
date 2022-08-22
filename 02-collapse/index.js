document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".collapsible__button"),
    text = document.querySelector(".collapsible__content"),
    action = document.querySelectorAll(".collapsible__action");

  let visability = true,
    count = 0; //для первого запуска, чтобы избежать применения show для "показать содержимое"

  const hide = (el) => {
    el.animate(
      [
        { transform: "scaleY(1)", opacity: "1", display: "inline" },
        { transform: "scaleY(0)", opacity: "0", display: "none" },
      ],
      {
        duration: 1000,
        fill: "forwards",
      }
    );
    visability = false;
  };

  const show = (el) => {
    el.animate(
      [
        { transform: "scaleY(0)", opacity: "0", display: "none" },
        { transform: "scaleY(1)", opacity: "1", display: "inline" },
      ],
      {
        duration: 1000,
        fill: "forwards",
      }
    );
    visability = true;
  };

  btn.addEventListener("click", () => {
    if (visability) {
      if (count !== 0) {
        show(action[1]);
      }
      hide(text);
      hide(action[0]);
      count++;
    } else {
      hide(action[1]);
      show(text);
      show(action[0]);
      count++;
    }
  });
});
