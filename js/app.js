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
var finish = false
var p1Score = 0;
var p2Score = 0;
var input = document.querySelector('input')
var data = document.querySelector('.rounds');
var win = document.getElementById('win');

console.log(data)
button1.addEventListener('click', function(){
	if(!finish){
		p1Score++
		if(p1Score === win){
			p1.classList.add('winner')
			finish = true
		}
		p1.textContent = p1Score;
	}
});
button2.addEventListener('click', function(){
	if(!finish){
		p2Score++
		if(p2Score === win){
			p2.classList.add('winner')
			finish = true
		}
		p2.textContent = p2Score;
	}
	
});
input.addEventListener("change", function(){
	win.textContent = this.value;
	data = Number(this.value);
	
	});
});




