// $(document).ready(function(){
//   $("#add-new-picture-button").click(() =>
//     $("#new-image").show()
//   )
// })

var imgInfo = []
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

  submitPictureClick.addEventListener("click", diplayPictures)
}

function diplayPictures() {
  var newImageModel = document.getElementById("new-image")
  newImageModel.style.display = 'none'

  var imagesContainer = document.getElementById("images-container")
  storeImgInfo()

  imagesContainer.innerHTML = imgInfo.map(info =>
    `<div>
      <h1>
        ${info[1]}
      </h1>
         <img src=${info[0]} alt="Mountain View" style="width:304px;height:228px;">
    </div>`
  )
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

function storeImgInfo() {
  event.preventDefault()

  imgInfo.push(combineTheTwo())
}

pictureModel()
