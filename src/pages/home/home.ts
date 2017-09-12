import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as $ from 'jquery';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
ngOnInit() {
  this.createTable()
  this.addEvents()
  
}

createTable(){
		let table = document.createElement('table');
	  let words = this.getWords();

      table.setAttribute("id", "crossword");

	      for (var rows = 1; rows < 9; rows++){
	        var tr = document.createElement('tr');
	        for (var cols = 1; cols < 9; cols++){
					  var td, tNode;
						  td = document.createElement('td');
	                td.setAttribute("id", "id"+(rows)+(cols));
	                tNode = document.createTextNode(words[rows-1][cols-1]);
	                td.appendChild(tNode);
	                tr.appendChild(td);
	            }
	            table.appendChild(tr);
	        }
	        document.getElementById("puzzle").appendChild(table);
	}
	
	getWords(){
		var words = [
				['Κ','Α','Φ','Τ','Α','Ν','Ι','Α'],
				['Ε','Α','Γ','Ι','Ο','Π','Α','Λ'],
				['Μ','Τ','Ε','Τ','Π','Τ','Γ','Ι'],
				['Τ','Α','Π','Τ','Κ','Ο','Ι','Δ'],
				['Ο','Ο','Γ','Γ','Α','Π','Ω','Ε'],
				['Ρ','Λ','Α','Ι','Ε','Ν','Π','Π'],
				['Ζ','Ε','Δ','Ι','Ω','Α','Ι','Ι'],
				['Ρ','Α','Υ','Ο','Σ','Ε','Ξ','Α']
			];
		return words;
	}

getBlocksByColor(color){
		var redBlocks = ['11', '12', '13', '14', '15', '16', '17', '18'],
			greenBlocks = ['18', '28', '38', '48', '58', '68'],
			orangeBlocks = ['36', '46', '56'],
			yellowBlocks = ['31', '42', '53', '64', '75'],
			blueBlocks = ['81', '82', '83', '84', '85', '86', '87', '88'];

		switch(color) {
		    case "red":
		        return redBlocks;
		    case "green":
		        return greenBlocks;
		    case "yellow":
		        return yellowBlocks;
		    case "orange":
		        return orangeBlocks;
		    case "blue":
		        return blueBlocks;
		}
	}
	
	addEvents(){
		$('td').on('click', function(){
			if($(this).hasClass('selected')) {
				$(this).removeClass('selected');
			} else {
				$(this).addClass('selected');
			}

			checkForRed();
			checkForOrange();
			checkForYellow();
			checkForBlue();
			checkForGreen();
		});
	}
	
}
$(document).ready(function(){
	addColors()

})
function addColors(){
		addColorFlags(getBlocksByColor('red'), 'red-flag');
		addColorFlags(getBlocksByColor('green'), 'green-flag');
		addColorFlags(getBlocksByColor('orange'), 'orange-flag');
		addColorFlags(getBlocksByColor('yellow'), 'yellow-flag');
		addColorFlags(getBlocksByColor('blue'), 'blue-flag');
	}
function addColorFlags(blocks, colorFlag){
		if(Array.isArray(blocks)){
			blocks.forEach(function(elem){
				$('#id' + elem).addClass(colorFlag);
			});
		}
	}
