var product_details = [
    {
        name: "客製化陶瓷盤",
        price: "(S) 280/(L) 300",
        url: "https://myship.7-11.com.tw/general/detail/GM2411147095868",
        description: "客製化陶瓷盤，可以根據您的需求進行設計和製作。<br>\
        碗盤任搭滿三件折$100。",
        spec:"尺寸：大：直徑 19cm，小：直徑 17cm",
        img: "assets/product-1.jpg",
    },
    {
        name: "客製化陶瓷碗",
        price: "(S)250/(L) 280",
        url: "https://myship.7-11.com.tw/general/detail/GM2411147095868",
        description: "客製化陶瓷碗，可以根據您的需求進行設計和製作。<br>\
        碗盤任搭滿三件折$100。",
        spec:"尺寸：大：直徑 15cm，小：直徑 11.5cm",
        img: "assets/product-2.png",
    },
    {
        name: "客製化寵物高腳碗",
        price: "580",
        url: "https://myship.7-11.com.tw/general/detail/GM2411147095868",
        description: "客製化寵物高腳碗，可以根據您的需求進行設計和製作。",
        img: "assets/product-3.jpg",
    },
    {
        name: "春節限定產品（春聯/紅包袋）",
        price: "150/420",
        url: "https://myship.7-11.com.tw/general/detail/GM2411147095868",
        description: "春聯有四款設計可選，第一件 $150，每多一件加 $70。<br>紅包袋包含照片款X3+似顏繪款X3，一組 6 袋 $420。",
        img: "assets/product-4.jpg",
    },
    {
        name: "客製化寵物似顏繪",
        price: "100",
        url: "https://myship.7-11.com.tw/general/detail/GM2411147095868",
        description: "客製化寵物似顏繪，可以根據您的需求進行設計和製作（商品預覽圖為節日限定版本，目前暫停接單）。<br>寵物配件需按件數計費，細節請向小編確認。",
        img: "assets/product-5.jpg",
    },
];

function add_to_cart(index) {
    window.location.href = product_details[index].url;
}

function see_details(index) {
    // show a dialog with the product details
    var dialog = document.createElement("dialog");
    dialog.classList.add("product-dialog");
    dialog.innerHTML = `
    <h2>商品名稱：${product_details[index].name}</h2>
    <p>價格：${product_details[index].price}</p>
    <p>商品描述：${product_details[index].description}</p>
    `;
    if (product_details[index].spec) {
        dialog.innerHTML += `<p>規格：${product_details[index].spec}</p>`;
    }
    document.body.appendChild(dialog);
    var close_button = document.createElement("button");
    close_button.classList.add("close-button");
    close_button.innerHTML = "關閉";
    close_button.onclick = function() {
        dialog.close();
    };
    dialog.appendChild(close_button);
    dialog.showModal();
}

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