document.addEventListener('DOMContentLoaded', function(){
// //UI Controller
// var UiController = (function(){
// 	var DOMStrings = {
// 		Player1: '.p1',
// 		Player2: '.p2',
// 		win: '#win',
// 		inp: '.rounds',
// 		but1: '#first',
// 		but2: '#second',
// 		reset: '#reset'
// 	};

// 	return{
// 		getInput: function(){
// 			return {
// 				Counter: document.querySelector(inp).value 
// 			}
// 		}
// 	}

// });

// //Count controller
var p1 = document.querySelector('.p1')
var p2 = document.querySelector('.p2')
var button1 = document.getElementById('first')
var button2 = document.getElementById('second')
var res = document.getElementById('reset')
var finish = false
var p1Score = 0;
var p2Score = 0;
var input = document.querySelector('input')
var win = document.getElementById('win');
var winner = 0;
var won = document.getElementById("winner");
var addButton = document.querySelector(".like");


if(input.value.length === 0){
    addButton.disabled = true;
    button1.disabled = true;
    button2.disabled = true;
    res.disabled = true;
};
input.addEventListener("keypress", function(){
	addButton.disabled = false;
	button1.disabled = false;
	button2.disabled = false;
	res.disabled = false;
});

button1.addEventListener('click', function(){
	if(!finish){
		p1Score++
		if(p1Score === winner){
			p1.classList.add('winner')
			finish = true
			won.innerHTML = "P1 is the winner";
			
		}
		p1.textContent = p1Score;
	}
});

button2.addEventListener('click', function(){
	if(!finish){
		p2Score++
		if(p2Score === winner){
			p2.classList.add('winner')
			finish = true
			won.innerHTML = "P2 is the winner"
		}
		p2.textContent = p2Score;
	}
	
});

addButton.addEventListener('click', function(){
	win.textContent = input.value;
	winner = Number(input.value);
	//reset();
});

res.addEventListener('click', function(){
	reset()
});
// input.addEventListener("change", function(){
// 	win.textContent = this.value;
// 	winner = Number(this.value);
// 	reset();
// 	});


function reset(){
	p1.textContent = 0;
	p2.textContent = 0;
	p1Score = 0;
	p2Score = 0;
	finish = false;
	p1.classList.remove('winner')
	p2.classList.remove('winner')
	won.innerHTML="";
	win.innerHTML="";

}

var canvas = document.getElementById( 'canvas' ),
		ctx = canvas.getContext( '2d' ),
		// full screen dimensions
		cw = window.innerWidth,
		ch = window.innerHeight;

});


