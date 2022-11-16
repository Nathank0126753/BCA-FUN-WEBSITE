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
function ifButtonClicked(Identifier2){
  var x = document.getElementsByClassName("Web" + Identifier2);
  x.namedItem("Div").textContent = "Password: " + x.namedItem("TextOne").value;
  //for (var i = 0; i <x.length; i++){
  //  if (x.item(i).id == "Div"){
  //    x.item(i).textContent = "Password:" +
  //  }
  //  
  //}
    //document.getElementById("Div").textContent = "Password: " + document.querySelector("#TextOne").value;
}
//let PWButton = document.getElementById("PWButton");
//PWButton.addEventListener("click", ifButtonClicked );