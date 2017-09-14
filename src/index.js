// $(document).ready(function(){
//   $("#add-new-picture-button").click(() =>
//     $("#new-image").show()
//   )
// })

var addNewPictureButton = document.getElementById("add-new-picture-button")
var newImageModel = document.getElementById("new-image")

addNewPictureButton.addEventListener("click", () => newImageModel.style.display = 'block')
