/**
 * Created by Lilian on 2016/8/19.
 */
$(function(){
    /* 竞赛项目、精华高度自适应 */
    var oRecommendDiv=$(".ty_recommend").find(".ty_recommendDetail").eq(0).find(".wid_30");
    var max=0;
    var oContestDetail=$(".ty_contestDetail");
    var oContestDiv1=$(".ty_contestDetail").find(".wid_35");
    var oContestImg=oContestDiv1.find("img");

    window.onresize=window.onload=function(){
        var h1=$(".ty_contestDetail").find(".wid_60").height()+10;
        $(".ty_contestDetail").height(h1);
        oContestDiv1.height(h1);
        oContestImg.height(h1);

        for(var i=0;i<3;i++){
            var h=oRecommendDiv.eq(i).find("p").eq(0).height();
            if(h>0){
                max=h;
            }
        }
        for(var i=0;i<3;i++){
            oRecommendDiv.eq(i).height(max+238);
        }
    }


})



