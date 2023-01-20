let textboxParagraph = document.getElementById('geodeticWebsite')
let image = document.getElementById('geodeticWebsitePicture');
let imageVisible = false;

textboxParagraph.addEventListener("click", function () {
    if (imageVisible) {
        image.style.display = 'none';
        imageVisible = false;
    } else {
        image.style.display = 'block';
        imageVisible = true;
    }
});