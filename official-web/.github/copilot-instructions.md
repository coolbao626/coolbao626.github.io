# 酷寶家族官網開發指南

## 專案概覽
這是一個靜態的寵物用品客製化電商網站，專門銷售客製化陶瓷碗盤、馬克杯、帆布包等寵物用品。網站採用純 HTML/CSS/JavaScript 架構，無後端框架。

## 核心架構模式

### 單檔案組織結構
- `index.html` - 所有頁面內容都在同一個 HTML 檔案中，使用錨點導航 (`#hero`, `#products`, `#purchase`, `#about`)
- `script.js` - 包含產品資料陣列 (`product_details`) 和所有互動功能
- `styles.css` - 採用 CSS 自定義屬性 (`:root`) 進行主題色彩管理
- `assets/` - 產品圖片使用 `.webp` 格式優化載入速度
- `dm/` - DM 圖片資料夾，用於產品型錄展示

### 產品資料管理模式
產品資料集中在 `script.js` 中的 `product_details` 陣列：
```javascript
var product_details = [
    {
        name: "產品名稱",
        price: "價格字串",
        url: "7-11 賣貨便連結",
        description: "支援 HTML 標籤的描述",
        spec: "可選的規格說明",
        img: "assets/產品圖片.webp"
    }
];
```

### UI 元件實作要點

#### 產品卡片系統
- 使用 `onclick="add_to_cart(index)"` 和 `onclick="see_details(index)"` 綁定產品操作
- 產品詳情使用原生 `<dialog>` 元素動態生成
- 圖片使用 `.product-img` 和 `.product-img-w` 類別區分不同比例

#### 輪播元件
- 自定義 `Carousel` 類別實作，支援自動播放和手動控制
- 使用 CSS transform 和 flexbox 進行滑動動畫
- 導航點和按鈕都是程式化生成

#### 圖片展示模態框
- `#galleryModal` 用於展示 DM 圖片集合
- 單頁展示模式，使用 `.active` 類別控制顯示
- 具備滑動切換動畫效果

### 響應式設計策略
- 使用 CSS Grid 的 `repeat(auto-fit, minmax())` 實現響應式產品網格
- 768px 為主要斷點，手機版調整圖片尺寸和導航配置
- 圖片使用 `object-fit: cover/contain` 保持比例

### 整合外部服務
- 購物車功能導向 7-11 賣貨便 (`myship.7-11.com.tw`)
- Instagram 整合：使用 `ig.me/m/coolbabyorkshire` 作為客服入口
- Google 網站驗證：`meta name="google-site-verification"`

### 效能優化實作
- 所有圖片使用 `.webp` 格式
- CSS 動畫使用 `transform` 和 `opacity` 避免重排
- JavaScript 使用事件委派和 `DOMContentLoaded` 優化載入

### 開發工作流程
1. **新增產品**：在 `product_details` 陣列新增項目，圖片放到 `assets/`
2. **修改樣式**：優先修改 `:root` 中的 CSS 變數 (`--primary-color`, `--secondary-color`, `--accent-color`)
3. **調整佈局**：產品網格使用 `.product-grid` 類別，保持一致的卡片結構
4. **測試響應式**：確認 768px 斷點下的顯示效果

### 注意事項
- 所有文字內容使用繁體中文
- 價格格式不統一，需要保持原有的字串格式
- 產品描述支援 HTML，但要注意 XSS 安全性
- 圖片載入失敗時沒有回退機制，建議新增 `alt` 屬性優化