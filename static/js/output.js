function downloadImage() {
  const downloadMessage = document.getElementById("downloadMessage");
  const img = document.querySelector(".sketch-image");
  if (!img) return;

  const downloadLink = document.createElement("a");
  downloadLink.href = img.src;
  downloadLink.download = "sketch.png";
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
  
  downloadMessage.style.display = "flex";
  setTimeout(() => {
    downloadMessage.style.display = "none";
  }, 4000);
}
