function hideDiv(toHide){
	var elems = document.getElementsByClassName("defaultshow");
	for (var i = 0; i<elems.length; i++)
	{
			elems[i].style.display = "none";
	}
	document.getElementById(toHide).style.display = "block";
}