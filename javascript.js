// 対戦相手を決定する
  //画像の定義
  var imageArray = ["./img/youA.jpg","./img/youB.jpg","./img/youC.jpg","./img/youD.jpg","./img/youE.jpg","./img/youF.jpg"];
  var slideshowInterval;//スライドショーのタイマー変数
  var imageIndex = 0;//これはどういうこと？？？

  //スライドショーをスタート
  const btn1 = document.querySelector("#btn1");
  btn1.onclick = function(){
    slideshowInterval = setInterval(function () {
    document.querySelector("#vs_you").src = imageArray[imageIndex];
    imageIndex = Math.floor(Math.random()*imageArray.length);
   },100); // 画像を切り替える
   document.querySelector("#text").innerText = "対戦相手を決定する";
  };
  console.log("OK");
  // スライドショーをストップ
  // 対戦相手をランダムに決定する
  const btn2 = document.querySelector("#btn2");
  btn2.onclick = function(){
    clearInterval(slideshowInterval);
    const opponent = Math.floor(Math.random()*6);
    if(opponent === 0){
      document.querySelector("#text").innerText = "南斗六聖拳殉星の男　シン";
      document.querySelector("#vs_you").src = "./img/youA.jpg";
    }else if(opponent === 1){
      document.querySelector("#text").innerText = "南斗聖拳最強の男　サウザー";
      document.querySelector("#vs_you").src = "./img/youB.jpg";
    }else if(opponent === 2){
      document.querySelector("#text").innerText = "華麗な技を持つ　トキ";
      document.querySelector("#vs_you").src = "./img/youC.jpg";
    }else if(opponent === 3){
      document.querySelector("#text").innerText = "元斗皇拳の伝承者 金色のファルコ";
      document.querySelector("#vs_you").src = "./img/youD.jpg";
    }else if(opponent === 4){
      document.querySelector("#text").innerText = "世紀末覇者「拳王」 ラオウ";
      document.querySelector("#vs_you").src = "./img/youE.jpg";
    }else if(opponent === 5){
      document.querySelector("#text").innerText = "「おれの名をいってみろ!!」 ジャギ";
      document.querySelector("#vs_you").src = "./img/youF.jpg";
    };
  };

  console.log("OK");

/// ぐーをクリックして対戦結果をアラートで表示する
const btn3 = document.querySelector("#btn3");
btn3.onclick = function(){
    mejunkkenimg.src = "./img/guu.jpg";
    const randomJankken = Math.floor(Math.random()*3);
    console.log("エラー");

    if(randomJankken === 0){
        document.querySelector("#vs").innerText = "引き分け";
        youjunkkenimg.src = "./img/guu.jpg";
        console.log("エラー");

    }else if(randomJankken === 1){
        document.querySelector("#vs").innerText = "勝ち";
        youjunkkenimg.src = "./img/tyoki.jpg";
        console.log("エラー");

        let imgElement_me = document.createElement("img");
        imgElement_me.src = "./img/win.jpg";
        imgElement_me.width = 50;
        imgElement_me.height = 50;
         console.log("エラー");

        let me_win = document.querySelector("#me_win");
        me_win.appendChild(imgElement_me);
        console.log("エラー");

    }else{
        document.querySelector("#vs").innerText = "負け";
        youjunkkenimg.src = "./img/paa.jpg";
        console.log("エラー");

        let imgElement_you = document.createElement("img");
        imgElement_you.src = "./img/win.jpg";
        imgElement_you.width = 50;
        imgElement_you.height = 50;
        console.log("エラー");

        let you_win = document.querySelector("#you_win");
        you_win.appendChild(imgElement_you);
        console.log("エラー");
    };
}

// ちょきをクリックして対戦結果をアラートで表示する
const btn4 = document.querySelector("#btn4");
btn4.onclick = function(){
    mejunkkenimg.src = "./img/tyoki.jpg";
    const randomJankken = Math.floor(Math.random()*3);
    console.log("エラー");

    if(randomJankken === 0){
        document.querySelector("#vs").innerText = "負け";
        youjunkkenimg.src = "./img/guu.jpg";
        console.log("エラー");

        let imgElement_you = document.createElement("img");
        imgElement_you.src = "./img/win.jpg";
        imgElement_you.width = 50;
        imgElement_you.height = 50;
        console.log("エラー");

        let you_win = document.querySelector("#you_win");
        you_win.appendChild(imgElement_you);
        console.log("エラー");

    }else if(randomJankken === 1){
        document.querySelector("#vs").innerText = "引き分け";
        youjunkkenimg.src = "./img/tyoki.jpg";
        console.log("エラー");

    }else{
        document.querySelector("#vs").innerText = "勝ち";
        youjunkkenimg.src = "./img/paa.jpg";
        console.log("エラー");

        let imgElement_me = document.createElement("img");
        imgElement_me.src = "./img/win.jpg";
        imgElement_me.width = 50;
        imgElement_me.height = 50;
        console.log("エラー");
        
        let me_win = document.querySelector("#me_win");
        me_win.appendChild(imgElement_me);
        console.log("エラー");
    };
}

// ぱーをクリックして対戦結果をアラートで表示する
const btn5 = document.querySelector("#btn5");
btn5.onclick = function(){
    mejunkkenimg.src = "./img/paa.jpg";
    const randomJankken = Math.floor(Math.random()*3);
    console.log("エラー");

    if(randomJankken === 0){
        document.querySelector("#vs").innerText = "勝ち";
        youjunkkenimg.src = "./img/guu.jpg";
        console.log("エラー");

        let imgElement_me = document.createElement("img");
        imgElement_me.src = "./img/win.jpg";
        imgElement_me.width = 50;
        imgElement_me.height = 50;
        console.log("エラー");
        
        let me_win = document.querySelector("#me_win");
        me_win.appendChild(imgElement_me);
        console.log("エラー");

    }else if(randomJankken === 1){
        document.querySelector("#vs").innerText = "負け";
        youjunkkenimg.src = "./img/tyoki.jpg";
        console.log("エラー");

        let imgElement_you = document.createElement("img");
        imgElement_you.src = "./img/win.jpg";
        imgElement_you.width = 50;
        imgElement_you.height = 50;
        console.log("エラー");

        let you_win = document.querySelector("#you_win");
        you_win.appendChild(imgElement_you);
        console.log("エラー");

    }else{
        document.querySelector("#vs").innerText = "引き分け";
        youjunkkenimg.src = "./img/paa.jpg";
        console.log("エラー");
    };
}

let btn6 = document.querySelector("#btn6");
btn6.onclick = function(){
    location.reload();
}