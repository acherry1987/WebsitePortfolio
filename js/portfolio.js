
window.onload = function () {

  var globalContainer = document.getElementById("globalContainer");
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
	//var closebuttonintropage = document.getElementById("closebuttonintropage");
	var pos = 0;

	var w = window.innerWidth;
    var h = window.innerHeight;

  function gotoPage(state) {
    window.location.hash = state;
  }

  watchpage.addEventListener('click', function(){gotoPage('smartwatch')});

	golf.addEventListener('click', function(){gotoPage('smartwatch')});

	luxpage.addEventListener('click', function(){gotoPage('lux')});

	luximage.addEventListener('click', function(){gotoPage('lux')});

	resumepage.addEventListener('click', function(){gotoPage('resume')});

	reel.addEventListener('click', function(){gotoPage('resume')});

	nikepage.addEventListener('click', function (){gotoPage('nike')});

  nk.addEventListener('click', function (){gotoPage('nike')});

	carnationpage.addEventListener('click', function (){gotoPage('carnation')});

	Fpage.addEventListener('click', function (){gotoPage('carnation')});

	flowerpage.addEventListener('click', function (){gotoPage('flower')});

	acepage.addEventListener('click', function (){gotoPage('flower')});

	benpage.addEventListener('click', function (){gotoPage('benz')});

	ben.addEventListener('click', function (){gotoPage('benz')});

	follows.addEventListener('click', function (){gotoPage('follows')});

	cmpageM.addEventListener('click', function (){gotoPage('follows')});

	lilW.addEventListener('click', function (){gotoPage('lillies')});

	lilWhite.addEventListener('click', function (){gotoPage('lillies')});

	/*featurepage.addEventListener('click', function () {
		featurepagecontainer.style.display = "none";
		close.style.display = "none";
	});*/

	closebutton4.addEventListener('click', function () {gotoPage('portfolio')});

	closebutton5.addEventListener('click', function () {gotoPage('portfolio')});

	closebutton6.addEventListener('click', function () {gotoPage('portfolio')});

	closebutton10.addEventListener('click', function () {gotoPage('portfolio')});

	closebutton1.addEventListener('click', function () {gotoPage('portfolio')});

	closebutton8.addEventListener('click', function () {gotoPage(previousState)});

	closebutton2.addEventListener('click', function () {gotoPage('portfolio')});

	closebutton3.addEventListener('click', function () {gotoPage('portfolio')});

	close.addEventListener('click', function () {gotoPage('portfolio')});

	close.addEventListener('mouseover', function () {
		close.style.width = 20;
		close.style.color = "blue";
	});

	viewWork.addEventListener('click', launchPortfolio);

  function launchPortfolio() {
    if(currentState === "" || currentState === "intro") {
      transitionFromSplashToPortfolio();
    } else {
      showPortfolio();
    }
  }

  function transitionFromSplashToPortfolio() {
    intro.className = "startingIntroFadeout";

    /*viewWork.style.animationName = "mymove6";
    dash.style.animationName = "mymove6";
    reel.style.animationName = "mymove6";
    designer.style.animationName = "mymove8";
    designer.style.animationDuration = "3s";
    line.style.animationName = "mymove6";*/

    setTimeout(fadeOutSplash, 350);
    setTimeout(showPortfolio, 2000);
  }

  function fadeOutSplash() {
    intro.className = "finishIntroFadeout";
    /*myname.style.animationName = "mymove7";
    lastname.style.animationName = "mymove7";
    lastname.style.animationDuration = "2.5s";
    myname.style.animationDuration = "2.0s";
    textcontainer.style.animationName = "fadeout";*/
  }

  function showPortfolio() {
    intro.className = "";
    globalContainer.className = 'portfolio';
  }

  var currentState = "";
  var previousState = "";
  function gotostate(state) {
    globalContainer.className = state;
    // Record the current state for posterity :)
    previousState = currentState;
    currentState = state;
  }

  var state = "";
  function handleHash() {
    if(window.location.hash.length > 1 ) {
      state = window.location.hash.substr(1);
    } else {
      state = 'intro';
    }
    gotostate(state);
  }
  handleHash();
  window.onhashchange = handleHash;
}
