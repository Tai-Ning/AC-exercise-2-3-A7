# AC-exercise-2-3-A7
**「我的餐廳清單擴充CURD功能」** 是一個由Node.js搭配Express.js框架所開發出的網站，可以新增或編輯喜愛的餐廳，點選detail可以觀看餐廳詳細資訊，如果要疑除喜愛的餐廳僅需按下delete。


## 功能描述
- 透過使用MongoDB Atlas資料庫將餐廳JSON檔案加入為種子資料，將喜愛餐廳種子資料展現在網頁上
- 點選個別餐廳Edit可以進入編輯餐廳資料表單，編輯完成後按save便會更改餐廳資料
- 點選個別餐廳Detail可以導向該餐廳詳細資訊頁面
- 點選個別餐廳Delete可以將餐廳資料刪除，成功刪除後導向更改後的首頁
- 點選網頁下方create restaurant按鈕可以進入新增餐廳表單，須輸入餐廳名字、分類、照片網址、地點、電話、google map連結、評價星數、餐廳描述
## 環境建置
[Node.js 版本14.16.0](https://nodejs.org/en)  
[Express套件 版本4.16.4](https://expressjs.com/)  
[nodemon套件](https://www.npmjs.com/package/nodemon)  
[express-handlebars套件 版本3.0.0](https://www.npmjs.com/package/express-handlebars)  
[body-parser套件 使用4.16.4版本Express內建配置](https://www.npmjs.com/package/body-parser)  
[MongoDB Atlas資料庫](https://www.mongodb.com/atlas/database)  
[Mongoose的ODM系統 版本5.9.7](https://www.npmjs.com/package/mongoose)  
[dotenv套件](https://www.npmjs.com/package/dotenv)

## 安裝與執行步驟
1. 打開terminal，複製此專案至電腦：  
在terminal 輸入 `git clone https://github.com/Tai-Ning/AC-exercise-2-3.git`
2. 進入放置專案的本機資料夾：  
在terminal 輸入 `cd 專案資料夾名稱`
3. 安裝npm套件：  
在terminal 輸入 `npm install`
4. 安裝express.js框架：  
在terminal 輸入 `npm i express@4.16.4`
5. 安裝nodemon套件：  
在terminal 輸入 `npm i nodemon`
6. 安裝express-handlebars套件：  
在terminal 輸入 `npm i express-handlebars@3.0.0`
7. 安裝Mongoose： 
在terminal 輸入 `npm i mongoose@5.9.7`
8. 安裝dotenv套件：  
在terminal 輸入 `npm i dotenv`
9. 啟動伺服器，執行專案：  
在terminal 輸入 `npm run dev`
10. 此專案便可在網址為 www.localhost:3000 執行
