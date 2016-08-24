/**
 * Created by Tony on 2016/8/22.
 */
$(function(){
  $('.contest_name').each(function(index){
    $(this).on('click',function(){
        $('.contest_name').removeClass('on').find('span').removeClass('on');
        $(this).addClass('on').find('span').addClass('on');
    })
  })
  $(window).scroll(function(){
    $('.contest_context').each(function(index){
     if($(this).offset().top-$(window).scrollTop()<=200)
     {
       changeState(index);
     }
    })
  })

  $('.btn_join').on('click',function(){
     $("#ty_mask").removeClass("hide").addClass("show");
     $(".con_join").removeClass("hide").addClass("show");
     $(".con_join").css({'top':parseInt($(window).scrollTop()+160)+'px'});
  })

  $('.con_join button').on('click',function(){
     $(".con_join").removeClass("show").addClass("hide");
     $(".con_sel").removeClass("hide").addClass("show");
     $(".con_sel").css({'top':parseInt($(window).scrollTop()+160)+'px'})
  })

  $(".con_sel .con_list a").on('click',function(event){
    event.preventDefault();
  })

  $('.con_sel input').on('click',function(){
     $(".con_sel .con_list a").off('click').css({'cursor':'pointer'});
  })

  $(".btn_collect").eq(0).click(function() {
    var ctrl = (navigator.userAgent.toLowerCase()).indexOf('mac') != -1 ? 'Command/Cmd': 'CTRL';
    if (document.all) {
    window.external.addFavorite(window.location, document.title)
    } else if (window.sidebar) {
    window.sidebar.addPanel(document.title, window.location, "")
    } else {
    alert('您可以尝试通过快捷键' + ctrl + ' + D 加入到收藏夹~')
    }
  })
})

function changeState(i){
    $('.contest_name').removeClass('on').find('span').removeClass('on');
    $('.contest_name').eq(i).addClass('on').find('span').addClass('on');
}





