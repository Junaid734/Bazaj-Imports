function contactSeller(carName) {
    alert(`You can contact the seller for ${carName} via email or phone.`);
}

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent! We will get back to you soon.');
});

<script>
let currentSlide = 0; // Track the current slide
const slides = document.querySelectorAll('.carousel-image');
</script>





function showSlide(index) {
    if (index >= slides.length) {
        currentSlide = 0; // Reset to first slide
    } else if (index < 0) {
        currentSlide = slides.length - 1; // Go to last slide
    } else {
        currentSlide = index; // Set to the current index
    }
    
    const offset = -currentSlide * 100; // Calculate offset
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`; // Move to the correct slide
}

function moveSlide(direction) {
    showSlide(currentSlide + direction); // Show the next or previous slide
}

function showCarDetails(carName, price, imageSrc) {
    document.getElementById('modalCarName').innerText = carName;
    document.getElementById('modalCarPrice').innerText = `Price: ${price}`;
    document.getElementById('modalCarImage').innerHTML = `<img src="${imageSrc}" alt="${carName}" class="car-image">`;
    
    // Add a description if you have it
    document.getElementById('modalCarDescription').innerText = "Detailed description of the car goes here.";
    
    document.getElementById('carModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('carModal').style.display = 'none';
}

// Update the car images to include an onclick event
document.querySelectorAll('.car-image').forEach(image => {
    image.addEventListener('click', () => {
        const carItem = image.closest('.car-item');
        const carName = carItem.querySelector('h3').innerText;
        const price = carItem.querySelector('.price').innerText;
        const imageSrc = image.src;

        showCarDetails(carName, price, imageSrc);
    });
});


// Initialize the first slide
showSlide(currentSlide);


