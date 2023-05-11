const cockroach = document.createElement('div');
cockroach.setAttribute('id', 'cock');
cockroach.setAttribute('class', 'cockroach');
document.body.appendChild(cockroach);
const image = document.createElement('img');
image.setAttribute('id', 'image');
image1 = chrome.extension.getURL("assets/c0.png");
image2 = chrome.extension.getURL("assets/c1.png");
image3 = chrome.extension.getURL("assets/c2.png");
image.setAttribute('src', 'image1');
image.setAttribute('alt', 'cockroach');
const div = document.getElementById('cock');
div.appendChild(image);

var imageSources = ["image1", "image2", "image3"]

var index = 0;
setInterval(function () {
  if (index === imageSources.length) {
    index = 0;
  }
  document.getElementById("image").src = imageSources[index];
  index++;
}, 125);
