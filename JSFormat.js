function hideFunction(Identifier){
   if (document.querySelector("#SandH").textContent == "Show Password"){
     document.querySelector("#SandH").textContent = "Hide Password";
   }
  else{
    document.querySelector("#SandH").textContent = "Show Password";
  }
  
  var x = document.getElementsByClassName("Web" + Identifier);
  for (var i = 0; i <x.length; i++){
    if (x.item(i).getAttribute("hidden")){
      x.item(i).removeAttribute("hidden");
    }
    else{
      x.item(i).setAttribute("hidden", "hidden");
    }
  }
  


//   if (x.style.display === "none") {
    // x.style.display = "block";
//   } else {
    // x.style.display = "none";
//   }


}
function resetAllButtons(){
  for (var i = 1; i <=5; i++){
    if (localStorage.getItem("pw" + i.toString()) != null){
      document.getElementsByClassName("Web" + i.toString()).namedItem("Div").textContent = "Password: " + localStorage.getItem("pw" + i.toString());
    }
  }
}
resetAllButtons();
function ifButtonClicked(Identifier2){
  var x = document.getElementsByClassName("Web" + Identifier2);
  localStorage.setItem("pw" + Identifier2, x.namedItem("Text").value);
  x.namedItem("Div").textContent = "Password: " + localStorage.getItem("pw" + Identifier2);

  //for (var i = 0; i <x.length; i++){
  //  if (x.item(i).id == "Div"){
  //    x.item(i).textContent = "Password:" +
  //  }
  //  
  //}
    //document.getElementById("Div").textContent = "Password: " + document.querySelector("#TextOne").value;
}

// var timeChange = 1;
var currentTime = new Date().getHours();
  if (7 <= currentTime && currentTime < 20) {
      document.body.background = "day.jpg";
      var elements = document.querySelectorAll('[name="UniversalChange"]');
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor= 'Pink';
        elements[i].style.color= 'Black';
      }
      
      
      
      // document.body.background repeat: no-repeat;
        /* background-repeat: no-repeat; */
  /* background-size:cover; */
  }
  else {
      document.body.background = "night.jpg";
      var elements = document.querySelectorAll('[name="UniversalChange"]');
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor= 'rgb(84, 82, 82)';
        elements[i].style.color= 'White';
      }
    }


//let PWButton = document.getElementById("PWButton");
//PWButton.addEventListener("click", ifButtonClicked );

// function changeTime(){
//   timeChange *= -1;
// }