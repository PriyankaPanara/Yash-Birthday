
  // 🔒 SECRET ANSWERS
const correctAnswer1 = "home";
const correctAnswer2 = "twisha";

document.addEventListener("DOMContentLoaded", () => {
    const answer1 = document.getElementById("answer1");
    const answer2 = document.getElementById("answer2");
    const unlockBtn = document.getElementById("unlockBtn");

    answer1.addEventListener("input", validate);
    answer2.addEventListener("input", validate);
    unlockBtn.addEventListener("click", checkPuzzle);

    unlockBtn.style.display = ""; // hide initially
});

function validate() {
    const a1El = document.getElementById("answer1");
    const a2El = document.getElementById("answer2");
    const err1 = document.getElementById("error1");
    const err2 = document.getElementById("error2");
    const unlockBtn = document.getElementById("unlockBtn");

    const a1 = a1El.value.trim().toLowerCase();
    const a2 = a2El.value.trim().toLowerCase();

    let valid1 = false;
    let valid2 = false;

    err1.innerText = "";
    err2.innerText = "";

    if (!a1) {
        err1.innerText = "Please answer the first question 💭";
    } else if (a1 === correctAnswer1) {
        valid1 = true;
    } else {
        err1.innerText = "First answer is wrong 💭";
    }

    if (!a2) {
        err2.innerText = "Please answer the second question ❤️";
    } else if (a2 === correctAnswer2) {
        valid2 = true;
    } else {
        err2.innerText = "Second answer is wrong ❤️";
    }

    unlockBtn.style.display = (valid1 && valid2) ? "block" : "";
}

function checkPuzzle() {
    const a1 = document.getElementById("answer1").value.trim().toLowerCase();
    const a2 = document.getElementById("answer2").value.trim().toLowerCase();

    if (a1 === correctAnswer1 && a2 === correctAnswer2) {
        window.location.href = "memories.html";
    }
}

function generateQR() {
    const link = window.location.href.split('#')[0] + "#birthday";
    const box = document.getElementById("qr-box");
    if (!box) return;
    box.innerHTML = "";
    const qrImg = document.createElement("img");
    qrImg.alt = "QR to birthday";
    qrImg.src =
        "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" +
        encodeURIComponent(link);
    box.appendChild(qrImg);
}

function openBirthday() {
    const qrScreen = document.getElementById("qr-screen");
    const birthday = document.getElementById("birthday");
    const gallery = document.getElementById("gallery");
    
    if (qrScreen) qrScreen.style.display = "none";
    if (birthday) birthday.style.display = "block";
    if (gallery) gallery.classList.remove("hidden");

    if (typeof startBirthdayAnimation === "function") {
        startBirthdayAnimation();
    }
}

function unlockSurprise() {
    console.log("Unlocking surprise...");
    const puzzle = document.getElementById("puzzle-screen");
    const qrScreen = document.getElementById("qr-screen");
    
    if (puzzle) puzzle.style.display = "none";
    if (qrScreen) qrScreen.style.display = "block";
}

const message =
    "Happy Birthday My Love ❤️\nYou are my bestiee,\nmy home,\nmy forever.";

function startBirthdayAnimation() {
    let i = 0;
    const textEl = document.getElementById("typing-text");
    if (!textEl) return;
    textEl.innerHTML = "";

    const interval = setInterval(() => {
        textEl.innerHTML += message.charAt(i);
        i++;
        if (i >= message.length) clearInterval(interval);
    }, 80);

    startConfetti();
}

function startConfetti() {
    const canvas = document.getElementById("confetti");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pieces = Array.from({ length: 150 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 6 + 2,
        dy: Math.random() * 3 + 1,
    }));

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "pink";

        pieces.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fill();
            p.y += p.dy;
            if (p.y > canvas.height) p.y = 0;
        });

        requestAnimationFrame(draw);
    }

    draw();
}

function showGallery() {
    const birthday = document.getElementById("birthday");
    const gallery = document.getElementById("gallery");
    if (birthday) birthday.style.display = "none";
    if (gallery) gallery.classList.remove("hidden");
}

function nextSection(id) {
    document.querySelectorAll('.card').forEach(card => card.classList.remove('active'));
    const el = document.getElementById(id);
    if (el) el.classList.add('active');
}

function lightCandle() {
    const candle = document.getElementById('candle');
    if (candle) candle.classList.add('lit');
    const lightBtn = document.getElementById('lightBtn');
    if (lightBtn) lightBtn.innerText = "It's lit! ✨";
    const cakeNext = document.getElementById('cakeNext');
    if (cakeNext) cakeNext.classList.remove('hidden');
}

let poppedCount = 0;
let fullMessage = [];

function pop(element, word) {
    if (!element) return;
    element.style.visibility = 'hidden';
    fullMessage.push(word);
    poppedCount++;

    const hiddenMsg = document.getElementById('hidden-msg');
    if (hiddenMsg) hiddenMsg.innerText = fullMessage.join(" ");

    if (poppedCount === 4) {
        alert("Happy Birthday to the best husband! 🎂❤️");
    }
}
document.addEventListener('DOMContentLoaded', function () {
    createParticles();
    initializeAnimations();
    setupScrollAnimations();
});

