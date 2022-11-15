function hideFunction(){
   if (document.querySelector("#SandH").textContent == "Show Password"){
     document.querySelector("#SandH").textContent = "Hide Password";
   }
  else{
    document.querySelector("#SandH").textContent = "Show Password";
  }
  
  var x = document.querySelector("#Div");
  if (x.getAttribute("hidden")){
    x.removeAttribute("hidden");
  }
  else{
    x.setAttribute("hidden", "hidden");
  }

  var y = document.querySelector("#TextOne");
  if (y.getAttribute("hidden")){
    y.removeAttribute("hidden");
  }
  else{
    y.setAttribute("hidden", "hidden");
  }
  
  var z = document.querySelector("#PWButton");
  if (z.getAttribute("hidden")){
    z.removeAttribute("hidden");
  }
  else{
    z.setAttribute("hidden", "hidden");
  }
//   if (x.style.display === "none") {
    // x.style.display = "block";
//   } else {
    // x.style.display = "none";
//   }

  
}
function ifButtonClicked(){
    document.getElementById("Div").textContent = "Password: " + document.querySelector("#TextOne").value;
}
let PWButton = document.getElementById("PWButton");
PWButton.addEventListener("click", ifButtonClicked );