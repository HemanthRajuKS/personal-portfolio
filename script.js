// typing animation
const words="Web Developer | Software Engineer | Tech Enthusiast";
let i=0;

function typing(){
if(i<words.length){
document.getElementById("typing").innerHTML+=words.charAt(i);
i++;
setTimeout(typing,50);
}
}

// dark mode
function toggleMode(){
document.body.classList.toggle("light");
// Save preference to localStorage
localStorage.setItem("theme", document.body.classList.contains("light") ? "light" : "dark");
updateParticleColor();
}

// Load saved theme on page load
function loadTheme(){
const savedTheme = localStorage.getItem("theme");
if(savedTheme === "light"){
document.body.classList.add("light");
}
}

// particles config
function initParticles(isLightMode = false){
if(typeof particlesJS !== 'undefined'){
const particleColor = "#ffffff"; // Always white
particlesJS("particles-js",{
particles:{
number:{value:80},
size:{value:3},
move:{speed:2},
line_linked:{enable:true},
color:{value:particleColor},
},
});
}
}

function updateParticleColor(){
if(typeof pJSDom !== 'undefined' && pJSDom.length > 0){
pJSDom[0].pJS.particles.color.value = "#ffffff"; // Always white
pJSDom[0].pJS.fn.particlesUpdate();
}
}

// Initialize
loadTheme(); // Load saved theme preference

if(document.getElementById("typing")){
typing();
}

if(document.getElementById("particles-js")){
const isLightMode = document.body.classList.contains("light");
if(typeof particlesJS !== 'undefined'){
initParticles(isLightMode);
}else{
window.addEventListener('load',() => initParticles(isLightMode));
}
}

// Modal functions
function showProjectDetails(title, description){
document.getElementById("modalTitle").innerText = title;
document.getElementById("modalDescription").innerText = description;
document.getElementById("projectModal").style.display = "block";
}

function closeModal(){
document.getElementById("projectModal").style.display = "none";
}

// Close modal when clicking outside
window.onclick = function(event){
const modal = document.getElementById("projectModal");
if(event.target == modal){
modal.style.display = "none";
}
}
