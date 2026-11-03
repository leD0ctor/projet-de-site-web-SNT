const bouton = document.getElementById("bouton_principale");
const palier1 = document.getElementById("palier1");
const palier2 = document.getElementById("palier2");
const palier3 = document.getElementById("palier3");
const prix1 = document.getElementById("prix1")
const prix2 = document.getElementById("prix2")
const prix3 = document.getElementById("prix3")
const bouton_triche = document.getElementById("triche")
let son1 = new Audio("boing.mp3")
let compteur = 0
let palier1verif = false
let palier2verif = false
let palier3verif = false
bouton.addEventListener("click", function() {
	compteur += 1
	son1.currentTime = 0;
	son1.play();
	const affiche = compteur
	document.getElementById("text").textContent = affiche;

});




palier1.addEventListener("click", function() {
	if (compteur >= 50){
		confetti({
		particleCount: 1200,
		spread: 180
		})
		compteur -= 50;
		palier1verif = true
		son1 = new Audio ("miaou.mp3");
		const affiche = compteur
		document.getElementById("text").textContent = affiche;
		palier1.remove()
		prix1.remove()
	}
});

setInterval(function(){
	if (palier1verif === true){
		compteur += 1;
		const affiche = compteur
		document.getElementById("text").textContent = affiche;
	}
}, 1000);


setInterval(function(){
	if (palier2verif === true){
		compteur += 10;
		const affiche = compteur
		document.getElementById("text").textContent = affiche;
	}
}, 1000);


setInterval(function(){
	if (palier3verif === true){
		compteur += 50;
		const affiche = compteur
		document.getElementById("text").textContent = affiche;
	}
}, 1000);



palier2.addEventListener("click", function() {
	if (compteur >= 300){
		compteur -= 300;
		confetti({
		particleCount: 1200,
		spread: 180
		})
		palier2verif = true
		son1 = new Audio ("wouaf.mp3");
		const affiche = compteur
		document.getElementById("text").textContent = affiche;
		palier2.remove()
		prix2.remove()
	}
});



palier3.addEventListener("click", function() {
	if (compteur >= 800){
		compteur -= 800;
		confetti({
		particleCount: 1200,
		spread: 180
		})
		palier3verif = true
		son1 = new Audio ("son_ourse.mp3");
		const affiche = compteur
		document.getElementById("text").textContent = affiche;
		palier3.remove()
		prix3.remove()
	}
});



triche.addEventListener("click", function() {
	compteur += 100
	const affiche = compteur
	document.getElementById("text").textContent = affiche;
});
