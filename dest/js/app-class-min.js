function getElement(e){const t=document.querySelector(e);if(t)return t;throw new Error(`Sprawdź "${e}" !!!`)}class Gallery{constructor(e){this.container=e,this.list=[...e.querySelectorAll(".img")],this.modalSide=getElement(".modal"),this.modalImg=getElement(".main-img"),this.imageName=getElement(".image-name"),this.modalImages=getElement(".modal-images"),this.closeBtn=getElement(".close-btn"),this.nextBtn=getElement(".next-btn"),this.prevBtn=getElement(".prev-btn"),this.closeModal=this.closeModal.bind(this),this.nextImage=this.nextImage.bind(this),this.prevImage=this.prevImage.bind(this),this.chooseImage=this.chooseImage.bind(this),this.container.addEventListener("click",function(e){e.target.classList.container("img")&&this.openModal(e.target,this.list)}.bind(this))}openModal(e,t){this.setMainImage(e),this.modalImages.innerHTML=t.map(function(t){return`<img src="${t.src}" title="${t.title}" data-id="${t.dataset.id}" class="${e.dataset.id}" === image.dataset.id ? 'modal-img selected' : 'modal-img' />`}).join(""),this.modalSide.classList.add("open"),this.closeBtn.addEventListener("click",this.closeModal),this.nextBtn.addEventListener("click",this.nextImage),this.prevBtn.addEventListener("click",this.prevImage),this.modalImages.addEventListener("click",this.chooseImage)}setMainImage(e){this.modalImg.src=e.src,this.imageName.textContent=e.title}closeModal(){this.modalSide.classList.remove("open"),this.closeBtn.removeEventListener("click",this.closeModal),this.nextBtn.removeEventListener("click",this.nextImage),this.prevBtn.removeEventListener("click",this.prevImage),this.modalImages.removeEventListener("click",this.chooseImage)}nextImage(){const e=this.modalImages.querySelector(".selected"),t=e.nextElementSibling||this.modalImages.firstElementChild;e.classList.remove("selected"),t.classList.add("selected"),this.setMainImage(t)}prevImage(){const e=this.modalImages.querySelector("selected"),t=e.previousElementSibling||this.modalImages.lastElementChild;e.classList.remove("selected"),t.classList.add("selected"),this.setMainImage(t)}chooseImage(e){if(e.target.classList.contains("modal-img")){this.modalImages.querySelector(".selected").classList.remove("selected"),this.setMainImage(e.target),e.target.classList.add("selected")}}}const nature=new Gallery(getElement(".nature")),city=new Gallery(getElement(".city"));