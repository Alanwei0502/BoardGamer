$(document).ready(function() {
  $('.photo').lightSlider({
    adaptiveHeight:false,
    item:1,
    slideMargin:0,
    pager: false,
    loop:true
  });
});

// burger close door menu
var checker = document.getElementById('checker');
var line_mid1 = document.getElementsByClassName('line_mid1')[0];
var line_mid2 = document.getElementsByClassName('line_mid2')[0];
var close_door = document.getElementsByClassName('close_door')[0];
var showcase = document.getElementsByClassName('showcase')[0];
var menu = document.getElementsByClassName('menu')[0];

checker.addEventListener('click',function(){
  if ( checker.checked == true ){
    line_mid1.classList.add('-cross1');
    line_mid2.classList.add('-cross2');
    close_door.classList.add('-show');
    showcase.classList.add('-left');
    menu.classList.add('-right');
  }else{
    line_mid1.classList.remove('-cross1');
    line_mid2.classList.remove('-cross2');
    showcase.classList.add('-backleft');
    menu.classList.add('-backright');

    setTimeout(function(){
      showcase.classList.remove('-left');
      showcase.classList.remove('-backleft');
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

//filter slidedown
var blueArrow = document.getElementById('blueArrow');
var aside = document.getElementsByTagName('aside')[0];
blueArrow.addEventListener('click',function(){
  if( aside.classList.contains('slidedown')){
    aside.classList.remove('slidedown');
    $(this).css('transform','rotate(0deg)');
  }else{
    aside.classList.add('slidedown');
    $(this).css('transform','rotate(180deg)');
  }
});

//filter function
$(document).ready(function() {
  $('#area').change(function() {
    /* Act on the event */
    // console.log( $('#area option:selected').text() );
    if($('#area option:selected').text() == "選擇地區" ){
      $('#store option').css('display','block');
    }

    if($('#area option:selected').text() == "中正區" ){
      $('#store option').css('display','block');
      $('#store option').not(document.getElementsByClassName("one")).css('display','none');
    }

    if($('#area option:selected').text() == "大安區" ){
      $('#store option').css('display','block');
      $('#store option').not(document.getElementsByClassName("two")).css('display','none');
    }

    if($('#area option:selected').text() == "萬華區" ){
      $('#store option').css('display','block');
      $('#store option').not(document.getElementsByClassName("three")).css('display','none');
    }

    if($('#area option:selected').text() == "中山區" ){
      $('#store option').css('display','block');
      $('#store option').not(document.getElementsByClassName("four")).css('display','none');
    }

    if($('#area option:selected').text() == "大同區" ){
      $('#store option').css('display','block');
      $('#store option').not(document.getElementsByClassName("five")).css('display','none');
    }
  });
});
