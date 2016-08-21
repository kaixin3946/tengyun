/**
 * Created by Lilian on 2016/8/20.
 */
$(function(){
    /*  显示登录 、注册 */
    $(".ty_login span").first().click(function(){
        $("#ty_mask").removeClass("hide").addClass("show");
        $("#ty_login").removeClass("hide").addClass("show");

        $(window).bind("wheel",function(event){          //弹框出现阻止滑轮滚动
            event.preventDefault();
            return false;
        });
        /*$(window).scroll(function(){
            $(window).scrollTop(0);
        });*/
    })
    $(".ty_login span").eq(1).click(function(){
        $("#ty_mask").removeClass("hide").addClass("show");
        $("#ty_register").removeClass("hide").addClass("show");

        $(window).bind("wheel",function(event){          //弹框出现阻止滑轮滚动
            event.preventDefault();
            return false;
        });
    })

   /* 关闭登录或注册页面 */
    $(".ty_loginClose").first().click(function(){
        $("#ty_mask").removeClass("show").addClass("hide");
        $("#ty_login").removeClass("show").addClass("hide");

        $(window).unbind("wheel");         //弹框消失滑轮可以滚动
    })
    $(".ty_loginClose").eq(1).click(function(){
        $("#ty_mask").removeClass("show").addClass("hide");
        $("#ty_register").removeClass("show").addClass("hide");

        $(window).unbind("wheel");         //弹框消失滑轮可以滚动
    })

    /* 登录 */
    $(".ty_loginBtn").first().click(function(){             //用户名密码对，则关闭，显示头像，否则不关闭，显示用户名密码错误
        $("#ty_mask").removeClass("show").addClass("hide");
        $("#ty_login").removeClass("show").addClass("hide");
        $(".ty_login").first().removeClass("show").addClass("hide");
        $(".ty_avatar").first().removeClass("hide").addClass("show");

        $(window).unbind("wheel");         //弹框消失滑轮可以滚动
    })
    /* 注册 */
    /* 验证手机号 */
    $(".ty_regTel").first().find("input").first().blur(function(){

        var tel = $(".ty_regTel").first().find("input").first().val();
        var reg = /^0?1[3|4|5|8][0-9]\d{8}$/;
        if (reg.test(tel)) {
            $(".ty_regError").first().removeClass("show").addClass("hide");
            $(".ty_regError").first().find("div").first().removeClass("show").addClass("hide");
        }else{
            $(".ty_regError").first().removeClass("hide").addClass("show");
            $(".ty_regError").first().find("div").first().removeClass("hide").addClass("show");
        };
    })
    /* 使密码可见 */
    var isSelected1=$(".ty_passwordShow").first().find("input").eq(1).is(':checked');
    var isSelected2=$(".ty_passwordShow").eq(1).find("input").eq(1).is(':checked');
    if(isSelected1){
        $(".ty_passwordShow").first().find("input").eq(0).attr("type", "text");
    }
    if(isSelected2){
        $(".ty_passwordShow").eq(1).find("input").eq(0).attr("type", "text");
    }
    $(".ty_passwordShow").first().find("input").eq(1).click(function(){
        isSelected1=$(".ty_passwordShow").first().find("input").eq(1).is(':checked');
        if(isSelected1){
            $(".ty_passwordShow").first().find("input").eq(0).attr("type", "text");
        }else{
            $(".ty_passwordShow").first().find("input").eq(0).attr("type", "password");
        }
    })
    $(".ty_passwordShow").eq(1).find("input").eq(1).click(function(){
        isSelected2=$(".ty_passwordShow").eq(1).find("input").eq(1).is(':checked');
        if(isSelected2){
            $(".ty_passwordShow").eq(1).find("input").eq(0).attr("type", "text");
        }else{
            $(".ty_passwordShow").eq(1).find("input").eq(0).attr("type", "password");
        }
    })

    $(".ty_registerBtn").first().click(function(){             //验证码对，则关闭，显示头像，否则不关闭，显示验证码错误
        $("#ty_mask").removeClass("show").addClass("hide");
        $("#ty_register").removeClass("show").addClass("hide");
        $(".ty_login").first().removeClass("show").addClass("hide");
        $(".ty_avatar").first().removeClass("hide").addClass("show");
    })

    /* 下载量、访问量滚动 */
    setInterval(function(){
        setNumber($(".t_num1"), Math.floor(Math.random() * 1000000));       //这里放入后台取回的数据
        setNumber($(".t_num2"), Math.floor(Math.random() * 1000000));       //这里放入后台取回的数据
        setNumber($(".t_num3"), Math.floor(Math.random() * 1000000));       //这里放入后台取回的数据
    },3000)
    function setNumber(dom, number){
        var n = String(number),len = n.length;
        //如果新的数字短于当前的，要移除多余的i
        if(dom.find("i").length > len){
            dom.find("i:gt(" + (len - 1) + ")").remove();
        }

        //开始填充每一位
        for(var i=0;i<len;++i){
            //位数不足要补
            if(dom.find("i").length < len){
                dom.append("<i></i>");
            }

            var obj = dom.find("i").eq(i);
            var y = -40 * parseInt(n.charAt(i), 10);

            //利用动画变换数字
            var z="0px "+y+"px";
            obj.animate({ backgroundPosition:z }, 350);
        }
    };

    /* 自定义backgroundPosition的animate，支持火狐，jQuery1.8以上版本 */
    (function($) {
             $.fx.step["backgroundPosition"] = function(fx) {
                     if (typeof fx.end == 'string') {
                             fx.start = getBgPos(fx.elem);
                             //fx.end原本是一个string，这里将它转换成数组，就不会再进入这个if，也方便我们下面的计算
                             //例 "0px -21px"
                             fx.end = [parseFloat(fx.end.split(" ")[0]), parseFloat(fx.end.split(" ")[1])];
                         }
                    //这里fx.pos是根据传入的时间参数，从0到1变化的浮点数
                    var nowPosX = ((fx.end[0] - fx.start[0]) * fx.pos) + fx.start[0] + fx.unit;
                     var nowPosY = ((fx.end[1] - fx.start[1]) * fx.pos) + fx.start[1] + fx.unit;
                     fx.elem.style.backgroundPosition = nowPosX + ' ' + nowPosY;

                    /**
                       * 获取backgroundPosition数组[top, left]，没有单位
                       */
                    function getBgPos(elem) {
                            var top  = 0.0;
                            var left = 0.0;
                             if ($(elem).css("backgroundPosition")) {
                                     //例 "0px -21px"
                                     top  = parseFloat($(elem).css("backgroundPosition").split(" ")[0]);
                                    left = parseFloat($(elem).css("backgroundPosition").split(" ")[1]);
                                 }else{
                                    top  = parseFloat($(elem).css("backgroundPositionX"));
                                    left = parseFloat($(elem).css("backgroundPositionY"));
                                 }
                             return [top, left];
                        }
                }
         })(jQuery);
})


