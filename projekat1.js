//NASLOV
let naslov = document.querySelector('h1')
naslov.addEventListener("mousemove", (h1) => {
	naslov.style.color = '#005580'
})

//LINIJA
let linija = document.querySelector('.linija')
let animacija = 0
window.onscroll = () => {
	if (this.oldScroll > this.scrollY) {
		animacija -= 1.5
	} else{
		animacija += 1.5
	}
	if (animacija >= 100) {
		animacija = 100
	}
	if (animacija <= 0) {
		animacija = 0
	}
	linija.style.width = animacija + '%'
	this.oldScroll = this.scrollY
}

//GALERIJA
let desnibtn = document.querySelector('#right-btn')
let levibtn = document.querySelector('#left-btn')
let slike = document.querySelectorAll('.slider-images img')
let brojslika = 0
desnibtn.addEventListener("click", () => {
	display()
	brojslika++
	if (brojslika === slike.length) {
		brojslika = 0
	}
	slike[brojslika].style.display = 'block'
})
levibtn.addEventListener("click", () => {
	display()
	brojslika--
	if (brojslika === -1) {
		brojslika = slike.length -1
	}
	slike[brojslika].style.display = 'block'
})
const display = () => {
	slike.forEach((img) => {
		img.style.display = 'none'
	})
}

//KALKULATOR
function Calculator() {
	let stopa = document.querySelector('#stopa')
	let cena = document.querySelector('#cena')
	let godina = document.querySelector('#godine').value
	stopa = parseFloat(stopa.value)
	cena = parseFloat(cena.value)
	godina = parseFloat(godina)
	let meseci = godina * 12
	let rata = ((stopa/100)*cena)
	let ukupno = 0
	for (var i = 0; i < godina; i++) {
		ukupno = (rata * godina)+cena
	}
	let mesecnaRata = ukupno / meseci;
	mesecnaRata = mesecnaRata.toFixed(2)
	let dodaj1 = document.createElement('p')
	dodaj1.innerText = `Mesecna rata je ${mesecnaRata} €`
	let d = document.querySelector('.div')
	d.appendChild(dodaj1)
	let dodaj = document.createElement('p')
	dodaj.innerText = `Ukupan iznos za vracanje je ${ukupno} €`
	let div = document.querySelector('.div')
	div.appendChild(dodaj)
}