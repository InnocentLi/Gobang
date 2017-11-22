# Gobang AI
js五子棋 canvas
## 五子棋人机对战
实际上，有禁手的五子棋才是五子棋，没有禁手的叫五字连珠，哈哈哈哈，叫错这么多年.  

### 赢法数组
棋盘初始化
```javascript
 var chessB = []; //用作存棋盘
 // init
  for (var i = 0; i < 15; i++) {
     chessB[i] = [];
     for (var j = 0; j < 15; j++) {
         chessB[i][j] = 0;
     }
 }
```
横线赢统计
```javascript
 for(var i = 0;i<15;i++){
     for(var j = 0;j<11;j++){
         for(var k = 0;k<5;k++){
             wins[i][j+k][count] = true;
         }
         count++;
     }
 }

```
竖线赢统计
```javascript
 for(var i = 0;i<15;i++){
     for(var j = 0;j<11;j++){
         for(var k = 0;k<5;k++){
             wins[j+k][i][count] = true;
         }
         count++;
     }
 }
```
斜线赢统计
```javascript
 for(var i = 0;i<11;i++){
     for(var j = 0;j<11;j++){
         for(var k = 0;k<5;k++){
             wins[j+k][i+k][count] = true;
         }
         count++;
     }
 }

```
反斜线赢统计
```javascript
 for(var i = 0;i<11;i++){
     for(var j = 14;j>3;j--){
         for(var k = 0;k<5;k++){
             wins[i+k][j-k][count] = true;
         }
         count++;
     }
 }

```

