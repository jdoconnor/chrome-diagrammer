function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

var list = document.getElementsByTagName("pre");
console.log(list);
for (var i = 0, len = list.length; i < len; i++) {
  if (list[i]['lang'] == 'flowchart') {
		diagram_text = list[i].querySelector("code").innerHTML;
		diagram_text = diagram_text.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">");

		// create a div on the page to display the diagram
		newDiv = document.createElement("DIV");
		newDiv.setAttribute('id', 'flowchart_'+i);
		insertAfter(newDiv, list[i]);

		// draw the diagram
		var diagram = flowchart.parse(diagram_text);
		diagram.drawSVG('flowchart_'+i);
	}

	if (list[i]['lang'] == 'mermaid'){
		diagram_text = list[i].querySelector("code").innerHTML;

		// create a div on the page to hold the diagram_text
		newDiv = document.createElement("DIV");
		newDiv.setAttribute('class', 'mermaid');
		newDiv.innerHTML = diagram_text;
		insertAfter(newDiv, list[i]);

		mermaid.init({}, ".mermaid");
	}
}
