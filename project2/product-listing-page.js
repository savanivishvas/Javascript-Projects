

function displaydrop() {
  var dropdownContent = document.querySelector(".ic-dropdown");
  var feature = document.querySelector("#f3")
  
  feature.addEventListener("click", function(event){
  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
  } else {
    dropdownContent.style.display = "block";
  }
});
}