function lockWord(blocks){
		if(Array.isArray(blocks)){
			blocks.forEach(function(elem){
				$('#id' + elem).off('click');
			});
		}
	}

	function getBlocksByColor(color){
		var redBlocks = ['11', '12', '13', '14', '15', '16', '17', '18'],
			greenBlocks = ['18', '28', '38', '48', '58', '68'],
			orangeBlocks = ['36', '46', '56'],
			yellowBlocks = ['31', '42', '53', '64', '75'],
			blueBlocks = ['81', '82', '83', '84', '85', '86', '87', '88'];

		switch(color) {
		    case "red":
		        return redBlocks;
		    case "green":
		        return greenBlocks;
		    case "yellow":
		        return yellowBlocks;
		    case "orange":
		        return orangeBlocks;
		    case "blue":
		        return blueBlocks;
		}
	}

	function checkForRed(){
		if(
			$('#id11').hasClass('red-flag') && $('#id11').hasClass('selected') &&
			$('#id12').hasClass('red-flag') && $('#id12').hasClass('selected') &&
			$('#id13').hasClass('red-flag') && $('#id13').hasClass('selected') &&
			$('#id14').hasClass('red-flag') && $('#id14').hasClass('selected') &&
			$('#id15').hasClass('red-flag') && $('#id15').hasClass('selected') &&
			$('#id16').hasClass('red-flag') && $('#id16').hasClass('selected') &&
			$('#id17').hasClass('red-flag') && $('#id17').hasClass('selected') &&
			$('#id18').hasClass('red-flag') && $('#id18').hasClass('selected')
			) {
				$('.red-flag').addClass('red');
				$('#word4').addClass('strike-word');
				lockWord(getBlocksByColor('red'));
			} else {
				$('.red-flag').removeClass('red');
				$('#word4').removeClass('strike-word');
			}
	}

	function checkForOrange(){
		if(
			$('#id36').hasClass('orange-flag') && $('#id36').hasClass('selected') &&
			$('#id46').hasClass('orange-flag') && $('#id46').hasClass('selected') &&
			$('#id56').hasClass('orange-flag') && $('#id56').hasClass('selected')
			) {
				$('.orange-flag').addClass('orange');
				$('#word2').addClass('strike-word');
				lockWord(getBlocksByColor('orange'));
			} else {
				$('.orange-flag').removeClass('orange');
				$('#word2').removeClass('strike-word');
			}
	}

	function checkForYellow(){
		if(
			$('#id31').hasClass('yellow-flag') && $('#id31').hasClass('selected') &&
			$('#id42').hasClass('yellow-flag') && $('#id42').hasClass('selected') &&
			$('#id53').hasClass('yellow-flag') && $('#id53').hasClass('selected') &&
			$('#id64').hasClass('yellow-flag') && $('#id64').hasClass('selected') &&
			$('#id75').hasClass('yellow-flag') && $('#id75').hasClass('selected')
			) {
				$('.yellow-flag').addClass('yellow');
				$('#word3').addClass('strike-word');
				lockWord(getBlocksByColor('yellow'));
			} else {
				$('.yellow-flag').removeClass('yellow');
				$('#word3').removeClass('strike-word');
			}
	}

	function checkForBlue(){
		if(
			$('#id81').hasClass('blue-flag') && $('#id81').hasClass('selected') &&
			$('#id82').hasClass('blue-flag') && $('#id82').hasClass('selected') &&
			$('#id83').hasClass('blue-flag') && $('#id83').hasClass('selected') &&
			$('#id84').hasClass('blue-flag') && $('#id84').hasClass('selected') &&
			$('#id85').hasClass('blue-flag') && $('#id85').hasClass('selected') &&
			$('#id86').hasClass('blue-flag') && $('#id86').hasClass('selected') &&
			$('#id87').hasClass('blue-flag') && $('#id87').hasClass('selected') &&
			$('#id88').hasClass('blue-flag') && $('#id88').hasClass('selected')
			) {
				$('.blue-flag').addClass('blue');
				$('#word1').addClass('strike-word');
				lockWord(getBlocksByColor('blue'));
			} else {
				$('.blue-flag').removeClass('blue');
				$('#word1').removeClass('strike-word');
			}
	}

	function checkForGreen(){
		if(
			$('#id18').hasClass('green-flag') && $('#id18').hasClass('selected') &&
			$('#id28').hasClass('green-flag') && $('#id28').hasClass('selected') &&
			$('#id38').hasClass('green-flag') && $('#id38').hasClass('selected') &&
			$('#id48').hasClass('green-flag') && $('#id48').hasClass('selected') &&
			$('#id58').hasClass('green-flag') && $('#id58').hasClass('selected') &&
			$('#id68').hasClass('green-flag') && $('#id68').hasClass('selected')
			) {
				$('.green-flag').addClass('green');
				$('#word5').addClass('strike-word');
				lockWord(getBlocksByColor('green'));
			} else {
				$('.green-flag').removeClass('green');
				$('#word5').removeClass('strike-word');
			}
	}