window.onload = function () {
    var imageContainers = document.querySelectorAll('.image-container');
    var overlayTexts = document.querySelectorAll('.overlay-text');

    setTimeout(function () {
        imageContainers.forEach(function(imageContainer) {
            imageContainer.classList.add('image-hover');
        });

        overlayTexts.forEach(function(overlayText) {
            overlayText.classList.add('overlay-text-hover');
        });
    }, 2000);

    setTimeout(function () {
        imageContainers.forEach(function(imageContainer) {
            imageContainer.classList.remove('image-hover');
        });

        overlayTexts.forEach(function(overlayText) {
            overlayText.classList.remove('overlay-text-hover');
        });
    }, 3000);
};
