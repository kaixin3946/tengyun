/**
 * Created by Administrator on 2016/8/21.
 */
$(function(){

    /* 选择院校 */
    var oMask=$(window.parent.document).find("#ty_mask");
    var oSchoolDialog=$(window.parent.document).find("#per_school_dialog");

    $( "#per_school").click(function(){
        oMask.removeClass("hide").addClass("show");
        oSchoolDialog.removeClass("hide").addClass("show");
        $(window).bind("wheel",function(event){          //弹框出现阻止滑轮滚动
            event.preventDefault();
            return false;
        });
    })
    var aTd=oSchoolDialog.find("table").find("td");
    var tdLen=aTd.length;
    for(var i=0;i<tdLen;i++){
        /*aTd.index=i;*/
        $(aTd[i]).click(function(){
            /*alert($(this).index);*/
            for(var j=0;j<tdLen;j++){
                $(aTd[j]).removeClass("schoolOn");
            }
            $(this).addClass("schoolOn");
        })
    }

    oSchoolDialog.find("div").eq(3).find("button").eq(0).click(function(){              //点击确定
        for(var k=0;k<tdLen;k++){
            /*alert($(aTd[6]).attr("class"));*/
            if($(aTd[k]).attr("class").indexOf("schoolOn")>-1){
                /*alert($(aTd[i]).text());*/
                $("#per_school input").first().val();
            }
        }
        oMask.removeClass("show").addClass("hide");
        oSchoolDialog.removeClass("show").addClass("hide");
    })
    oSchoolDialog.find("div").eq(3).find("button").eq(1).click(function(){
        oMask.removeClass("show").addClass("hide");                                         //点击取消
        oSchoolDialog.removeClass("show").addClass("hide");
    })

})







