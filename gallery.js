/*Name this external file gallery.js*/

function upDate(previewPic){
    var imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.innerElement = previewPic.alt;
     }
   
function unDo(){
      var imageDiv = document.getElementById("image");
      imageDiv.style.backgroundImage = "url('')";
      imageDiv.innerHTML = "Hover over an image below to display here";
       }