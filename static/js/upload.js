document.addEventListener("DOMContentLoaded", function () {
  var uploadContainer = document.getElementById("upload-container");
  var fileInput = document.getElementById("file-input");
  var fileInfo = document.getElementById("file-info");
  var fileNameSpan = document.getElementById("file-name");
  var removeFileButton = document.getElementById("remove-file");
  var convertBtn = document.getElementById("convert-btn");
  var uploadForm = document.getElementById("upload-form");

  uploadContainer.addEventListener("click", function () {
    fileInput.click();
  });

  uploadContainer.addEventListener("dragover", function (e) {
    e.preventDefault();
    e.stopPropagation();
    uploadContainer.classList.add("dragover");
  });

  uploadContainer.addEventListener("dragleave", function (e) {
    e.preventDefault();
    e.stopPropagation();
    uploadContainer.classList.remove("dragover");
  });

  var imagePreview = document.getElementById("image-preview");
  var previewImg = document.getElementById("preview-img");
  var dropZoneContent = document.querySelector(".drop-zone-content");

  function handleFiles(files) {
    if (files.length > 0) {
      var file = files[0];
      fileInput.files = files;
      displayFileInfo(file);
      
      // Show image preview
      if (file.type.startsWith('image/')) {
        var reader = new FileReader();
        reader.onload = function(e) {
          previewImg.src = e.target.result;
          imagePreview.style.display = "block";
          dropZoneContent.style.display = "none";
        }
        reader.readAsDataURL(file);
      }
    }
  }

  uploadContainer.addEventListener("drop", function (e) {
    e.preventDefault();
    e.stopPropagation();
    uploadContainer.classList.remove("dragover");
    handleFiles(e.dataTransfer.files);
  });

  fileInput.addEventListener("change", function () {
    handleFiles(fileInput.files);
  });

  removeFileButton.addEventListener("click", function () {
    fileInput.value = "";
    fileInfo.style.display = "none";
    imagePreview.style.display = "none";
    previewImg.src = "";
    dropZoneContent.style.display = "block";
  });

  convertBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (fileInput.files.length > 0) {
      // Show loading state
      convertBtn.textContent = "Processing...";
      convertBtn.style.opacity = "0.7";
      convertBtn.style.pointerEvents = "none";
      uploadForm.submit();
    } else {
      alert("Please upload a file first.");
    }
  });

  function displayFileInfo(file) {
    fileNameSpan.textContent = file.name;
    fileInfo.style.display = "flex";
  }
});
