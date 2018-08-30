//主页面轮播图部分
function firstBan() {
    var banners = document.querySelectorAll("div.banner-box > .banner > li"),
        banBtn = document.querySelectorAll("div.banner-box > .bottom-btn > li"),
        douBtn = document.querySelectorAll(".bd .banner-box > div.arrow"),
        bannerBox = document.querySelector(".banner-box"),
        length = banners.length,
        index = 0;
// 点击下面按钮，图片变换
    for (var i = 0; i < length; i++) {
        (function (i) {
            banBtn[i].onclick = function () {
                if (index !== i) {
                    change(i)
                }
            }
        })(i);

    }
//自动轮播
    var timer = setInterval(function () {
            change(index + 1)
        }, 3000
    );
//鼠标划入，自动轮播停止，鼠标划出，继续
    bannerBox.onmouseenter = function () {
        clearInterval(timer);
    };
    bannerBox.onmouseleave = function () {
        timer = setInterval(function () {
                change(index + 1)
            }, 3000
        );
    };
//左右按钮点击事件
    douBtn[0].onclick = function () {
        var x = index - 1;
        if (x < 0) {
            change(length - 1);
        } else {
            change(x);
        }
    };
    douBtn[1].onclick = function () {

        change(index + 1);
    };

//对i进行封装。方便调用；
    function change(i) {
        banners[index].style.zIndex = "1";
        banBtn[index].classList.remove("bon");

        index = i;
        index %= length;

        banners[index].style.zIndex = "2";
        banBtn[index].classList.add("bon")
    }
}
firstBan();

//一号生鲜部分轮播，进行封装，多部分调用
var banner1= document.querySelectorAll(".bd .fre > div .con .banner1 li"),
    btn1=document.querySelectorAll(".bd .fre > div .con .btn1 > span"),
    banner2= document.querySelectorAll(".bd .baby > div .con .banner2 li"),
    btn2=document.querySelectorAll(".bd .baby > div .con .btn2 > span"),
    banner3= document.querySelectorAll(".bd .baby > div .con .banner3 li"),
    btn3=document.querySelectorAll(".bd .baby > div .con .btn3 > span"),
    color = ["#0bcd96","#fe8282","#6ac5ff"];
function advertise(banner,btn,color){
    var index=0, timer;
    for (var i=0,length=btn.length;i<length;i++){
        (function(i){
            btn[i].onclick = function(){
                change(true,i);
            };
        })(i)
    }
    //自动轮播
    function auto(){
        timer = setInterval(function () {
            change(false);
        }, 3000);
        return auto;
    }
    auto();
    //对透明度事件进行封装，
    function change (bool,i){
        banner[index].style.opacity = "0";
        btn[index].style.backgroundColor = "#e5e5e5";
        if(bool){
            index = i
        } else {
            index++;
            index %=btn.length;
        }
        banner[index].style.opacity = "1";
        btn[index].style.backgroundColor = color;
    }
}
advertise(banner1,btn1,color[0]);
advertise(banner2,btn2,color[1]);
advertise(banner3,btn3,color[2]);

//brand一栏轮播
var skill = document.querySelector(".up-bannerWrap .up-banner"),
    leftBtn = document.querySelector(".up-bannerWrap .btn-le"),
    rightBtn= document.querySelector(".up-bannerWrap .btn-ri"),
    x = 1024,
    currL = getCssObj(skill).marginLeft,
    currL1 =parseFloat(currL);
//右键点击事件
rightBtn.onclick = function (){
    if(currL1 > -2048) {
        currL1 -= x;
        skill.style.marginLeft = currL1 + "px";
    }
};
//左键点击事件
leftBtn.onclick = function(){
    if(currL1 < 0) {
        currL1 += x;
        skill.style.marginLeft = currL1 + "px";
    }
};
//封装一个函数，获取轮播胶片的当前样式，margin-left值
function getCssObj(obj){
    if(obj.currentStyle){
        return obj.currentStyle;
    }else{
        return getComputedStyle(obj)
    }
}
//brands一栏商品排行部分鼠标移入事件
var menu = document.querySelectorAll(".bd .brands .paihang > .fl > p"),
    con = document.querySelectorAll(".bd .brands .paihang > .fl > ul"),
    mLen = con.length,
    mIndex = 0;
//添加鼠标移入事件
for(var j=0;j<mLen;j++){
    (function(j) {
        menu[j].onmouseenter = function () {
            if(mIndex !== j)
                con[mIndex].classList.remove("on");
            con[mIndex].classList.add("hidden");
            menu[mIndex].style.border = "none";
            mIndex = j;
            con[mIndex].classList.remove("hidden");
            con[mIndex].classList.add("on");
            menu[mIndex].style.borderBottom= "2px solid #f60"
        }
    })(j)
}
//获取宽
var body =document.querySelector("body");
fixed = document.querySelector(".bd .fixed");
bWidth=parseFloat(window.innerWidth);
window.onresize = function(){
    changeRem()
};
function changeRem(){
    if(bWidth<1400){
        fixed.style.opacity = "0"
    }else{
        fixed.style.opacity = "0"
    }
}
//国产部分前后轮播部分js
var con1 = document.querySelectorAll(".bd .sty1 .title-1 >ul>li"),
    fBtn1 = document.querySelectorAll(".bd .sty1 .title-1>p>i"),
    num1 = document.querySelector(".bd .sty1 .title-1>p>em"),
    con2 = document.querySelectorAll(".bd .sty1 .title-2 >ul>li"),
    fBtn2 = document.querySelectorAll(".bd .sty1 .title-2>p>i"),
    num2 = document.querySelector(".bd .sty1 .title-2>p>em"),
    con4 = document.querySelectorAll(".bd .sty1 .title-4 >ul>li"),
    fBtn4 = document.querySelectorAll(".bd .sty1 .title-4>p>i"),
    num4 = document.querySelector(".bd .sty1 .title-4>p>em");
function front (con,btn,num) {
    var index = 0,timer,
        length = con.length;
    //点击事件
      btn[0].onclick = function () {
          index--;
          index < 0 && (index = length-1);
          change();
    };
      btn[1].onclick = function () {
        index++;
        index %= length;
        change();
    };
    //按钮移入取消自动轮播
    for(var k=0;k<2;k++){
        btn[k].onmouseenter = function(){
            clearInterval(timer);
        };
    }
    //按钮离开继续轮播
    for(k=0;k<2;k++){
        btn[k].onmouseleave = auto
    }
    //事件函数
      function change(){
          var last = index - 1,
              next = index + 1;
          last < 0 && (last = length - 1);
          next %= length;
          //清除类名
          for(var j=0;j<length;j++){
              con[j].className = "";
          }
          //添加类名
          con[last].className ="last";
          con[index].className ="active";
          con[next].className ="next";
          num.innerText = index + 1;
      }
      //自动轮播
      function auto(){
          timer= setInterval ( function (){
              index++;
              index %= length;
              change();
          },3000);
          return auto;
      }
      auto();
}
front(con1,fBtn1,num1);
front(con2,fBtn2,num2);
front(con4,fBtn4,num4);


