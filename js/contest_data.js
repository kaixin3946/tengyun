/**
 * Created by Tony on 2016/8/22.
 */
$(function(){
    $('#contest_data_t').niceScroll({
        cursorcolor: "#3366CC",//#CC0071 光标颜色
        cursoropacitymax: 1, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0
        touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备
        cursorwidth: "10px", //像素光标的宽度
        cursorborder: "0", //   游标边框css定义
        cursorborderradius: "0px",//以像素为光标边界半径
        autohidemode: false //是否隐藏滚动条
    });

    $(".contest_data a").on('click',function(event){
      event.preventDefault();
    })

    $('.contest_data input').on('click',function(){
      $(".contest_data a").off('click').css({'cursor':'pointer'});
    })
    
})






