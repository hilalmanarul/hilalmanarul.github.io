let cardChosenName = []
let cardChosenId = []
let cardChosenElement = []
let score = 0
//acak acak
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

document.addEventListener('DOMContentLoaded', () =>{ 
	

	const cardArray = [
	{
		name : 'fries',
		image : 'images/fries.png'
	},
	{
		name : 'cheeseburger',
		image : 'images/cheeseburger.png'
	},
	{
		name : 'hotdog',
		image : 'images/hotdog.png'
	},
	{
		name : 'ice cream',
		image : 'images/ice-cream.png'
	},
	{
		name : 'pizza',
		image : 'images/pizza.png'
	},
	{
		name : 'milkshake',
		image : 'images/milkshake.png'
	},
	{
		name : 'fries',
		image : 'images/fries.png'
	},
	{
		name : 'cheeseburger',
		image : 'images/cheeseburger.png'
	},
	{
		name : 'hotdog',
		image : 'images/hotdog.png'
	},
	{
		name : 'ice cream',
		image : 'images/ice-cream.png'
	},
	{
		name : 'pizza',
		image : 'images/pizza.png'
	},
	{
		name : 'milkshake',
		image : 'images/milkshake.png'
	}
	]
	shuffle(cardArray)

	const grid = document.querySelector('.grid')
	
	function idChecker(cardA,cardB,thisCard){
		if(cardA == cardB){
			$('#myModalSameCard').modal('show');
			setTimeout(()=>{
				$('#myModalSameCard').modal('hide');
			},1000)
			thisCard.setAttribute('src','images/blank.png')
			return 0
		}else {
			return 1
		}

	}

	function nameChecker(cardNameA,cardNameB,theseCards){
		if(cardNameA == cardNameB){
		
			$('#myModalWinCard').modal('show')
			setTimeout(()=> {
				$('#myModalWinCard').modal('hide');
			}, 1000)
			theseCards[0].setAttribute('src','images/white.png')
			theseCards[1].setAttribute('src','images/white.png')
			theseCards[0].removeEventListener('click',flipCard)
			theseCards[1].removeEventListener('click',flipCard)
			score = score + 10
			document.getElementById('result').innerHTML = score
			return 1

		}else if(cardNameA != cardNameB) {
		
			$('#myModalWrongCard').modal('show');
			setTimeout(()=>{
				$('#myModalWrongCard').modal('hide');
			},1000)
			theseCards[0].setAttribute('src','images/blank.png')
			theseCards[1].setAttribute('src','images/blank.png')

			return 0
		}
	}



	function flipCard(){
		let cardId = this.getAttribute('data-cardId')
		cardChosenElement.push(this)
		cardChosenName.push(cardArray[cardId].name)
		cardChosenId.push(cardId)
		this.setAttribute('src',cardArray[cardId].image)
		//cek kartu yg dipilih apakah sudah 2
		setTimeout(()=>{
			if (cardChosenId.length && cardChosenName.length == 2){
			if(idChecker(cardChosenId[0],cardChosenId[1],this) == 0){
				cardChosenId = []
				cardChosenName = []
				cardChosenElement = []
				return 0
			}else {
				if(nameChecker(cardChosenName[0],cardChosenName[1],cardChosenElement) == 1 || nameChecker(cardChosenName[0],cardChosenName[1],cardChosenElement) == 0){
					cardChosenId = []
					cardChosenName = []
					cardChosenElement = []
					return 0
				}  
				
			}
		}
		},370)
	}
				
			

	
	let i = 0
	function createBoard(){
		cardArray.forEach( function() {
			// statements
			let card = document.createElement('img')
			card.setAttribute('src', 'images/blank.png')
			card.setAttribute('data-cardId',i)
			card.setAttribute('id',i)
			card.setAttribute('class','card')
			card.addEventListener('click',flipCard)
			grid.appendChild(card)

			i++
		});
		console.log(cardArray)
	}
	
	

	createBoard()


})
