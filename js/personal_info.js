/**
 * Created by Administrator on 2016/8/21.
 */
$(function(){
    /* 图片上传预览 */
    jQuery.fn.extend({
        uploadPreview: function (opts) {
            var _self = this,
                _this = $(this);
            opts = jQuery.extend({
                Img: "ImgPr",
                Width: 100,
                Height: 100,
                ImgType: ["gif", "jpeg", "jpg", "bmp", "png"],
                Callback: function () {}
            }, opts || {});
            _self.getObjectURL = function (file) {
                var url = null;
                if (window.createObjectURL != undefined) {
                    url = window.createObjectURL(file)
                } else if (window.URL != undefined) {
                    url = window.URL.createObjectURL(file)
                } else if (window.webkitURL != undefined) {
                    url = window.webkitURL.createObjectURL(file)
                }
                return url
            };
            _this.change(function () {
                if (this.value) {
                    if (!RegExp("\.(" + opts.ImgType.join("|") + ")$", "i").test(this.value.toLowerCase())) {
                        alert("选择文件错误,图片类型必须是" + opts.ImgType.join("，") + "中的一种");
                        this.value = "";
                        return false
                    }
                    if ($.browser.msie) {
                        try {
                            $("#" + opts.Img).attr('src', _self.getObjectURL(this.files[0]))
                        } catch (e) {
                            var src = "";
                            var obj = $("#" + opts.Img);
                            var div = obj.parent("div")[0];
                            _self.select();
                            if (top != self) {
                                window.parent.document.body.focus()
                            } else {
                                _self.blur()
                            }
                            src = document.selection.createRange().text;
                            document.selection.empty();
                            obj.hide();
                            obj.parent("div").css({
                                'filter': 'progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)',
                                'width': opts.Width + 'px',
                                'height': opts.Height + 'px'
                            });
                            div.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = src
                        }
                    } else {
                        $("#" + opts.Img).attr('src', _self.getObjectURL(this.files[0]))
                    }
                    opts.Callback()
                }
            })
        }
    });

    /* 选择院校 */
    var oMask=$(window.parent.document).find("#ty_mask");
    var oSchoolDialog=$(window.parent.document).find("#per_school_dialog");

    $( "#per_school input").first().focus(function(){
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
                $("#per_school input").first().val($(aTd[i]).text());
        }
        oMask.removeClass("show").addClass("hide");
        oSchoolDialog.removeClass("show").addClass("hide");
        $(window).unbind("wheel");         //弹框消失滑轮可以滚动
    })
    oSchoolDialog.find("div").eq(3).find("button").eq(1).click(function(){
        oMask.removeClass("show").addClass("hide");                                         //点击取消
        oSchoolDialog.removeClass("show").addClass("hide");
        $(window).unbind("wheel");         //弹框消失滑轮可以滚动
    })

    /* 点击切换选中项 */
    $("#startTime").datepicker({});
    $("#endTime").datepicker({});
    $("#info_accordion").accordion();

    $("#info_tag").bind('keydown', function (e) {
        var key = e.which;
        if (key == 13) {
            e.preventDefault();
            $("#info_area ul").first().append($("#info_area ul").first().html()+"<li>"+$("#info_tag").val()+"<img src='../images/chahao.jpg'/></li>");
            $("#info_tag").val("");
            /*aImg=$("#info_area ul").first().find("img");*/
        }
    });

    $("#info_upload").click(function(){
        $(this).next("input[type=file]").click();
    })
    $("#up").uploadPreview({ Img: "ImgPr", width: 290, height: 200 });


    /*$("#info_area ul").first().find("img").on("click",function(){
        alert(1);
        $(this).parent().remove();
    })*/




})







