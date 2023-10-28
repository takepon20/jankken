// btn1の変数を宣言して、分かりやすいコードに
const btn1 = document.querySelector("#btn1");
const imagelist = [    
    "./img/youA.jpg",
    "./img/youB.jpg",
    "./img/youC.jpg",
];

// btn1を押すと関数を実行する
btn1.onclick = function(){
    //ランダムなインデックスを生成する
    const randomIndex = Math.floor(Math.random()*imagelist.length);
    console.log("エラー");

    //ランダムな画像を選択する
    const randomImage = imagelist[randomIndex];
    console.log("エラー");

    //画像を表示する
    const imageElement = document.querySelector("#you");
    imageElement.src = randomImage;
    console.log("エラー");
};

let btn5 = document.querySelector("#btn5");
btn5.onclick = function(){
    location.reload();
}

// ぐーをクリックして対戦結果をアラートで表示する
const btn2 = document.querySelector("#btn2");
btn2.onclick = function(){
    mejunkkenimg.src = "./img/guu.jpg";
    const randomJankken = Math.floor(Math.random()*3);
    console.log("エラー");

    if(randomJankken === 0){
        document.querySelector("#result").innerText = "引き分け";
        youjunkkenimg.src = "./img/guu.jpg";
        console.log("エラー");

    }else if(randomJankken === 1){
        document.querySelector("#result").innerText = "勝ち";
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
        document.querySelector("#result").innerText = "負け";
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
};

// ちょきをクリックして対戦結果をアラートで表示する
const btn3 = document.querySelector("#btn3");
btn3.onclick = function(){
    mejunkkenimg.src = "./img/tyoki.jpg";
    const randomJankken = Math.floor(Math.random()*3);
    console.log("エラー");

    if(randomJankken === 0){
        document.querySelector("#result").innerText = "負け";
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
        document.querySelector("#result").innerText = "引き分け";
        youjunkkenimg.src = "./img/tyoki.jpg";
        console.log("エラー");

    }else{
        document.querySelector("#result").innerText = "勝ち";
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
};

// ぱーをクリックして対戦結果をアラートで表示する
btn4.onclick = function(){
    mejunkkenimg.src = "./img/paa.jpg";
    const randomJankken = Math.floor(Math.random()*3);
    console.log("エラー");

    if(randomJankken === 0){
        document.querySelector("#result").innerText = "勝ち";
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
        document.querySelector("#result").innerText = "負け";
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
        document.querySelector("#result").innerText = "引き分け";
        youjunkkenimg.src = "./img/paa.jpg";
        console.log("エラー");
    };
};