window.addEventListener('load',function(){
document.getElementsByClassName("check-box")[0].innerHTML = content;
const imgTags = document.querySelectorAll(".check-box img");
if (imgTags.length > 0) {
  imgTags.forEach((imgTag) => {
    if (imgTag.hasAttribute("src")) {
      imgTag.setAttribute('data-src', imgTag.getAttribute('src'));
      imgTag.removeAttribute('src');
      imgTag.classList.add('lazyload');
     }
   });
  }
});