// Create floating particles
function createParticles() {
    const particles = document.getElementById('particles');
    const particleEmojis = ['❤️', '💕', '💖', '💗', '🌸', '🌺', '✨', '💫', '🦋'];

    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.innerHTML = particleEmojis[Math.floor(Math.random() * particleEmojis.length)];

        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';

        // Random animation duration and delay
        particle.style.animationDuration = (Math.random() * 3 + 4) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';

        particles.appendChild(particle);
    }
}

// Initialize typewriter and other animations
function initializeAnimations() {
    // Typewriter effect is handled by CSS

    // Add staggered animation delays to elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((element, index) => {
        element.style.animationDelay = (index * 0.2) + 's';
    });
}

// Scroll animations (AOS - Animate On Scroll)
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');

                // Special handling for message text
                if (entry.target.classList.contains('message-card')) {
                    animateMessageText();
                }
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    const elementsToObserve = document.querySelectorAll('[data-aos], .section-title, .message-card');
    elementsToObserve.forEach(element => {
        observer.observe(element);

        // Add delay based on data-delay attribute
        const delay = element.getAttribute('data-delay');
        if (delay) {
            element.style.transitionDelay = delay + 'ms';
        }
    });
}

// Animate message text with staggered effect
function animateMessageText() {
    const messageTexts = document.querySelectorAll('.message-text');
    messageTexts.forEach((text, index) => {
        setTimeout(() => {
            text.classList.add('fade-in-animate');
        }, index * 500);
    });
}

// Smooth scroll to sections
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Toggle like functionality for photos
function toggleLike(button) {
    const heartIcon = button.querySelector('.heart-icon');
    button.classList.toggle('liked');

    if (button.classList.contains('liked')) {
        heartIcon.textContent = '❤️';
        // Create floating heart effect
        createFloatingHeart(button);
    } else {
        heartIcon.textContent = '🤍';
    }
}

// Create floating heart animation when photo is liked
function createFloatingHeart(button) {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'absolute';
    heart.style.fontSize = '1.5rem';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '1000';

    const rect = button.getBoundingClientRect();
    heart.style.left = rect.left + 'px';
    heart.style.top = rect.top + 'px';

    document.body.appendChild(heart);

    // Animate the heart
    heart.animate([
        { transform: 'translateY(0px) scale(1)', opacity: 1 },
        { transform: 'translateY(-60px) scale(1.5)', opacity: 0 }
    ], {
        duration: 1500,
        easing: 'ease-out'
    }).onfinish = () => {
        document.body.removeChild(heart);
    };
}

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const parallaxSpeed = 0.5;

    if (hero) {
        hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    }

    // Update particles position based on scroll
    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle, index) => {
        const speed = 0.2 + (index % 3) * 0.1;
        particle.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add mouse movement effect to hero section
document.addEventListener('mousemove', (e) => {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    // Subtle movement effect
    const moveX = (x - 0.5) * 20;
    const moveY = (y - 0.5) * 20;

    const floatingHearts = document.querySelector('.floating-hearts');
    if (floatingHearts) {
        floatingHearts.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
});

// Add click effect to buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;

        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add entrance animations for photos when they come into view
const photoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target.querySelector('img');
            if (img) {
                img.style.animation = 'photoEnter 0.8s ease-out forwards';
            }
        }
    });
}, { threshold: 0.2 });

// Observe all photo cards
document.querySelectorAll('.photo-card').forEach(card => {
    photoObserver.observe(card);
});

// Add photo enter animation
const photoStyle = document.createElement('style');
photoStyle.textContent = `
    @keyframes photoEnter {
        from {
            transform: scale(0.8) rotate(-5deg);
            opacity: 0;
        }
        to {
            transform: scale(1) rotate(0deg);
            opacity: 1;
        }
    }
`;
document.head.appendChild(photoStyle);


// ❤️ Heart Counter (Max 100)
document.addEventListener("DOMContentLoaded", () => {
    let heartValue = 0;
    const maxHearts = 100;

    const heartBtn = document.getElementById("heartBtn");
    const heartCount = document.getElementById("heartCount");
    const heartIcon = document.getElementById("heartIcon");

    if (!heartBtn || !heartCount || !heartIcon) return;

    heartBtn.addEventListener("click", () => {
        if (heartValue < maxHearts) {
            heartValue++;
            heartCount.textContent = heartValue;

            // Fill heart
            heartIcon.classList.remove("far");
            heartIcon.classList.add("fas");

            // Small pop animation
            heartBtn.style.transform = "scale(1.2)";
            setTimeout(() => {
                heartBtn.style.transform = "scale(1)";
            }, 150);

            // 🎉 Special moment at 100
            if (heartValue === 19) {
                alert("💖 19 Feb! That means infinite love 💖");
            }
        }
    });
});
