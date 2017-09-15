// $(document).ready(function(){
//   $("#add-new-picture-button").click(() =>
//     $("#new-image").show()
//   )
// })


function pictureModel() {
  var addNewPictureButton = document.getElementById("add-new-picture-button")
  var newImageModel = document.getElementById("new-image")

  function showPictureModelAndTriggerSumbitPicture() {
    newImageModel.style.display = 'block'
    submitPicture()
  }

  addNewPictureButton.addEventListener("click", showPictureModelAndTriggerSumbitPicture)
  submitPicture
}

function submitPicture() {

  var imgInfo = [["http://cdn.skim.gs/images/homer-simpson-doughnuts/what-homer-simpson-taught-us-about-doughnuts", "doh"]]
  var submitPictureClick = document.getElementById("new-image-submit-button")

  submitPictureClick.addEventListener("click", storeImgInfo)
  // submitPictureClick.addEventListener("click", () => )
}

function diplayPictures() {


}

function getCaptionInfo() {
  return document.getElementById("caption").value;
}

function getImgInfo() {
  return document.getElementById("image-url").value;
}

function combineTheTwo() {
  return [getImgInfo(), getCaptionInfo()]
}

function storeImgInfo(event) {
  event.preventDefault()
  var imgInfo = []

  imgInfo.push(combineTheTwo())
  debugger
}

pictureModel()
