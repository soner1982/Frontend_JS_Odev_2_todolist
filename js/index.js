let listItem = document.getElementsByTagName('li');

for (let i = 0; i < listItem.length; i++) {
    let itemEnd = document.createElement("span");
    let xSign = document.createTextNode("\u00D7");
    itemEnd.className = "delete";
    itemEnd.appendChild(xSign);
    listItem[i].appendChild(itemEnd);
    
}

let close = document.getElementsByClassName("delete");

for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(okay) {
  if (okay.target.tagName === 'LI') {
    okay.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("task").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    $(".error").toast("show");
  } else {
    document.getElementById("list").appendChild(li);
    $(".success").toast("show");
    localStorage.setItem('Schedule',inputValue)
  }
  document.getElementById("task").value = "";

  let itemEnd = document.createElement("span");
  let xSign = document.createTextNode("\u00D7");
  itemEnd.className = "delete";
  itemEnd.appendChild(xSign);
  li.appendChild(itemEnd);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}









