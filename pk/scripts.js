function addToCart(productName) {
    alert(productName + ' has been added to your cart!');
}

let currentSlide = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    currentSlide = (currentSlide + step + totalSlides) % totalSlides;
    const offset = -currentSlide * 100;

    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function navigateToProducts() {
    window.location.href = 'products.html';
}
