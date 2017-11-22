var chess = document.getElementById('chess');
var context = chess.getContext('2d');

context.strokeStyle = '#bfbfbf';


var DrawCB = function () {
    for (var i = 0; i < 15; i++) {
        context.moveTo(15 + i * 30, 15);
        context.lineTo(15 + i * 30, 435);
        context.stroke();
        context.moveTo(15, 15 + i * 30);
        context.lineTo(435, 15 + i * 30);
        context.stroke();
    }
}

 var me = true;
 var chessB = [];
 for(var i = 0; i<15; i++){
     chessB[i] = [];
     for(var j = 0; j<15;j++){
         chessB[i][j] = 0;
     }
 }
var oneStep = function (i, j, me) {
    context.beginPath();
    context.arc(15 + i * 30, 15 + j * 30, 13, 0, 2 * Math.PI);
    context.closePath();
    var gre = context.createRadialGradient(15 + i * 30 + 2, 15 + j * 30 - 2, 13, 15 + i * 30 + 2, 15 + j * 30 - 2, 0);
    if (me) {
        gre.addColorStop(0, '#0a0a0a');
        gre.addColorStop(1, '#636766');
    } else {
        gre.addColorStop(0, '#d1d1d1');
        gre.addColorStop(1, '#f9f9f9');
    }
    context.fillStyle = gre;
    context.fill();

}

DrawCB();

// oneStep(0, 0, true);
// oneStep(3, 5, false);

chess.onclick = function(e){
    var x = e.offsetX;
    var y = e.offsetY;
    var i = Math.floor(x/30);
    var j = Math.floor(y/30);
    if(chessB[i][j]==0){
        oneStep(i, j, me);
        if(me){
              chessB[i][j] = 1;
        }else{
                 chessB[i][j] = -1;
        }
    me = !me;
       }

}

