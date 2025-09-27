var product_details = [
    {
        name: "客製化陶瓷盤",
        price: "(S) 280/(L) 300",
        url: "https://myship.7-11.com.tw/general/detail/GM2411147095868",
        description: "客製化陶瓷盤，可以根據您的需求進行設計和製作。<br>\
        碗盤任搭滿三件折$100。",
        spec:"尺寸：大：直徑 19cm，小：直徑 17cm",
        img: "assets/product-1.webp",
    },
    {
        name: "客製化陶瓷碗",
        price: "(S)250/(L) 280",
        url: "https://myship.7-11.com.tw/general/detail/GM2411147095868",
        description: "客製化陶瓷碗，可以根據您的需求進行設計和製作。<br>\
        碗盤任搭滿三件折$100。",
        spec:"尺寸：大：直徑 15cm，小：直徑 11.5cm",
        img: "assets/product-2.webp",
    },
    {
        name: "客製化寵物高腳碗",
        price: "580",
        url: "https://myship.7-11.com.tw/general/detail/GM2411147095868",
        description: "客製化寵物高腳碗，可以根據您的需求進行設計和製作。",
        img: "assets/product-3.webp",
    },
    {
        name: "客製化寵物棉花糖泡泡碗",
        price: "700",
        url: "https://myship.7-11.com.tw/general/detail/GM2411147095868",
        description: "客製化寵物棉花糖泡泡碗，可以根據您的需求進行設計和製作。",
        img: "assets/product-4.webp",
    },
    {
        name: "一般款 似顏繪馬克杯",
        price: "單杯入：350 對杯：660",
        url: "https://myship.7-11.com.tw/general/detail/GM2411147095868",
        description: "一般款與生日款皆可選色，杯體本身有奶油色與白色。<br>拼色把手的部分僅能搭配白色杯體，拼色把手的部分共有紅、橘、黃、綠、藍",
        img: "assets/product-5.webp",
    },
    {
        name: "生日款 似顏繪馬克杯",
        price: "單杯入：450 對杯：800",
        url: "https://myship.7-11.com.tw/general/detail/GM2411147095868",
        description: "一般款與生日款皆可選色，杯體本身有奶油色與白色。<br>拼色把手的部分僅能搭配白色杯體，拼色把手的部分共有紅、橘、黃、綠、藍",
        img: "assets/product-6.webp",
    },
    {
        name: "雙肩後背包（牛津布系列）",
        price: "NT$ 750",
        url: "https://myship.7-11.com.tw/general/detail/GM2411147095868",
        description: "多暗袋側面可裝水壺/長：31CM、寬：10CM、高：38CM/可裝筆電平板",
        img: "assets/product-7.webp",
    },
    {
        name: "雙肩後背包（耐磨布系列）",
        price: "NT$ 750",
        url: "https://myship.7-11.com.tw/general/detail/GM2411147095868",
        description: "防刮防水側面可裝水壺/長：29CM、寬：13CM、高：39CM/可裝筆電平板",
        img: "assets/product-8.webp",
    },
    {
        name: "亮面舒芙蕾碗（含似顏繪客製化）",
        price: "單層 NT$ 650/雙層 NT$ 700",
        url: "https://myship.7-11.com.tw/general/detail/GM2411147095868",
        description: "可選擇單層或雙層，並可根據您的需求進行設計和製作。<br>若需要高溫燒製款需要加價 $250。",
        img: "assets/product-9.webp",
    },
    {
        name: "霧面舒芙蕾碗（含似顏繪客製化）",
        price: "單層 NT$ 650/雙層 NT$ 700",
        url: "https://myship.7-11.com.tw/general/detail/GM2411147095868",
        description: "可選擇單層或雙層，並可根據您的需求進行設計和製作。<br>若需要高溫燒製款需要加價 $250。",
        img: "assets/product-10.webp",
    },
    {
        name: "帆布包（含似顏繪客製化）",
        price: "NT$ 650（雙面印製 +100）",
        url: "https://myship.7-11.com.tw/general/detail/GM2411147095868",
        description: "可選擇單面或雙面，並可根據您的需求進行設計和製作。",
        img: "assets/product-11.webp",
    },
    {
        name: "帆布包（含似顏繪客製化）",
        price: "NT$ 700（+100）",
        url: "https://myship.7-11.com.tw/general/detail/GM2411147095868",
        description: "可選擇單面或雙面，並可根據您的需求進行設計和製作。",
        img: "assets/product-12.webp",
    },
    {
        name: "乳酪碗",
        price: "NT$ 950",
        url: "https://myship.7-11.com.tw/general/detail/GM2411147095868",
        description: "根據您的需求進行設計和製作的精緻寵物碗。",
        img: "assets/product-13.webp",
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
    const book = document.querySelector('.book');
    const leftPage = document.querySelector('.left-page .page-content');
    const rightPage = document.querySelector('.right-page .page-content');
    const flipPage = document.querySelector('.flip-page');
    const flipPageFront = document.querySelector('.flip-page .front');
    const flipPageBack = document.querySelector('.flip-page .back');
    const prevPageBtn = document.querySelector('.prev-page');
    const nextPageBtn = document.querySelector('.next-page');
    const currentPagesSpan = document.querySelector('.current-pages');

    // 圖片資料
    const images = [
        { src: 'dm/1.webp', alt: '客製化寵物高腳碗' },
        { src: 'dm/2.webp', alt: '客製化寵物棉花糖泡泡碗' },
        { src: 'dm/3.webp', alt: '舒芙蕾碗' },
        { src: 'dm/4.webp', alt: '奢華寵物碗' },
        { src: 'dm/5.webp', alt: '馬克杯' },
        { src: 'dm/6.webp', alt: '帆布袋' },
        { src: 'dm/7.webp', alt: '雙肩後背包' },
        { src: 'dm/8.webp', alt: '吊飾' },
        { src: 'dm/9.webp', alt: '吊飾' },
        { src: 'dm/10.webp', alt: '吊飾' },
        { src: 'dm/11.webp', alt: '吊飾' },
        { src: 'dm/12.webp', alt: '吊飾' },
        { src: 'dm/13.webp', alt: '吊飾' },
        { src: 'dm/14.webp', alt: '吊飾' },
    ];

    let currentSpread = 0; // 當前跨頁（每個跨頁包含兩頁）
    const totalSpreads = Math.ceil(images.length / 2);
    let isFlipping = false;
    
    console.log('初始化 - 圖片總數:', images.length, '總跨頁數:', totalSpreads);

    // Show modal
    dmButton.onclick = function() {
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        currentSpread = 0;
        isFlipping = false;
        console.log('開啟模態框，重置為第一跨頁');
        updateBookPages();
    }

    // Close modal
    closeBtn.onclick = function() {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }

    // Close modal when clicking outside
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    }

    // 更新書本頁面內容（完整更新）
    function updateBookPages() {
        const leftPageIndex = currentSpread * 2;
        const rightPageIndex = currentSpread * 2 + 1;

        console.log('更新頁面，當前跨頁:', currentSpread, '左頁索引:', leftPageIndex, '右頁索引:', rightPageIndex);

        // 更新左頁
        const leftImg = leftPage.querySelector('img');
        if (leftPageIndex < images.length) {
            leftImg.src = images[leftPageIndex].src;
            leftImg.alt = images[leftPageIndex].alt;
            leftImg.style.display = 'block';
            leftImg.style.opacity = '1'; // 確保透明度正常
        } else {
            leftImg.style.display = 'none';
        }

        // 更新右頁
        const rightImg = rightPage.querySelector('img');
        if (rightPageIndex < images.length) {
            rightImg.src = images[rightPageIndex].src;
            rightImg.alt = images[rightPageIndex].alt;
            rightImg.style.display = 'block';
            rightImg.style.opacity = '1'; // 確保透明度正常
        } else {
            rightImg.style.display = 'none';
        }

        updatePageIndicatorAndButtons();
    }

    // 部分更新（只更新左頁、指示器和按鈕，右頁已在動畫中提前更新）
    function updateBookPagesPartial() {
        const leftPageIndex = currentSpread * 2;

        console.log('部分更新，當前跨頁:', currentSpread, '左頁索引:', leftPageIndex);

        // 更新左頁
        const leftImg = leftPage.querySelector('img');
        if (leftPageIndex < images.length) {
            leftImg.src = images[leftPageIndex].src;
            leftImg.alt = images[leftPageIndex].alt;
            leftImg.style.display = 'block';
            leftImg.style.opacity = '1'; // 確保透明度正常
        } else {
            leftImg.style.display = 'none';
        }

        updatePageIndicatorAndButtons();
    }

    // 更新頁碼指示器和按鈕狀態
    function updatePageIndicatorAndButtons() {
        // 更新頁碼指示器
        const startPage = currentSpread * 2 + 1;
        const endPage = Math.min(startPage + 1, images.length);
        currentPagesSpan.textContent = startPage === endPage ? startPage : `${startPage}-${endPage}`;

        console.log('頁碼指示器:', currentPagesSpan.textContent);

        // 更新按鈕狀態
        if (currentSpread === 0 || isFlipping) {
            prevPageBtn.disabled = true;
            prevPageBtn.setAttribute('disabled', 'true');
        } else {
            prevPageBtn.disabled = false;
            prevPageBtn.removeAttribute('disabled');
        }
        
        if (currentSpread >= totalSpreads - 1 || isFlipping) {
            nextPageBtn.disabled = true;
            nextPageBtn.setAttribute('disabled', 'true');
        } else {
            nextPageBtn.disabled = false;
            nextPageBtn.removeAttribute('disabled');
        }
        
        console.log('按鈕狀態 - 上一頁:', prevPageBtn.disabled, '下一頁:', nextPageBtn.disabled);
        console.log('currentSpread:', currentSpread, 'totalSpreads:', totalSpreads, 'totalSpreads-1:', totalSpreads - 1);
    }

    // 翻頁到下一跨頁
    function flipToNext() {
        console.log('嘗試翻到下一頁，檢查條件：');
        console.log('isFlipping:', isFlipping);
        console.log('currentSpread:', currentSpread, 'totalSpreads:', totalSpreads);
        console.log('currentSpread >= totalSpreads - 1:', currentSpread >= totalSpreads - 1);
        
        if (isFlipping || currentSpread >= totalSpreads - 1) {
            console.log('翻頁被阻止');
            return;
        }
        
        isFlipping = true;
        
        console.log('開始翻頁，翻頁前 currentSpread:', currentSpread);
        console.log('總跨頁數:', totalSpreads);
        
        // 當前跨頁：n+0, n+1
        // 下一跨頁：n+2, n+3
        const currentRightIndex = currentSpread * 2 + 1; // n+1
        const nextLeftIndex = (currentSpread + 1) * 2;   // n+2
        
        console.log('當前右頁索引:', currentRightIndex, '下一左頁索引:', nextLeftIndex);
        
        // 設置翻頁元素
        const frontImg = flipPageFront.querySelector('img');
        const backImg = flipPageBack.querySelector('img');
        
        // 正面：當前右頁 (n+1)
        if (currentRightIndex < images.length) {
            frontImg.src = images[currentRightIndex].src;
            frontImg.alt = images[currentRightIndex].alt;
        }
        
        // 背面：下一跨頁的左頁 (n+2)
        if (nextLeftIndex < images.length) {
            backImg.src = images[nextLeftIndex].src;
            backImg.alt = images[nextLeftIndex].alt;
        }
        
        // 顯示翻頁元素
        flipPage.style.display = 'block';
        
        // 強制重排後開始動畫
        requestAnimationFrame(() => {
            flipPage.classList.add('flipping');
            
            // 在翻頁動畫的中間階段更新右頁內容（更快的視覺反饋）
            setTimeout(() => {
                const nextRightIndex = (currentSpread + 1) * 2 + 1; // n+3
                const rightImg = rightPage.querySelector('img');
                
                // 添加淡入效果
                rightImg.style.opacity = '0';
                
                if (nextRightIndex < images.length) {
                    rightImg.src = images[nextRightIndex].src;
                    rightImg.alt = images[nextRightIndex].alt;
                    rightImg.style.display = 'block';
                } else {
                    rightImg.style.display = 'none';
                }
                
                // 淡入新圖片
                requestAnimationFrame(() => {
                    rightImg.style.transition = 'opacity 0.3s ease';
                    rightImg.style.opacity = '1';
                });
                
                console.log('中間階段更新右頁，索引:', nextRightIndex);
            }, 400); // 在400ms時更新右頁（動畫還在進行中）
            
            // 1秒後完成翻頁
            setTimeout(() => {
                currentSpread++;
                console.log('翻頁後 currentSpread:', currentSpread);
                
                // 清理動畫
                flipPage.classList.remove('flipping');
                flipPage.style.display = 'none';
                isFlipping = false;
                console.log('翻頁完成，isFlipping 重置為:', isFlipping);
                
                // 更新左頁和頁碼指示器
                updateBookPagesPartial();
            }, 1000);
        });
    }

    // 翻頁到上一跨頁
    function flipToPrev() {
        console.log('嘗試翻到上一頁，檢查條件：');
        console.log('isFlipping:', isFlipping);
        console.log('currentSpread:', currentSpread);
        console.log('currentSpread === 0:', currentSpread === 0);
        
        if (isFlipping || currentSpread === 0) {
            console.log('往前翻頁被阻止');
            return;
        }
        
        isFlipping = true;
        
        console.log('開始往前翻頁，當前 currentSpread:', currentSpread);
        
        // 當前跨頁：n+2, n+3
        // 上一跨頁：n+0, n+1
        const prevRightIndex = (currentSpread - 1) * 2 + 1; // n+1
        const currentLeftIndex = currentSpread * 2;          // n+2
        
        // 設置翻頁元素
        const frontImg = flipPageFront.querySelector('img');
        const backImg = flipPageBack.querySelector('img');
        
        // 正面：上一跨頁的右頁 (n+1)
        if (prevRightIndex >= 0 && prevRightIndex < images.length) {
            frontImg.src = images[prevRightIndex].src;
            frontImg.alt = images[prevRightIndex].alt;
        }
        
        // 背面：當前左頁 (n+2)
        if (currentLeftIndex < images.length) {
            backImg.src = images[currentLeftIndex].src;
            backImg.alt = images[currentLeftIndex].alt;
        }
        
        // 顯示翻頁元素，預先設為翻轉狀態
        flipPage.style.display = 'block';
        flipPage.classList.add('flipping');
        
        // 短暫延遲後開始反向動畫
        requestAnimationFrame(() => {
            setTimeout(() => {
                flipPage.classList.remove('flipping');
                
                // 在動畫中間階段更新右頁內容
                setTimeout(() => {
                    const prevRightIndex = (currentSpread - 1) * 2 + 1;
                    const rightImg = rightPage.querySelector('img');
                    
                    // 添加淡入效果
                    rightImg.style.opacity = '0';
                    
                    if (prevRightIndex >= 0 && prevRightIndex < images.length) {
                        rightImg.src = images[prevRightIndex].src;
                        rightImg.alt = images[prevRightIndex].alt;
                        rightImg.style.display = 'block';
                    } else {
                        rightImg.style.display = 'none';
                    }
                    
                    // 淡入新圖片
                    requestAnimationFrame(() => {
                        rightImg.style.transition = 'opacity 0.3s ease';
                        rightImg.style.opacity = '1';
                    });
                    
                    console.log('向前翻頁中間階段更新右頁，索引:', prevRightIndex);
                }, 400);
                
                // 1秒後完成翻頁
                setTimeout(() => {
                    currentSpread--;
                    console.log('往前翻頁後 currentSpread:', currentSpread);
                    
                    // 清理動畫
                    flipPage.style.display = 'none';
                    isFlipping = false;
                    console.log('往前翻頁完成，isFlipping 重置為:', isFlipping);
                    
                    // 更新左頁和頁碼指示器
                    updateBookPagesPartial();
                }, 1000);
            }, 50);
        });
    }

    // Previous page
    prevPageBtn.onclick = function() {
        flipToPrev();
    }

    // Next page
    nextPageBtn.onclick = function() {
        flipToNext();
    }

    // Initialize book
    updateBookPages();
    
    // 確保按鈕初始狀態正確
    console.log('初始化完成後的狀態檢查：');
    console.log('prevPageBtn.disabled:', prevPageBtn.disabled);
    console.log('nextPageBtn.disabled:', nextPageBtn.disabled);
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