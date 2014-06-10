console.log("Hello!");



function imageRotator () {
	var contentImage = document.getElementById('indexphoto');

    var imageArray = ['images/daw2.jpg', 'images/u87.jpg', 'images/protools.png', 'images/control1.jpg'];

    var imageIndex = 0;

    function changeImage () {
	    contentImage.setAttribute("src", imageArray[imageIndex]);
	    imageIndex++;
	    if(imageIndex >= imageArray.length) {
		    imageIndex = 0;
	    }
    }

     var intervalHandle = setInterval(changeImage,5000);

     contentImage.onclick =  function() {
	     clearInterval(intervalHandle);
       };
     }

window.onload = function() {
	imageRotator();
};

document.querySelector('img.gallery').addEventListener('click', function(e){
	var lowRes = e.target.src;
	var myOverlay = document.querySelector('.overlay');
	var highRes = document.createElement('img');
	var mySpinner = document.createElement('img');

	myOverlay.style.display = 'block';
	highRes.className = 'bgImg';
	highRes.src = lowRes.substr(0, lowRes.length-7) + '.jpg';
	myOverlay.appendChild(highRes);

    mySpinner.className = 'spinner';
    mySpinner.src = 'images/spinner.gif';
    myOverlay.appendChild(mySpinner);

    highRes.addEventListener('load', function() {
    mySpinner.parentNode.removeChild(mySpinner);
    });

    myOverlay.addEventListener('click', function() {
    myOverlay.style.display = 'none';
    });

}, false);