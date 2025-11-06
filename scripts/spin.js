
  const container = document.getElementById("circular-text");
  const text = "MOUSSA*SABBAR*";
  const letters = Array.from(text);
  const radius = 200 / 2 - 10; // size/2 - offset for font size

  letters.forEach((letter, i) => {
    const span = document.createElement("span");
    const angle = (360 / letters.length) * i;
    const transform = `rotate(${angle}deg) translate(${radius}px) rotate(90deg)`;
    span.style.transform = transform;
    span.textContent = letter;
    container.appendChild(span);
  });

