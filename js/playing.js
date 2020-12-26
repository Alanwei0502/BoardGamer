

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


//filter
$(document).ready(function() {
  // 點擊全部
  function all(){
    $('section.waterfall > div').css('display','block');
    $('html , body').animate({scrollTop:0} , 500);
  };
  $('li.noFilter').click(function(){
    all();
  });

  // 點擊派對
  function party(){
    $('section.waterfall > div').not('div.party').not('div.create').css('display','none');
    $('div.party').css('display','block');
    $('html , body').animate({scrollTop:0} , 500);
  };

  $('li.partyFilter').click(function(){
    party();
  });

  // 點擊競賽
  function race(){
    $('section.waterfall > div').not('div.race').not('div.create').css('display','none');
    $('div.race').css('display','block');
    $('html , body').animate({scrollTop:0} , 500);
  }
  $('li.raceFilter').click(function(){
    race();
  });

  // 點擊教育
  function edu(){
    $('section.waterfall > div').not('div.edu').not('div.create').css('display','none');
    $('div.edu').css('display','block');
    $('html , body').animate({scrollTop:0} , 500);
  };
  $('li.eduFilter').click(function(){
    edu();
  });

  // 點擊開團
  function create(){
    $('section.waterfall > div').not('div.create').css('display','none');
    $('div.create').css('display','block');
    $('html , body').animate({scrollTop:0} , 500);
  };
  $('li.createFilter').click(function(){
    all();
  });

  // });

  //filter 950px
  // $(document).ready(function() {
  // 左右箭頭功能


  $('span.rightArrow').click(function(){

    if ( $('nav.filter ul').css('left') == "0px" ){
      party();
    }else if( $('nav.filter ul').css('left') == "-192px" ){
      race();
    }else if ( $('nav.filter ul').css('left') == "-384px" ){
      edu();
    }else if ( $('nav.filter ul').css('left') == "-576px" ){
      create();
    }

    if ( $('nav.filter ul').css('left') != "-768px" ){
      $('nav.filter ul').animate({ left: "-=192px" },200);
    }
  });

  $('span.leftArrow').click(function(){

    if ( $('nav.filter ul').css('left') == "-768px" ){
      edu();
    }else if ( $('nav.filter ul').css('left') == "-576px" ){
      race();
    }else if ( $('nav.filter ul').css('left') == "-384px" ){
      party();
    }else if ( $('nav.filter ul').css('left') == "-192px" ){
      all();
    }

    if ( $('nav.filter ul').css('left') != "0px" ){
      $('nav.filter ul').animate({ left: "+=192px" },200);
    }
  });

});
