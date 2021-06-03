
element.appendChild(para);
for (i = 0; i < 9; i++) {
    let row = document.createElement("p");
    var node = document.createTextNode("11 x" + (i + 1));
    para.appendChild(node);
    var element = document.getElementById("once");
    element.appendChild(para);
}