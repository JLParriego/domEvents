var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItem = document.querySelectorAll("li");
var btnDelete = document.getElementsByClassName("btnDeleteClass");



for(var i = 0; i < btnDelete.length; i++){
	// btnDelete[i].addEventListener("click", removeParent, false);
	console.log(btnDelete[i])
}


function removeParent(evt) {
  evt.target.removeEventListener("click", removeParent, false);
  evt.target.parentNode.remove();
}











function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	addButton(li);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


function addToogle(item){
	item.addEventListener("click", function(){
		item.classList.toggle("done")
	})
}

function addButton(item){
	var btn = document.createElement("button");
	btn.innerHTML = "Delete";
	btn.onclick = removeParent;
	btn.classList.add("btnDeleteClass")
	item.appendChild(btn);
}


function deleteListItem(item){
	console.log(item.parentElement)


}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
listItem.forEach(addToogle);
listItem.forEach(addButton);










