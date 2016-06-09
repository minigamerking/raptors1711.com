//sets image variable
var myImage = document.querySelector('img');

//image click control
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/raptors1.jpg') {
      myImage.setAttribute ('src','images/raptors2.jpg');
    } 
		else if (mySrc === 'images/raptors2.jpg') {
      myImage.setAttribute ('src','images/raptors3.jpg');
    }
		else if (mySrc === 'images/raptors3.jpg') {
      myImage.setAttribute ('src','images/raptors4.jpg');
    }
		else if (mySrc === 'images/raptors4.jpg') {
      myImage.setAttribute ('src','images/raptors6.jpg');
    }
		else if (mySrc === 'images/raptors6.jpg') {
      myImage.setAttribute ('src','images/raptors7.jpg');
    }
		else if (mySrc === 'images/raptors7.jpg') {
      myImage.setAttribute ('src','images/raptors8.jpg');
    }
		else {
			myImage.setAttribute ('src', 'images/raptors1.jpg');
		}
}