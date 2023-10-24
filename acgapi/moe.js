//img监控
function refreshImage(imgElement) {
  var src = imgElement.src;
  var newSrc = src + "?time=" + Date.now();
  imgElement.src = newSrc;
}
  
var imgElements = document.getElementsByTagName("img");
for (var i = 0; i < imgElements.length; i++) {
  imgElements[i].addEventListener("click", function() {
    refreshImage(this);
  });
}

console.log("\n %c 你好世界！www.mwm.moe%c ","color:#fff;background:linear-gradient(90deg,#FFC0CB,#FFC0CB);padding:5px 0;","color:#000;background:linear-gradient(90deg,#FFC0CB,#ffffff);padding:5px 10px 5px 0px;");
console.log("\n %c 你好世界！t.mwm.moe%c ","color:#fff;background:linear-gradient(90deg,#FFC0CB,#FFC0CB);padding:5px 0;","color:#000;background:linear-gradient(90deg,#FFC0CB,#ffffff);padding:5px 10px 5px 0px;");
