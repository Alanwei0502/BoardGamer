$(document).ready(function() {
  $('.carousel_product').lightSlider({
    adaptiveHeight:false,
    item:3,
    slideMargin:0,
    loop:true,
    pager: false,
    control: true,
    responsive : [
      {
        breakpoint:1250,
        settings: {
          item:2,
        }
      },
      {
        breakpoint:768,
        settings: {
          item:1,
        }
      }
    ]
  });


  //置頂按鈕
  $(function(){
    var $gotop = $('#gotop') ,
    goSpeed = 500 ;

    $('.back_to_top').click(function(e) {
      $('html , body').animate({scrollTop:0} , goSpeed);
    });
  });
});


// burger close door menu
var checker = document.getElementById('checker');
var line_mid1 = document.getElementsByClassName('line_mid1')[0];
var line_mid2 = document.getElementsByClassName('line_mid2')[0];
var close_door = document.getElementsByClassName('close_door')[0];
var menu = document.getElementsByClassName('menu')[0];

checker.addEventListener('click',function(){
  if ( checker.checked == true ){
    line_mid1.classList.add('-cross1');
    line_mid2.classList.add('-cross2');
    close_door.classList.add('-show');
    menu.classList.add('-right');
  }else{
    line_mid1.classList.remove('-cross1');
    line_mid2.classList.remove('-cross2');
    menu.classList.add('-backright');

    setTimeout(function(){
     menu.classList.remove('-right');
     menu.classList.remove('-backright');
     close_door.classList.remove('-show');
   },400);
  }
});



//showcase_menu picture shows up
var main_menu_list = document.querySelectorAll('.main_menu_list');
var showcase_menu_list = document.querySelectorAll('.showcase_menu_list');

for(let i = 0; i < main_menu_list.length; i++){
  main_menu_list[i].addEventListener('mouseover',function(){
    showcase_menu_list[i+1].style.top = '0%';
    showcase_menu_list[0].style.top = '100%';
  });
  main_menu_list[i].addEventListener('mouseleave',function(){
    showcase_menu_list[i+1].style.top = '100%';
    showcase_menu_list[0].style.top = '0%';
  });
}

// 登入彈跳視窗動畫
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const modal = document.getElementById('modal');

signUpButton.addEventListener('click', function(){
  modal.classList.add("right-panel-active");
});

signInButton.addEventListener('click', function(){
  modal.classList.remove("right-panel-active");
});


//開啟彈跳視窗
const member = document.getElementById('member');
const member_phone = document.getElementById('member_phone');
const bg_filter = document.getElementsByClassName('bg_filter')[0];
member.addEventListener('click',function(){
  bg_filter.classList.add('-on');
  modal.classList.add('-on');
});
member_phone.addEventListener('click',function(){
  bg_filter.classList.add('-on');
  modal.classList.add('-on');

  line_mid1.classList.remove('-cross1');
  line_mid2.classList.remove('-cross2');
  menu.classList.add('-backright');

  setTimeout(function(){
   menu.classList.remove('-right');
   menu.classList.remove('-backright');
   close_door.classList.remove('-show');
 },400);
});


//關閉彈跳視窗
const close = document.getElementById('close');
close.addEventListener('click',function(){
  bg_filter.classList.add('-opacity-zero');
  modal.classList.add('-opacity-zero');
  setTimeout(function(){
    bg_filter.classList.remove('-on');
    bg_filter.classList.remove('-opacity-zero');
    modal.classList.remove('-on');
    modal.classList.remove('-opacity-zero');
  },500);
});


//會員登入轉跳會員中心頁面
const login = document.getElementById('login');

login.addEventListener('click',function(){
  window.location.href='../member.html';
});
