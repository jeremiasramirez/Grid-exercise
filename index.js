let callGrid = ()=>{
let rangeRow= document.getElementById("rangerow");
let rangeColumn= document.getElementById("rangecolumn");
let contentItem = document.getElementById("content__item");
let textrow = document.getElementById("rowtext");
let columntext = document.getElementById("columntext");
let item = contentItem.querySelectorAll(".item__grid");

rangeRow.addEventListener("change", (e)=>{
	if(e.target.value >= 5){
		contentItem.style.gridRowGap = e.target.value+'px';
		textrow.textContent ="Row " + e.target.value;
		for(let i=0;i<item.length; i++){
			item[i].classList.toggle("scalade");
		}
		
	}


}, false);

rangeColumn.addEventListener("change", (e)=>{
	if(e.target.value >= 5){
		contentItem.style.gridColumnGap = e.target.value+'px';
		columntext.textContent ="Column " + e.target.value;
		for(let i=0;i<item.length; i++){
			item[i].classList.toggle("scalade");
		}
	}
	 
}, false);

}
callGrid();
