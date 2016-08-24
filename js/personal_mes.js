/**
 * Created by Lilian on 2016/8/22.
 */
$(function(){
    $( "#per_mes_tabs" ).tabs({
        activate:function( event, ui ){
                /* 每次点击设置高度 */
                var iHeight=$("body").height()+30;
                $('#per_iframe', window.parent.document).height(iHeight);
            }
    });
    $( "body" ).on( "tabsload", function( event, ui ) {
        /* 每次点击设置高度 */
        var iHeight=$("body").height()+30;
        $('#per_iframe', window.parent.document).height(iHeight);
    } );

    $("#mes_replyBtn").click(function(){                    //点击回复
        $("#mes_fragment-1").find("textarea").first().removeClass("hide").addClass("show");
        $("#mes_sendBtn").removeClass("hide").addClass("show");
        $(this).removeClass("show").addClass("hide");

        /* 每次点击设置高度 */
        var iHeight=$("body").height()+30;
        $('#per_iframe', window.parent.document).height(iHeight);
    });
    $("#mes_sendBtn").click(function(){                     // 点击发送
        $("#mes_replyBtn").removeClass("hide").addClass("show");
        $(this).removeClass("show").addClass("hide");
        $("#mes_reply").removeClass("hide").addClass("show");
        $("#mes_fragment-1").find("textarea").first().removeClass("show").addClass("hide");
        $("#mes_fragment-1").find(".mes_reply").removeClass("hide").addClass("show");
        $(".mes_reply").last().find("p").html($("#mes_fragment-1").find("textarea").first().val());
        $("#mes_fragment-1").find("textarea").first().val("");

        /* 每次点击设置高度 */
        var iHeight=$("body").height()+30;
        $('#per_iframe', window.parent.document).height(iHeight);
    })

})







