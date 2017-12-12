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

计算权值
```javascript
                       if (myWin[k] == 1) {
                            myS[i][j] += 200;
                        } else if (myWin[k] == 2) {
                            myS[i][j] += 400;
                        } else if (myWin[k] == 3) {
                            myS[i][j] += 2000;
                        } else if (myWin[k] == 4) {
                            myS[i][j] += 99999;
                        }

                        if (PCWin[k] == 1) {
                            PCS[i][j] += 220;
                        } else if (PCWin[k] == 2) {
                            PCS[i][j] += 420;
                        } else if (PCWin[k] == 3) {
                            PCS[i][j] += 2100;
                        } else if (PCWin[k] == 4) {
                            PCS[i][j] += 999999;
                        }
```
守
```javascript
                if (myS[i][j] > max) {
                    max = myS[i][j];
                    u = i;
                    v = j;
                } else if (myS[i][j] == max) {
                    if (PCS[i][j] > PCS[u][v]) {
                        u = i;
                        v = j;
                    }
                }
                oneStep(u, v, false);
```

攻
```javascript
                if (PCS[i][j] > max) {
                    max = PCS[i][j];
                    u = i;
                    v = j;
                } else if (PCS[i][j] == max) {
                    if (myS[i][j] > myS[u][v]) {
                        u = i;
                        v = j;
                    }
                }
                oneStep(u, v, false);
```

### 此五子棋算法是是记分制度算法
# 优化
此五子棋算法为1 2 3 4 不同计数策略，下次更新为 1 死 1活 2死 2活 3死 3活 4 策略，此策略可以防止一个死三一个活三同时出现会堵住死三的情况
