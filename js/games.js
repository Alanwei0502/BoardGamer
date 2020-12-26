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



//filter function

// 直接搜尋
$(document).ready(function() {
  var games = $('li.games');
  //console.log( games );

  $('.search_icon input').keyup(function(e){
    for (let i = 0; i < games.length; i++) {
      $(games[i]).css('display','block');
    }
    if( e.which == 13 ){

      for (let i = 0; i < games.length; i++) {
        //console.log( $(games[i]).find('h2').text() );
        if( $('.search_icon input').val() != $(games[i]).find('h2').text() ){
          $(games[i]).css('display','none');
        }
      }
    }
  });


});

// 遊戲類型
$(document).ready(function() {

  $('#type').change(function() {

    // var gameType = $(this).val();
    // //console.log(gameType);
    //
    // for (var i = 0; i < gameType.length; i++) {
    //   if($('#type option:selected').val() == gameType[i] ){
    //     $('.game_list ul li').css('display','block');
    //     $('.game_list ul li').not(document.getElementsByClassName('gameType[i]')).css('display','none');
    //   }
    // }

    if($('#type option:selected').val() == "" ){
      $('.game_list ul li').css('display','block');
    }

    if($('#type option:selected').val() == "party" ){
      $('.game_list ul li').css('display','block');
      $('.game_list ul li').not(document.getElementsByClassName('party')).css('display','none');
    }

    if($('#type option:selected').val() == "strategy" ){
      $('.game_list ul li').css('display','block');
      $('.game_list ul li').not(document.getElementsByClassName('strategy')).css('display','none');
    }

    if($('#type option:selected').val() == "reaction" ){
      $('.game_list ul li').css('display','block');
      $('.game_list ul li').not(document.getElementsByClassName('reaction')).css('display','none');
    }

    if($('#type option:selected').val() == "resistance" ){
      $('.game_list ul li').css('display','block');
      $('.game_list ul li').not(document.getElementsByClassName('resistance')).css('display','none');
    }

    if($('#type option:selected').val() == "guess" ){
      $('.game_list ul li').css('display','block');
      $('.game_list ul li').not(document.getElementsByClassName('guess')).css('display','none');
    }

    if($('#type option:selected').val() == "cooperation" ){
      $('.game_list ul li').css('display','block');
      $('.game_list ul li').not(document.getElementsByClassName('cooperation')).css('display','none');
    }
  });
});
