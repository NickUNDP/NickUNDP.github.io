function changeClass(ID,oclass,otherclass){
	if (document.getElementById(ID).className===oclass){
		document.getElementById(ID).className=otherclass
	}
	else{
	document.getElementById(ID).className=oclass
	}
}