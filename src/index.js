

/*let cowayWaterBad = false

if (cowayWaterBad == true) {
	console.log('Yucky')
} else {
	console.log('Yay')
}

cowayWaterBad ? console.log('Yucky') : console.log('Yay')*/

/*let num = 30

if (num % 15 === 0) {
	console.log('fizz buzz')
} else if (num % 3 === 0) {
	console.log('fizz')
} else if (num % 5 === 0) {
	console.log('buzz')
} else {
	console.log(num)
}*/

/*for (let num = 1; num < 11; num++) {

	if (num === 1) {
		console.log(num + " dwarf in the elf's barrel")
	} else {
		console.log(num + " dwarfs in the elf's barrel")
	}

}*/


/*
for (let num = 1; num < 35; num++) {

	if (num % 15 === 0) {
		console.log('fizz buzz')
	} else if (num % 5 === 0) {
		console.log('fizz')
	} else if (num % 3 === 0) {
		console.log('buzz')
	} else {
		console.log(num)
	}
}
*/

/*let movies = ['Lord of the ring', 'Harry potter', 'Fantastic beast', 'Mr nobody', 'Life of Pi', 'Rurouni kenshin', 'Harry potter']*/

//let count = 0

/*console.log(movies.length)
console.log(movies[2])*/

/*for (let i = 0; i < movies.length; i++) {
	console.log(movies[i])
	if (movies[i] === 'Harry potter') {
		count = count + 1
		console.log(count)
	} 
}*/

 /*const user = [
 	{
 	name: 'Ammar',
 	id: 201941608,
 	dorm: 309
 	},
 	{
 	name: 'Hadi',
 	id: 2019509123,
 	dorm: 309
 	},
 	{
 	name: 'Yuzairi',
 	id: 2019435104,
 	dorm: 309
 	},
 	{
 	name: 'Danial',
 	id: 2019673048,
 	dorm: 309
    }
 ]

for (let i = 0; i < user.length; i++) {
	if (user[i].dorm === 309) {
		console.log('Hey! ' + user[i].name + ' welcome home.')
	} 
}*/

/*let name = ['Ammar', 'Yuzairi', 'Danial', 'Hadi'];

function sendText () {
	console.log('Hey ' + name[0] + ' how are you')
}*/

/*function sendReminder (name, time) {
	console.log('Hey ' + name + ' your meeting is at ' + time)
}

sendReminder ('Ammar', '2 PM');
sendReminder ('Yuzairi', '12 AM');
sendReminder ('Danial', '3 PM');
sendReminder ('Hadi', '10 AM');

*/

/*let name = 'Ammar'

let count = 1

function showAlert () {
	console.log(name + ', fly you fool!' + ' number ' + count)
	count += 1
}

showAlert()
showAlert()
showAlert()
*/






//Original code
/*const bob = document.querySelector('.face')

let count = 0

function moveBob() {
	count += 50
	console.log(count)
	bob.style.left = count + 'px'
}

bob.addEventListener('click', moveBob)*/




//first try
/*const bob = document.querySelector('.face')

let count = 0

function moveBobRight() {
	count += 50
	console.log(count)
	bob.style.left = count + 'px'
}

bob.addEventListener('click', moveBobRight) 

function moveBobLeft() {
	count += 50

	if (count === 1050) {
		bob.style.right = count + 'px'
	}
}


bob.addEventListener('click', moveBobLeft)*/





//To make bob return to original position
/*const bob = document.querySelector('.face')
let count = 0

function moveBob () {
	count += 50
	
	if (count <= 1050) {
		bob.style.left = count + 'px'
		console.log(count)
	} else {
		count -= 1102
		bob.style.left = count + 'px'
		console.log(count)
	}
}

bob.addEventListener('click', moveBob)*/




// Loops the short way
// While loops
/*let i = 1

while (i < 101) {
	console.log(i + ' cats walking on the streets')
	i++
}*/





// Use .concat
/*const myName = 'Ammar'
const word = 'So call up my name, '

console.log(word.concat(myName))


const word = 'I just need somebody to '
const verb = 'lean on'
const aWord = word.concat(verb)

console.log(aWord)


const num1 = [1, 2, 3]
const num2 = [4, 5, 6]
const num3 = [7, 8, 9]
const allNum = num1.concat(num2, num3)

console.log(allNum[0])*/


//Use .join
/*const textEditor = document.querySelector('.text')
const condition = ['Happy', ' Sad', ' Grumpy', ' Manic']

console.log(condition.join('-'))

textEditor.innerHTML = condition.join('-')*/





//Button to text
/*const textEditor = document.querySelector('.text')

let name = ['Yuzairie', ' Hadi', ' Danial', ' Ammar', ' Hadi']
let count = 0

function editText() {
	while (count < 4) {
	textEditor.innerHTML = 'Hello there! ' + name
	textEditor.style.fontSize = 16 + 'px'
	count++
}
}

document.addEventListener('click', editText)*/


/*let myName = window.prompt('What is your full name?')

console.log(myName)*/


//Bob face

   /*<div class="face">
		<div class="eye-container">
			<div class="eye">
				<div class="pupil"></div>
			</div>
			<div class="eye">
				<div class="pupil"></div>
			</div>
		</div>
	</div>*/

//	Email


/*function fullName() {
	let myName = document.getElementById('myName').value
	console.log('Hello, ' + myName)
}

function email() {
	let myEmail = document.getElementById('myEmail').value
	console.log('your email: ' + myEmail)
}

document.getElementById('submitBtn').onclick = fullName*/


//Email second attempt
/*const form = document.querySelector('.form')
const submitInput = form[0].querySelector('input[type="button"]');

function getDataFrom(e) {
	e.preventDefault();
	var formData = new FormData(form[0]);

	alert( formData.get('myName') + ' - ' + formData.get('myEmail'));
}


document.addEventListener('DOMContentLoaded' function(){
	submitInputaddEventListener('click', getDataFrom, false);
}, false);
*/

/*let name = prompt('Please enter your name. ');

if (name) {
	console.log(name);
} else if (!name) {
	alert(" You didn't enter any names...Please refresh the page")
}
*/



/*let authenticated = false;

let nextURL = authenticated ? alert('YO you in the site') : alert('Yo need password');
*/




//counter
let count = 0;
let num = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');

function increment() {
	count += 1
	num.innerHTML = count
	console.log(count)

	if (count % 200 === 0) {
		num.innerHTML = 'Gira! Gira!'
	} else if (count % 100 === 0) {
		num.innerHTML = 'A way to go!'
	} else if (count % 10 === 0) {
		num.innerHTML = 'Giddy up cowboy!'
	}
}



let greeting = 'Welcome back!'


function myName() {
	let welcomeEl = document.getElementById('welcome-el')
   let name = document.getElementById('name-el').value
	console.log(name)
   welcomeEl.innerHTML = greeting + ' ' + name;
   welcomeEl.innerHTML += ' 👏';
}


function save() {
	let counterStr = ' ' + count + ' - ';
	saveEl.innerHTML += counterStr;
	console.log('Save number' + ' ' + count)
}

function minusIncrement() {
	count = 0
	saveEl.innerHTML = 'Previous count: '
	num.innerHTML = count
	console.log(count)
}



