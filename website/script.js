// Michael Jackson Tribute - Vanilla JavaScript

// Album Data
const albums = [
    {
        name: "Off The Wall",
        year: 1979,
        sold: "20 million",
        certifications: "8x Platinum (US)",
        bestSong: "Don't Stop 'Til You Get Enough",
        chartPosition: "#3 US Billboard 200"
    },
    {
        name: "Thriller",
        year: 1982,
        sold: "70 million",
        certifications: "8x Platinum (US)",
        bestSong: "Billie Jean",
        chartPosition: "#1 US Billboard 200"
    },
    {
        name: "Bad",
        year: 1987,
        sold: "35 million",
        certifications: "9x Platinum (US)",
        bestSong: "Smooth Criminal",
        chartPosition: "#1 US Billboard 200"
    },
    {
        name: "Dangerous",
        year: 1991,
        sold: "32 million",
        certifications: "7x Platinum (US)",
        bestSong: "Black or White",
        chartPosition: "#1 US Billboard 200"
    },
    {
        name: "HIStory",
        year: 1995,
        sold: "20 million",
        certifications: "4x Platinum (US)",
        bestSong: "Earth Song",
        chartPosition: "#1 US Billboard 200"
    }
];

// Initialize Everything
document.addEventListener('DOMContentLoaded', () => {
    populateAlbums();
    createParticles();
    initSmoothScroll();
    initScrollAnimations();
});

// Populate Albums Section
function populateAlbums() {
    const albumsGrid = document.querySelector('.albums-grid');
    if (!albumsGrid) return;
    
    albums.forEach(album => {
        const albumCard = document.createElement('div');
        albumCard.className = 'album-card';
        albumCard.innerHTML = `
            <h3 class="album-name">${album.name}</h3>
            <p class="album-year">${album.year}</p>
            <div class="album-stats">
                <div class="stat-item">
                    <span class="stat-label">Sales</span>
                    <span class="stat-value">${album.sold}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Certification</span>
                    <span class="stat-value">${album.certifications}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Chart</span>
                    <span class="stat-value">${album.chartPosition}</span>
                </div>
            </div>
            <div class="best-song">
                <p class="best-song-label">Best Song</p>
                <p class="best-song-name">${album.bestSong}</p>
            </div>
        `;
        albumsGrid.appendChild(albumCard);
    });
}

// Create Floating Particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (6 + Math.random() * 4) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Smooth Scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Simple Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe timeline items
    document.querySelectorAll('.timeline-item').forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(item);
    });
    
    // Observe album cards
    document.querySelectorAll('.album-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Observe section titles
    document.querySelectorAll('.section-title').forEach(title => {
        title.style.opacity = '0';
        title.style.transform = 'translateY(20px)';
        title.style.transition = 'all 0.6s ease';
        observer.observe(title);
    });
}
