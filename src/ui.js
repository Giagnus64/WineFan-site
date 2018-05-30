class UI{
	constructor(){
		this.menuButton = document.querySelector(".header__menu-icon");
		this.menuContent = document.querySelector(".header__menu-content");
		this.changingText = document.querySelector(".changing-text");
	}

	displayMenu(){
		this.menuContent.style.display = "block";
		this.menuButton.classList.add("header__menu-icon--close-x");
	}
	hideMenu(){
		this.menuContent.style.display = "none";
		this.menuButton.classList.remove("header__menu-icon--close-x");
	}

	changeHeader(num){
		//this.fadeOut(this.changingText);
		
		const headers = ["Cheers!", "Salute!", "Salud!", "乾杯!", "干杯!"];
		let x = num;

		if(x < 4){
			x++;
		} else if (x === 4){
			x = 0;
		}

		this.changingText.textContent = headers[x];
		//this.fadeIn(this.changingText);


	}

	fadeOut(element){
		element.classList.add("hidden");

	}

	fadeIn(element){
		element.classList.remove("hidden");
	}



	/*//Function to fade element after some time
 	fadeOut(element) {
    	var op = 1;  // initial opacity
    	var timer = setInterval(function () {
        if (op <= 0.1){
           	clearInterval(timer);
           	element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    	}, 50);
	}

	//Function to fade element after some time
 	fadeIn(element) {
    	var op = 1;  // initial opacity
    	var timer = setInterval(function () {
        if (op <= 0.1){
           	clearInterval(timer);
           	element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    	}, 50);
	}*/		
}

export const ui = new UI(); 