var added;

function addUp(num) {
	added += num;
	$("#added-up").text(added);
};


$("#shape-0").click(function() {
	addUp(shapeOneVal);
});