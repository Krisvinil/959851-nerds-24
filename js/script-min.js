var link=document.querySelector(".button-write-to-us"),popup=document.querySelector(".pop-up"),close=popup.querySelector(".modal-close"),form=popup.querySelector(".form"),userName=popup.querySelector("[name=name]"),email=popup.querySelector("[name=email]"),isStorageSupport=!0,storage="";try{storage=localStorage.getItem("name")}catch(e){isStorageSupport=!1}link.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal-show"),storage?(userName.value=storage,email.focus()):userName.focus()}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal-show"),popup.classList.remove("modal-error"),storage&&(userName.value=storage)}),form.addEventListener("submit",function(e){userName.value&&email.value?isStorageSupport&&localStorage.setItem("name",userName.value):(e.preventDefault(),popup.classList.remove("modal-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),popup.classList.contains("modal-show")&&(popup.classList.remove("modal-show"),popup.classList.remove("modal-error")))});