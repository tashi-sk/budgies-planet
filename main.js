
const hamBtn = document.querySelector('#hamburger');
const sideBar = document.querySelector('#side');



hamBtn.onclick = function () {
 
  if (sideBar.classList.contains('sidepush')) {
    console.log('worked')
    sideBar.classList.remove('sidepush');
    sideBar.classList.add('sidepull');
   hamBtn.classList.add('hamBtn-open');
  }
  else {
    sideBar.classList.add('sidepush');
    sideBar.classList.remove('sidepull');
    hamBtn.classList.remove('hamBtn-open');
  }
}
// login form 
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

