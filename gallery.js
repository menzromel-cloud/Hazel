const imageUpload = document.getElementById("imageUpload");
const galleryContainer = document.getElementById("galleryContainer");

imageUpload.addEventListener("change", function () {

  const files = this.files;

  Array.from(files).forEach(file => {

    const reader = new FileReader();

    reader.onload = function (e) {

      const photoCard = document.createElement("div");
      photoCard.classList.add("gallery-item");

      const img = document.createElement("img");
      img.src = e.target.result;

      photoCard.appendChild(img);

      galleryContainer.appendChild(photoCard);

    };

    reader.readAsDataURL(file);

  });

});