// Get element by id
// document.getElementById("id")
console.log(document.getElementById("main-header"));
let headerTitle = document.getElementById("main-header-title");
let header = document.getElementById("main-header");
headerTitle.innerHTML = "My List App"

// Get element by tag name
let li = document.getElementsByTagName("li");
li(2).style.backgroundColor = "tomato"
li(1).style.cssText = "background-color: navy; padding: 5px"