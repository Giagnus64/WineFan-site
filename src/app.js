console.log('Hellio!');

//Get cheers headline and fadeout every 3-4 seconds and replace with "Array" of "Cheers" in different languages

//Build UI class with above and make menu button transform along with header div


import {ui} from "./ui";


//Event Listener
//toggles header button
document.querySelector(".header__menu-icon").addEventListener("click", toggleHeader);

document.querySelector(".main-hero__button").addEventListener("click",
	scrollHeader);

//loads header changing function onload 
window.onload = setHeader();




//Vars
const menu = document.querySelector(".modal-menu");
//header for changing header
const header = document.querySelector(".changing-text");
//counter for changing header
let headerCounter = 0; 

function toggleHeader(){
	
	if(menu.classList.contains("modal-menu--is-expanded")){
		ui.hideMenu();
	} else{
		ui.displayMenu();
	}
	console.log(menu.classList);
}

//Sets header to change every 4.5 seconds
function setHeader(){
	//sets interval for header cycle
	setInterval(function(){
		//fades header out at beginning of cycle
		ui.fadeOut(header);
		//changes header content after fade out
		setTimeout(function(){
			ui.changeHeader(headerCounter)
			if(headerCounter<4){
			headerCounter++;
			} else{
			headerCounter=0;
			}
		}, 1000);
		//fades header back in after fadeout and content change
		setTimeout(function(){
			ui.fadeIn(header);
			}, 1500)	

		return headerCounter;
	}, 4500);
}

function scrollHeader(e){
	window.smoothScroll(document.querySelector("#packages"), 1000);
}