// MOBILE NAVIGATION
const hamburgerIcon = document.querySelector(".hamburger-icon")
const closeIcon = document.querySelector(".close-icon")
const mobileContent = document.querySelector(".mobile-content")

	hamburgerIcon.addEventListener("click", function() {
		
			mobileContent.style.display = "flex";
				closeIcon.style.display = "block"
				hamburgerIcon.style.display = "none"
		})
		
	closeIcon.addEventListener("click", function() {
		
		mobileContent.style.display = "none"
		closeIcon.style.display = "none"
		hamburgerIcon.style.display = "flex"
	})



// MODAL
let modal = document.getElementById("myModal");
let btn = document.getElementById('myBtn');
let span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
	modal.style.display = "block";
}
span.onclick = function() {
	modal.style.display = "none";
}
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}






// window.onclick = function(e) {
//   if (!e.target.matches('.dropbtn')) {
//   let myDropdown = document.getElementById("myDropdown");
//     if (myDropdown.classList.contains('show')) {
//       myDropdown.classList.remove('show');
//     }
//   }
// }

