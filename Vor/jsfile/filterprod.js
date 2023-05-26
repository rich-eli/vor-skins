filterProduct("all")
function filterProduct(c){
    var filterInput, i;
    filterInput = document.getElementsByClassName("filter");
    if(c == "all"){
        c = "";
    } 

    for(i = 0;i < filterInput.length; i++){
        removeClass(filterInput[i],"show");
        if(filterInput[i].className.indexOf(c) > -1){
            addClass(filterInput[i],"show");
        } 
    }
}

function addClass(element,name){
    var i, str1, str2;
    str1 = element.className.split(" ");
    str2 = name.split(" ");
    for(i = 0; i < str2.length; i++){
        if(str1.indexOf(str2[i] == -1)){
            element.className += " " + str2[i];
        }
    }
}

function removeClass(element,name){
    var i, str1, str2;
  str1 = element.className.split(" ");
  str2 = name.split(" ");
  for (i = 0; i < str2.length; i++) {
    while (str1.indexOf(str2[i]) > -1) {
      str1.splice(str1.indexOf(str2[i]), 1);
    }
  }
  element.className = str1.join(" ");
}

var containerBtn = document.getElementById("container-btn");
var buttons = containerBtn.getElementsByClassName("btn");

for(var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click",function(){
        var curr = document.getElementsByClassName("ada");
        curr[0].className = curr[0].className.replace(" ada","");
        this.className += " ada";
    });
}