
window.onload = function () {

	//About
	var wholesite = document.getElementById("sitewrapper");
	var contact = document.getElementById("contact");
	var contactpage = document.getElementById("menu");
	var viewWork = document.getElementById("view");
	var dash = document.getElementById("dash");
	var line = document.getElementById("line");
	var myname = document.getElementById("myname");
	var designer = document.getElementById("designer");
	var reel = document.getElementById("reel");
	var nk = document.getElementById("nk");
	var close = document.getElementById("close");
	var luxpage = document.getElementById("luxpage");
	var watchpage = document.getElementById("watchpage");
	var nikepage = document.getElementById("nikepage");
	var benpage = document.getElementById("benpage");
	var follows = document.getElementById("follows");
	var flowerpage = document.getElementById("flowerpage");
	var cherrylogo = document.getElementById("cherrylogo");
	var nikeimage = document.getElementById("nikeimage");
	var flexcontainer = document.querySelector(".flex-container");
	var imagecontainer = document.querySelector(".imagecontainer");
	var featurepagecontainer = document.querySelector(".featurepagecontainer");
	var closebutton = document.querySelector(".closebutton");
	var closebutton1 = document.getElementById("closebutton1");
	var closebutton2 = document.getElementById("closebutton2");
	var closebutton3 = document.getElementById("closebutton3");
	var closebutton4 = document.getElementById("closebutton4");
	var closebutton5 = document.getElementById("closebutton5");
	var closebutton6 = document.getElementById("closebutton6");
	var closebutton8 = document.getElementById("closebutton8");
	var resumepage = document.getElementById("resume");
	var featurepagecontainerNike = document.querySelector(".featurePageContainerNike");
	var featurepagecontainerLux = document.querySelector(".featurePageContainerLuxUi");
	var featurepagecontainerResume = document.querySelector(".featurePageContainerResume");
	var featurepagecontainerBenZ = document.querySelector(".featurePageContainerBenZ");
	var featurepagecontainerFlower = document.querySelector(".featurePageContainerFlower");
	var featurepagecontainerSmartW = document.querySelector(".featurePageContainerSmartW");
	var featurepagecontainerCarnation = document.querySelector(".featurePageContainerCarnation");
	var featurepagecontainerItFollows = document.querySelector(".featurePageContainerItFollows");
	var textcontainer = document.querySelector(".bg");
	var featurepage = document.querySelector(".featurepage");
	var featurePageContainerLilies = document.querySelector(".featurePageContainerLilies");
	var toplogo = document.querySelector(".headerimagepage");
	var notblock = document.querySelector(".notblock");
	var intro = document.getElementById("intropage");
	var carnationpage = document.getElementById("carnation");
	var close = document.getElementById("close");
	var lilW = document.getElementById("lilW");
	var lilWhite = document.getElementById("lilWhite");
	var resumeWide = document.getElementById("resumeimage");
	var resumeLong = document.getElementById("resumeportrait");
	var textbottom = document.querySelector(".text");
	var ben = document.getElementById("ben");
	var Fpage = document.getElementById("pho");
	var header = document.querySelector(".headercontainer");
	var luximage = document.getElementById("glass");
	var cmpageM = document.getElementById("IF");
	var acepage = document.getElementById("fl");
	var footer = document.querySelector(".footer");
	var golf = document.getElementById("golf");
	var closebuttonintropage = document.getElementById("closebuttonintropage");
	var pos = 0;
	
	var w = window.innerWidth;
    var h = window.innerHeight;
    
	
    	

	watchpage.addEventListener('click', function () {
		featurepagecontainerSmartW.style.display = "flex";
		closebutton6.style.display = "block";
		imagecontainer.style.display = "none";
		header.style.display = "none";
	});
	
	golf.addEventListener('click', function () {
		featurepagecontainerSmartW.style.display = "flex";
		closebutton6.style.display = "block";
		imagecontainer.style.display = "none";
		header.style.display = "none";
	});

	luxpage.addEventListener('click', function () {
		featurepagecontainerLux.style.display = "flex";
		closebutton5.style.display = "block";
		imagecontainer.style.display = "none";
		header.style.display = "none";
	});
	
	luximage.addEventListener('click', function () {
		featurepagecontainerLux.style.display = "flex";
		closebutton5.style.display = "block";
		imagecontainer.style.display = "none";
		header.style.display = "none";
	});
	
	resumepage.addEventListener('click', function () {
		featurepagecontainerResume.style.display = "flex";
		closebutton8.style.display = "block";
		imagecontainer.style.display = "none";
		header.style.display = "none";
		notblock.style.display = "block";
		
				if (w > h) {
    				resumeWide.style.display = "block";
    				resumeLong.style.display = "none";
    				console.log("working");
    			}
    			else { 
    				resumeLong.style.display = "block";
    				resumeWide.style.display = "none";
    				console.log("go to portrait!");
    			}
	});
	
	
	reel.addEventListener('click', function () {
		featurepagecontainerResume.style.display = "flex";
		closebuttonintropage.style.display = "block";
		header.style.display = "none";
		intro.style.display = "none";
		notblock.style.display = "none";
		
				if (w > h) {
    				resumeWide.style.display = "block";
    				resumeLong.style.display = "none";
    				console.log("working");
    			}
    			else { 
    				resumeLong.style.display = "block";
    				resumeWide.style.display = "none";
    				console.log("go to portrait!");
    			}
	});
	
	nikepage.addEventListener('click', function () {
		featurepagecontainerNike.style.display = "flex";
		close.style.display = "inline-block";
		imagecontainer.style.display = "none";
		header.style.display = "none";
	});
	
	carnationpage.addEventListener('click', function () {
		featurepagecontainerCarnation.style.display = "flex";
		closebutton10.style.display = "inline-block";
		imagecontainer.style.display = "none";
		header.style.display = "none";
	});
	
	Fpage.addEventListener('click', function () {
		featurepagecontainerCarnation.style.display = "flex";
		closebutton10.style.display = "inline-block";
		imagecontainer.style.display = "none";
		header.style.display = "none";
	});
	
	nk.addEventListener('click', function () {
		featurepagecontainerNike.style.display = "flex";
		close.style.display = "inline-block";
		imagecontainer.style.display = "none";
		header.style.display = "none";
	});
	
	flowerpage.addEventListener('click', function () {
		featurepagecontainerFlower.style.display = "flex";
		closebutton2.style.display = "inline-block";
		imagecontainer.style.display = "none";
		header.style.display = "none";
	});
	
	
	acepage.addEventListener('click', function () {
		featurepagecontainerFlower.style.display = "flex";
		closebutton2.style.display = "inline-block";
		imagecontainer.style.display = "none";
		header.style.display = "none";
	});
	
	benpage.addEventListener('click', function () {
		featurepagecontainerBenZ.style.display = "flex";
		closebutton3.style.display = "inline-block";
		imagecontainer.style.display = "none";
		header.style.display = "none";
	});
	
	ben.addEventListener('click', function () {
		featurepagecontainerBenZ.style.display = "flex";
		closebutton3.style.display = "inline-block";
		imagecontainer.style.display = "none";
		header.style.display = "none";
	});
	
	follows.addEventListener('click', function () {
		featurepagecontainerItFollows.style.display = "flex";
		closebutton1.style.display = "inline-block";
		imagecontainer.style.display = "none";
		header.style.display = "none";
	});
	
	cmpageM.addEventListener('click', function () {
		featurepagecontainerItFollows.style.display = "flex";
		closebutton1.style.display = "inline-block";
		imagecontainer.style.display = "none";
		header.style.display = "none";
	});
	
	lilW.addEventListener('click', function () {
		featurePageContainerLilies.style.display = "flex";
		closebutton4.style.display = "inline-block";
		imagecontainer.style.display = "none";
		header.style.display = "none";
	});
	
	lilWhite.addEventListener('click', function () {
		featurePageContainerLilies.style.display = "flex";
		closebutton4.style.display = "inline-block";
		imagecontainer.style.display = "none";
		header.style.display = "none";
	});
	
	featurepage.addEventListener('click', function () {
		featurepagecontainer.style.display = "none";
		close.style.display = "none";
	});
	
	closebutton4.addEventListener('click', function () {
		featurePageContainerLilies.style.display = "none";
		closebutton3.style.display = "none";
		imagecontainer.style.display = "flex";
		header.style.display = "flex";
	});
	
	closebutton5.addEventListener('click', function () {
		featurepagecontainerLux.style.display = "none";
		closebutton5.style.display = "none";
		imagecontainer.style.display = "flex";
		header.style.display = "flex";
	});
	
	closebutton6.addEventListener('click', function () {
		featurepagecontainerSmartW.style.display = "none";
		closebutton6.style.display = "none";
		imagecontainer.style.display = "flex";
		header.style.display = "flex";
	});
	
	closebutton10.addEventListener('click', function () {
		featurepagecontainerCarnation.style.display = "none";
		closebutton10.style.display = "none";
		imagecontainer.style.display = "flex";
		header.style.display = "flex";
	});
	
	closebutton1.addEventListener('click', function () {
		featurepagecontainerItFollows.style.display = "none";
		closebutton1.style.display = "none";
		imagecontainer.style.display = "flex";
		header.style.display = "flex";
	});
	
	closebutton8.addEventListener('click', function () {
		featurepagecontainerResume.style.display = "none";
		closebutton8.style.display = "none";
		imagecontainer.style.display = "flex";
		header.style.display = "flex";
		notblock.style.display = "block";
	});
	
	closebuttonintropage.addEventListener('click', function () {
		featurepagecontainerResume.style.display = "none";
		closebuttonintropage.style.display = "none";
		intro.style.display = "flex";
	});
	
	closebutton2.addEventListener('click', function () {
		featurepagecontainerFlower.style.display = "none";
		closebutton2.style.display = "none";
		imagecontainer.style.display = "flex";
		header.style.display = "flex";
	});
	
	closebutton3.addEventListener('click', function () {
		featurepagecontainerBenZ.style.display = "none";
		closebutton3.style.display = "none";
		imagecontainer.style.display = "flex";
		header.style.display = "flex";
	});
	
	
	close.addEventListener('click', function () {
		featurepagecontainerNike.style.display = "none";
		close.style.display = "none";
		imagecontainer.style.display = "flex";
		header.style.display = "flex";
	});
	
	close.addEventListener('mouseover', function () {
		close.style.width = 20;
		console.log("hello");
		close.style.color = "blue";
	});
	
	
	viewWork.addEventListener('click', function () {
// 		intro.className = 'textfadeout';
		viewWork.style.animationName = "mymove6";
		dash.style.animationName = "mymove6";
		reel.style.animationName = "mymove6";
		designer.style.animationName = "mymove8";
		designer.style.animationDuration = "3s";
		line.style.animationName = "mymove6";

		
		
		if (viewWork.style.animationName == 'mymove6') { 
				console.log ("execute");
				
				
				setTimeout(function(){
					intro.style.display = "none";
					imagecontainer.style.display = "flex";
					notblock.style.display = "block";
					header.style.display = "flex";
				}, 2000);
			}
			
				setTimeout(function(){
					
					myname.style.animationName = "mymove7";
					lastname.style.animationName = "mymove7";
					lastname.style.animationDuration = "2.5s";
					myname.style.animationDuration = "2.0s";
					textcontainer.style.animationName = "fadeout"
				}, 350);
    			
		
		
	});
	
	


	

	
}


