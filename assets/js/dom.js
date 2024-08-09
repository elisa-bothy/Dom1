const title = document.querySelector("title");
const li1 = document.getElementsByTagName("li")[0];
const li2 = document.getElementsByTagName("li")[1];
const a1 = li1.children[0];
const a2 = li2.children[0];

title.textContent = "Papa";
a1.textContent = `Papa est en bas`;
a2.textContent = "Qui fait du nougat";

a1.href = "#papa";
a2.href = "elsewhere#bas";
