const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const paragraph = document.createElement("p");
paragraph.style.color = "red";
paragraph.textContent = "Hey I'm red!";

const subtitle = document.createElement("h3");
subtitle.style.color = "blue";
subtitle.textContent = "I'm a blue H3!";

const nested = document.createElement("div");
nested.setAttribute("style", "background-color: pink; border: 1px solid black");

const title = document.createElement("h1");
title.textContent = "I'm in a div!";

const par = document.createElement("p");
par.textContent = "ME TOO!";

container.appendChild(content);
container.appendChild(paragraph);
container.appendChild(subtitle);
nested.appendChild(title);
nested.appendChild(par);
container.appendChild(nested);
