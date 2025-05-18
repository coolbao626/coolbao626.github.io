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
        name: "客製化寵物棉花糖泡泡碗",
        price: "700",
        url: "https://myship.7-11.com.tw/general/detail/GM2411147095868",
        description: "客製化寵物棉花糖泡泡碗，可以根據您的需求進行設計和製作。",
        img: "assets/product-4.jpg",
    },
    {
        name: "一般款 似顏繪馬克杯",
        price: "單杯入：350 對杯：660",
        url: "https://myship.7-11.com.tw/general/detail/GM2411147095868",
        description: "一般款與生日款皆可選色，杯體本身有奶油色與白色。<br>拼色把手的部分僅能搭配白色杯體，拼色把手的部分共有紅、橘、黃、綠、藍",
        img: "assets/product-5.jpg",
    },
    {
        name: "生日款 似顏繪馬克杯",
        price: "單杯入：450 對杯：800",
        url: "https://myship.7-11.com.tw/general/detail/GM2411147095868",
        description: "一般款與生日款皆可選色，杯體本身有奶油色與白色。<br>拼色把手的部分僅能搭配白色杯體，拼色把手的部分共有紅、橘、黃、綠、藍",
        img: "assets/product-6.jpg",
    },
    {
        name: "雙肩後背包（牛津布系列）",
        price: "NT$ 750",
        url: "https://myship.7-11.com.tw/general/detail/GM2411147095868",
        description: "多暗袋側面可裝水壺/長：31CM、寬：10CM、高：38CM/可裝筆電平板",
        img: "assets/product-7.png",
    },
    {
        name: "雙肩後背包（耐磨布系列）",
        price: "NT$ 750",
        url: "https://myship.7-11.com.tw/general/detail/GM2411147095868",
        description: "防刮防水側面可裝水壺/長：29CM、寬：13CM、高：39CM/可裝筆電平板",
        img: "assets/product-8.png",
    },
    {
        name: "亮面舒芙蕾碗（含似顏繪客製化）",
        price: "單層 NT$ 650/雙層 NT$ 700",
        url: "https://myship.7-11.com.tw/general/detail/GM2411147095868",
        description: "可選擇單層或雙層，並可根據您的需求進行設計和製作。<br>若需要高溫燒製款需要加價 $250。",
        img: "assets/product-9.png",
    },
    {
        name: "霧面舒芙蕾碗（含似顏繪客製化）",
        price: "單層 NT$ 650/雙層 NT$ 700",
        url: "https://myship.7-11.com.tw/general/detail/GM2411147095868",
        description: "可選擇單層或雙層，並可根據您的需求進行設計和製作。<br>若需要高溫燒製款需要加價 $250。",
        img: "assets/product-10.png",
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

    // Gallery functionality
    const modal = document.getElementById('galleryModal');
    const dmButton = document.getElementById('dmButton');
    const closeBtn = document.querySelector('.close');
    const galleryContainer = document.querySelector('.gallery-container');
    const prevPageBtn = document.querySelector('.prev-page');
    const nextPageBtn = document.querySelector('.next-page');

    let currentPage = 0;
    const items = document.querySelectorAll('.gallery-item');
    const totalItems = items.length;

    // Show modal
    dmButton.onclick = function() {
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Prevent scrolling
        updateGalleryVisibility();
    }

    // Close modal
    closeBtn.onclick = function() {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Enable scrolling
    }

    // Close modal when clicking outside
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    }

    // Update gallery visibility based on current page
    function updateGalleryVisibility() {
        items.forEach((item, index) => {
            if (index === currentPage) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        // Update button states
        prevPageBtn.disabled = currentPage === 0;
        nextPageBtn.disabled = currentPage === totalItems - 1;
    }

    // Previous page
    prevPageBtn.onclick = function() {
        if (currentPage > 0) {
            galleryContainer.classList.add('sliding-out');
            setTimeout(() => {
                currentPage--;
                updateGalleryVisibility();
                galleryContainer.classList.remove('sliding-out');
                galleryContainer.classList.add('sliding');
                setTimeout(() => {
                    galleryContainer.classList.remove('sliding');
                }, 500);
            }, 500);
        }
    }

    // Next page
    nextPageBtn.onclick = function() {
        if (currentPage < totalItems - 1) {
            galleryContainer.classList.add('sliding-out');
            setTimeout(() => {
                currentPage++;
                updateGalleryVisibility();
                galleryContainer.classList.remove('sliding-out');
                galleryContainer.classList.add('sliding');
                setTimeout(() => {
                    galleryContainer.classList.remove('sliding');
                }, 500);
            }, 500);
        }
    }

    // Initialize gallery visibility
    updateGalleryVisibility();
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

// 新增懸浮按鈕樣式
const style = document.createElement('style');
style.textContent = `
    .floating-chat-btn {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #E1306C;  /* Instagram 品牌色 */
        color: white;
        padding: 15px 25px;
        border-radius: 30px;
        text-decoration: none;
        box-shadow: 0 2px 12px rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
        gap: 10px;
        z-index: 1000;
        transition: all 0.3s ease;
    }

    .floating-chat-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 16px rgba(0,0,0,0.3);
        background-color: #C13584;  /* Instagram 深色 */
    }

    .floating-chat-btn i {
        font-size: 24px;
    }

    .floating-chat-btn span {
        font-weight: bold;
    }
`;
document.head.appendChild(style);