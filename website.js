let geodeticWebsite = document.getElementById('geodeticWebsite');
let geodeticWebsitePicture = document.getElementById('geodeticWebsitePicture');

let colorFlipper = document.getElementById('colorFlipper');
let colorFlipperPicture = document.getElementById('colorFlipperPicture');

let counter = document.getElementById('counter');
let counterPicture = document.getElementById('counterPicture');

let ethereumAccountChecker = document.getElementById('ethereumAccountChecker');
let ethereumAccountCheckerPicture = document.getElementById('ethereumAccountCheckerPicture');

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

geodeticWebsite.addEventListener("click", () => {
    toggleImageVisibility(geodeticWebsitePicture);
});

colorFlipper.addEventListener("click", () => {
    toggleImageVisibility(colorFlipperPicture);
});

counter.addEventListener("click", () => {
    toggleImageVisibility(counterPicture);
});

ethereumAccountChecker.addEventListener("click", () => {
    toggleImageVisibility(ethereumAccountCheckerPicture);
})