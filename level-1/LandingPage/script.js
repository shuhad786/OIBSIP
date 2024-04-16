function setActiveSection() {
    var sections = document.querySelectorAll('section');

    sections.forEach(function(section) {
        var rect = section.getBoundingClientRect();
        
        if (rect.top <= 300 && rect.bottom >= 10) {
            
            var h1Elements = document.querySelectorAll('h1');
            h1Elements.forEach(function (element) {
                element.classList.remove('underline-h1');
            });

            // Add underline class to the h1 tag in the specified section
            var h1InSection = section.querySelector('h1');
            if (h1InSection) {
                h1InSection.classList.add('underline-h1');
            }
        }
    });
}

// Call setActiveSection when the page is scrolled
window.addEventListener('scroll', setActiveSection);

