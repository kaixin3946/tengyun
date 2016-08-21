/**
 * Created by Lilian on 2016/8/20.
 */
$(function(){
    window.onload=window.onresize=function(){
        var clietW=$(document.body).width();
        var imgLeft=$("#personal .ty_sq_avatar .ty_sq_avatarImg").offset().left-0.15*clietW+210;
        $("#personal .ty_sq_avatar .ty_sq_modify").css("left",imgLeft+"px");

        /* 解决火狐不显示iframe问题 */
        var _theframe=document.getElementById("per_iframe");
        _theframe.contentWindow.location.href = _theframe.src;
    }

    /* 显示点击修改 */
    $("#personal .ty_sq_avatar .ty_sq_modify").find("p").first().click(function(){
        $("#personal .ty_sq_avatar .ty_sq_modify").find("div").toggle();
    })

    /* 设置iframe 的高度 */
    $("#per_iframe").load(function(){
        var mainheight = $(this).contents().find("body").height()+30;
        $(this).height(mainheight);
    });

})









