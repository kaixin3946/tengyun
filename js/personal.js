/**
 * Created by Lilian on 2016/8/20.
 */
$(function(){
    /* resize 事件 */
   /* (function($,h,c){var a=$([]),e=$.resize=$.extend($.resize,{}),i,k="setTimeout",j="resize",d=j+"-special-event",b="delay",f="throttleWindow";e[b]=250;e[f]=true;$.event.special[j]={setup:function(){if(!e[f]&&this[k]){return false}var l=$(this);a=a.add(l);$.data(this,d,{w:l.width(),h:l.height()});if(a.length===1){g()}},teardown:function(){if(!e[f]&&this[k]){return false}var l=$(this);a=a.not(l);l.removeData(d);if(!a.length){clearTimeout(i)}},add:function(l){if(!e[f]&&this[k]){return false}var n;function m(s,o,p){var q=$(this),r=$.data(this,d);r.w=o!==c?o:q.width();r.h=p!==c?p:q.height();n.apply(this,arguments)}if($.isFunction(l)){n=l;return m}else{n=l.handler;l.handler=m}}};function g(){i=h[k](function(){a.each(function(){var n=$(this),m=n.width(),l=n.height(),o=$.data(this,d);if(m!==o.w||l!==o.h){n.trigger(j,[o.w=m,o.h=l])}});g()},e[b])}})(jQuery,this);
*/
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
        /*$("#personal .ty_sq_avatar .ty_sq_modify").find("div").toggle();*/
        var oDiv=$("#personal .ty_sq_avatar .ty_sq_modify").find("div");
        if(oDiv .hasClass("hide")){
            oDiv.parent().css("z-index","99");
            oDiv.removeClass("hide").addClass("show");

        }else{
            oDiv.parent().css("z-index","4");
            oDiv.removeClass("show").addClass("hide");

        }

    })

    /* 设置iframe 的高度 */
    $("#per_iframe").load(function(){
        var mainheight = $(this).contents().find("body").height()+30;
        $(this).height(mainheight);
    });


    var aLi=$(".ty_sq_tab").first().find("li");
    for(var i=0;i<5;i++){
        aLi[i].index=i;
        $(aLi[i]).click(function(){
            $(this).siblings("li").removeClass("tab_on");
            $(this).addClass("tab_on");
            if(this.index==0){
                $("#per_iframe").attr("src","personal_contest.html");
            }else if(this.index==1){
                $("#per_iframe").attr("src","personal_message.html");
            }else if(this.index==2){
                $("#per_iframe").attr("src","personal_save.html");
            }else if(this.index==3){
                $("#per_iframe").attr("src","personal_info.html");
            }else if(this.index==4){
                $("#per_iframe").attr("src","personal_password.html");
            }
        })
        /*var _theframe=document.getElementById("per_iframe");
        _theframe.contentWindow.location.href = _theframe.src;*/
    }
})









