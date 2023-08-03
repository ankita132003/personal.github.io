//  Expand height-->
var navbarToggler = document.getElementById('navbar-toggler');
var background = document.getElementById('background');

navbarToggler.addEventListener('click', function() {
  background.classList.toggle('expanded');
});


// For active links-->

var navLinks = document.querySelectorAll('.nav-link');

// Add click event listener to each navbar link
navLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    // Prevent default link behavior
    event.preventDefault();
    
    // Remove active class from all navbar links
    navLinks.forEach(function(link) {
      link.classList.remove('active');
    });
    
    // Add active class to the clicked navbar link
    link.classList.add('active');
  });
});


// switch on click nav-items-->
var navLinks = document.querySelectorAll('.nav-link');
var sections = document.querySelectorAll('section');

// Hide all sections except for the initially active section
sections.forEach(function(section) {
  if (section.id === 'home') {
    section.style.display = 'block';
  } else {
    section.style.display = 'none';
  }
});

// Add click event listener to each navbar link
navLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    // Prevent default link behavior
    event.preventDefault();
    
    // Get the target section from the data-target attribute
    var target = link.getAttribute('href');
    
    // Hide all sections
    sections.forEach(function(section) {
      section.style.display = 'none';
    });
    document.getElementById(target).style.display = 'block';
});

});


var aboutSection = document.getElementById('about');
var background = document.getElementById('background');
 aboutSection.addEventListener( function(){
    background.classList.toggle('increase');
 })


 // Function to animate skills
function animateSkills() {
    const skillProgressBars = document.querySelectorAll('.skill-progress');
    skillProgressBars.forEach((progressBar) => {
      const skillValue = progressBar.getAttribute('data-value');
      progressBar.style.width = skillValue + '%';
    });
  }
  
  // Call the animateSkills function
  animateSkills();