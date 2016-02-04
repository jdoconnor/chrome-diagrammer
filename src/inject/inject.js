function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

var list = document.getElementsByTagName("pre");
console.log(list);
for (var i = 0, len = list.length; i < len; i++) {
  if (list[i]['lang'] == 'flowchart') {
		diagram_text = list[i].querySelector("code").innerHTML;

		// create a div on the page to display the diagram
		newDiv = document.createElement("DIV");
		insertAfter(newDiv, list[1]);

		// draw the diagram
		var diagram = flowchart.parse(diagram_text);
		diagram.drawSVG(newDiv);
	}

	if (list[i]['lang'] == 'mermaid'){
		diagram_text = list[i].querySelector("code").innerHTML;

		// create a div on the page to hold the diagram_text
		newDiv = document.createElement("DIV");
		newDiv.setAttribute('class', 'mermaid');
		newDiv.innerHTML = diagram_text;
		insertAfter(newDiv, list[1]);

		mermaid.init({}, ".mermaid");
	}
}
