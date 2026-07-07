# 悅讀童年 創造性寫作班 官方網站

桃園市中壢區、平鎮區作文班。這是套用全新風格（參考栩悅牙醫的簡約溫暖版型）重製的靜態網站，內容沿用原本 taiwancw.com。

## 檔案結構

```
yuedu-site/
├── index.html      ← 主頁（改文字、改內容主要在這）
├── css/
│   └── style.css   ← 全部樣式、顏色（改配色改這裡）
├── js/
│   └── main.js     ← 手機選單 + 捲動動畫
└── README.md       ← 你正在看的說明
```

## 怎麼在本機看

直接用瀏覽器打開 `index.html` 就好，不用架伺服器。

## 怎麼放上 GitHub 並免費架站（GitHub Pages）

1. 在 GitHub 新開一個 repo，例如 `yuedu-site`。
2. 把這個資料夾裡的所有檔案上傳上去（可以直接拖拉，或用 git push）。
3. 進 repo 的 **Settings → Pages**。
4. Source 選 **Deploy from a branch**，branch 選 `main`、資料夾選 `/ (root)`，按 Save。
5. 等一兩分鐘，網址會是 `https://你的帳號.github.io/yuedu-site/`。

之後你要改字、改顏色、換圖片，直接在 GitHub 上點檔案 → 鉛筆圖示編輯 → commit 就會自動更新。

## 常見小地方怎麼改

- **改配色**：打開 `css/style.css` 最上面的 `:root{ ... }`，改那幾個色碼就整站變色。
  - `--leaf` / `--leaf-deep` 是綠色主色
  - `--amber` 是琥珀色副色
  - `--paper` 是背景米色
- **改文字**：在 `index.html` 找到對應中文直接改。
- **換圖片**：把圖檔放進專案（例如新開 `images/` 資料夾），再把 `index.html` 裡的 `src="..."` 換成你的路徑，例如 `src="images/課堂.jpg"`。
  - 目前理念區、LINE QR 用的是原網站圖片網址，若載不出來會自動顯示替代底色，換成自己的圖比較穩。
- **改最新消息**：在 `index.html` 的 `<!-- 學習成果 / 最新消息 -->` 區塊，複製一張 `.news-card` 卡片改標題和連結即可。

## 備註

- 導覽列與最新消息的連結目前指向原站 taiwancw.com 的內頁；日後若把內頁也重做成新版，再把連結換掉就好。
- 字型用的是 Google Fonts 的思源宋體 / 思源黑體，需要連網才會顯示；離線看會退回系統字型，屬正常現象。
