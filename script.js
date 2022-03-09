// Function called while clicking add button
function add_item() {
  // Getting box and ul by selecting id;
  let item = document.getElementById("box");
  let list_item = document.getElementById("list_item");
  if (item.value != "") {
    // Creating element and adding value to it
    let make_li = document.createElement("LI");
    make_li.appendChild(document.createTextNode(item.value));

    // Adding li to ul
    list_item.appendChild(make_li);

    // Reset the value of box
    item.value = "";

    // Create a "close" button and append it to each list item
    let myNodelist = document.getElementsByTagName("LI");
    let i;
    for (i = 0; i < myNodelist.length; i++) {
      let span = document.createElement("SPAN");
      let txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      myNodelist[i].appendChild(span);
    }

    // Click on a close button to hide the current list item
    const close = document.getElementsByClassName("close");

    for (i = 0; i < close.length; i++) {
      close[i].onclick = function () {
        let div = this.parentElement;
        div.style.display = "none";
      };
    }

    // Add a "checked" symbol when clicking on a list item

    make_li.onclick = function () {
      this.classList.toggle("checked");
    };
  } else {
    // Alert msg when value of box is "" empty.
    alert("plz add a value to item");
  }
}
