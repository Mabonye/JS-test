const main = document.querySelector("main");
const button = document.createElement("button");
button.textContent = "Click me!";

main.appendChild(button);

button.addEventListener("click",addHtmlElement)

function addHtmlElement(){
    const heading1 = document.createElement("h1");
    heading1.innerHTML = "Javascript test";
    const body = document.querySelector("body");
    body.style.backgroundColor = "yellow";
    button.disabled = true;
    
    main.append(heading1);
}