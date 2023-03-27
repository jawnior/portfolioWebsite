const geodeticWebsite = document.getElementById('geodeticWebsite');
const geodeticWebsitePicture = document.getElementById('geodeticWebsitePicture');

const colorFlipper = document.getElementById('colorFlipper');
const colorFlipperPicture = document.getElementById('colorFlipperPicture');

const counter = document.getElementById('counter');
const counterPicture = document.getElementById('counterPicture');

const ethereumAccountChecker = document.getElementById('ethereumAccountChecker');
const ethereumAccountCheckerPicture = document.getElementById('ethereumAccountCheckerPicture');

const landingPage = document.getElementById('landingPage');
const landingPagePicture = document.getElementById('landingPagePicture')

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
});

landingPage.addEventListener("click", () => {
    toggleImageVisibility(landingPagePicture);
});