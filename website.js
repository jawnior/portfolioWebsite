let geodeticWebsite = document.getElementById('geodeticWebsite');
let geodeticWebsitePicture = document.getElementById('geodeticWebsitePicture');

let colorFlipper = document.getElementById('colorFlipper');
let colorFlipperPicture = document.getElementById('colorFlipperPicture');

let counter = document.getElementById('counter');
let counterPicture = document.getElementById('counterPicture');

let currentPicture = null;

function toggleImageVisibility(element) {
    if (currentPicture === element) {
        element.style.display = 'none';
        currentPicture = null;
    } else {
        if (currentPicture) {
            currentPicture.style.display = 'none';
        }
        element.style.display = 'block';
        currentPicture = element;
    }
}

geodeticWebsite.addEventListener("click", function () {
    toggleImageVisibility(geodeticWebsitePicture);
});

colorFlipper.addEventListener("click", function () {
    toggleImageVisibility(colorFlipperPicture);
});

counter.addEventListener("click", function () {
    toggleImageVisibility(counterPicture);
});