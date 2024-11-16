document.addEventListener('DOMContentLoaded', () => {
    // 獲取所有導航連結
    const navLinks = document.querySelectorAll('nav a');
    
    // 為每個連結添加點擊事件監聽器
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // 阻止默認跳轉行為
            
            // 獲取目標區塊的 id（去掉 # 符號）
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            // 平滑滾動到目標位置
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});

class Carousel {
    constructor(element) {
        this.carousel = element;
        this.container = element.querySelector('.carousel-container');
        this.slides = element.querySelectorAll('.carousel-slide');
        this.prevBtn = element.querySelector('.prev');
        this.nextBtn = element.querySelector('.next');
        this.dotsContainer = element.querySelector('.carousel-dots');
        
        this.currentIndex = 0;
        this.slideCount = this.slides.length;
        
        this.init();
    }
    
    init() {
        // 創建導航點
        this.createDots();
        
        // 綁定按鈕事件
        this.prevBtn.addEventListener('click', () => this.slide('prev'));
        this.nextBtn.addEventListener('click', () => this.slide('next'));
        
        // 自動播放
        this.startAutoPlay();
        
        // 滑鼠懸停時暫停自動播放
        this.carousel.addEventListener('mouseenter', () => this.stopAutoPlay());
        this.carousel.addEventListener('mouseleave', () => this.startAutoPlay());
    }
    
    createDots() {
        for (let i = 0; i < this.slideCount; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => this.goToSlide(i));
            this.dotsContainer.appendChild(dot);
        }
    }
    
    slide(direction) {
        if (direction === 'next') {
            this.currentIndex = (this.currentIndex + 1) % this.slideCount;
        } else {
            this.currentIndex = (this.currentIndex - 1 + this.slideCount) % this.slideCount;
        }
        this.updateCarousel();
    }
    
    goToSlide(index) {
        this.currentIndex = index;
        this.updateCarousel();
    }
    
    updateCarousel() {
        // 更新輪播位置
        this.container.style.transform = `translateX(-${this.currentIndex * 100}%)`;
        
        // 更新導航點狀態
        const dots = this.dotsContainer.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentIndex);
        });
    }
    
    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => this.slide('next'), 2000);
    }
    
    stopAutoPlay() {
        clearInterval(this.autoPlayInterval);
    }
}

// 初始化輪播
document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.ad-carousel');
    carousels.forEach(carousel => new Carousel(carousel));
});

document.addEventListener('DOMContentLoaded', () => {
    // 獲取所有加入購物車按鈕
    const addToCartButtons = document.querySelectorAll('.product-card button');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 跳轉到 7-11 賣貨便商品頁面
            window.location.href = 'https://myship.7-11.com.tw/general/detail/GM2411147095868';
        });
    });
});