let slideIndex = 0;
    const slides = document.querySelectorAll('.video-slide');

    // Function to show the current slide
    function showSlide() {
        // Hide all slides
        slides.forEach(slide => {
            slide.style.display = 'none';
        });
        // Show the current slide
        slides[slideIndex].style.display = 'block';
    }

    // Function to change the slide
    function changeSlide(n) {
        slideIndex += n;
        // Wrap around when reaching the end
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        } else if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        }
        showSlide();
    }

    // Show the first slide when the page loads
    showSlide();