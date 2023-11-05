
// グローバル変数
let opponent = 0;

// 対戦相手を決定する
//スライドショーのための変数宣言 
var imageArray = ["./img/youA.jpg","./img/youB.jpg","./img/youC.jpg","./img/youD.jpg","./img/youE.jpg","./img/youF.jpg"];
var slideshowInterval;
var imageIndex = 0;

//スライドショーをスタート
const btn1 = document.querySelector("#btn1");
btn1.onclick = function(){
   document.querySelector("#vs_me").src = "./img/before-hito.jpg";
   slideshowInterval = setInterval(function () {
   document.querySelector("#vs_you").src = imageArray[imageIndex];
   imageIndex = Math.floor(Math.random()*imageArray.length);
   },100); // 画像を切り替える
   document.querySelector("#text").innerText = "対戦相手を決定する";
  };

 console.log("OK");
 
// スライドショーをストップ
const btn2 = document.querySelector("#btn2");
btn2.onclick = function(){
   clearInterval(slideshowInterval);
   //グローバル変数に代入
   opponent = Math.floor(Math.random()*6); 
   if(opponent === 0){
      document.querySelector("#text").innerText = "南斗六聖拳殉星の男　シン";
      document.querySelector("#vs_you").src = "./img/youA.jpg";
      console.log("OK");
   }else if(opponent === 1){
      document.querySelector("#text").innerText = "南斗聖拳最強の男　サウザー";
      document.querySelector("#vs_you").src = "./img/youB.jpg";
      console.log("OK");
   }else if(opponent === 2){
      document.querySelector("#text").innerText = "華麗な技を持つ　トキ";
      document.querySelector("#vs_you").src = "./img/youC.jpg";
      console.log("OK");
   }else if(opponent === 3){
      document.querySelector("#text").innerText = "元斗皇拳の伝承者 金色のファルコ";
      document.querySelector("#vs_you").src = "./img/youD.jpg";
      console.log("OK");
   }else if(opponent === 4){
      document.querySelector("#text").innerText = "世紀末覇者「拳王」 ラオウ";
      document.querySelector("#vs_you").src = "./img/youE.jpg";
      document.querySelector("#vs_me").src = "./img/kenvsraou.jpg";
      console.log("OK");
   }else if(opponent === 5){
      document.querySelector("#text").innerText = "「おれの名をいってみろ!!」 ジャギ";
      document.querySelector("#vs_you").src = "./img/youF.jpg";
      document.querySelector("#vs_me").src = "./img/muso.jpg";
      console.log("OK");
    };
  };

  console.log("OK");

/// ぐーをクリックして対戦結果をアラートで表示する
const btn3 = document.querySelector("#btn3");
btn3.onclick = function(){
    mejunkkenimg.src = "./img/guu.jpg";
    // 対戦相手が0～3の時は、通常じゃんけん処理）
    if(opponent >= 0 && opponent <= 3){
         const randomJankken = Math.floor(Math.random()*3);
         console.log("OK");
         if(randomJankken === 0){
              document.querySelector("#vs").innerText = "引き分け";
              youjunkkenimg.src = "./img/guu.jpg";
              console.log("OK");
         }else if(randomJankken === 1){
              document.querySelector("#vs").innerText = "勝ち";
              youjunkkenimg.src = "./img/tyoki.jpg";
              console.log("OK");
         }else{
              document.querySelector("#vs").innerText = "負け";
              youjunkkenimg.src = "./img/paa.jpg";
              console.log("OK");
         }
    // ラオウで絶対勝てない
    }else if(opponent === 4){
      document.querySelector("#vs").innerText = "負け";
      youjunkkenimg.src = "./img/paa.jpg";
      console.log("ok");
    // ジャギで勝てる
    }else if(opponent === 5){
      document.querySelector("#vs").innerText = "勝ち";
      youjunkkenimg.src = "./img/tyoki.jpg";
      console.log("OK");
    };
};

//ちょきをクリック
const btn4 = document.querySelector("#btn4");
btn4.onclick = function(){
    mejunkkenimg.src = "./img/tyoki.jpg";
    // 対戦相手が0～3の時は、通常じゃんけん処理）
    if(opponent >= 0 && opponent <= 3){
         const randomJankken = Math.floor(Math.random()*3);
         console.log("OK");
         if(randomJankken === 0){
              document.querySelector("#vs").innerText = "負け";
              youjunkkenimg.src = "./img/guu.jpg";
              console.log("OK");
         }else if(randomJankken === 1){
              document.querySelector("#vs").innerText = "引き分け";
              youjunkkenimg.src = "./img/tyoki.jpg";
              console.log("OK");
         }else{
              document.querySelector("#vs").innerText = "勝ち";
              youjunkkenimg.src = "./img/paa.jpg";
              console.log("OK");
         }  
    // 相手がラオウ
    }else if(opponent === 4){
      document.querySelector("#vs").innerText = "負け";
      youjunkkenimg.src = "./img/guu.jpg";
      console.log("OK");
    // 相手がジャギ
    }else if(opponent === 5){
      document.querySelector("#vs").innerText = "勝ち";
      youjunkkenimg.src = "./img/paa.jpg";
      console.log("OK");
    };
};

//ぱーをクリック
const btn5 = document.querySelector("#btn5");
btn5.onclick = function(){
    mejunkkenimg.src = "./img/paa.jpg";
    // 対戦相手が0～3の時は、通常じゃんけん処理）
    if(opponent >= 0 && opponent <= 3){
         const randomJankken = Math.floor(Math.random()*3);
         console.log("OK");
         if(randomJankken === 0){
              document.querySelector("#vs").innerText = "勝ち";
              youjunkkenimg.src = "./img/guu.jpg";
              console.log("OK");
         }else if(randomJankken === 1){
              document.querySelector("#vs").innerText = "負け";
              youjunkkenimg.src = "./img/tyoki.jpg";
              console.log("OK");
         }else{
              document.querySelector("#vs").innerText = "引き分け";
              youjunkkenimg.src = "./img/paa.jpg";
              console.log("OK");
         }
    // 相手がラオウ
    }else if(opponent === 4){
      document.querySelector("#vs").innerText = "負け";
      youjunkkenimg.src = "./img/tyoki.jpg";
      console.log("OK");
    // 相手がジャギ
    }else if(opponent === 5){
      document.querySelector("#vs").innerText = "勝ち";
      youjunkkenimg.src = "./img/guu.jpg";
      console.log("OK");
    };
};

let btn6 = document.querySelector("#btn6");
btn6.onclick = function(){
    location.reload();
}