$(document).ready(function(){
    //换背景
    $(".group1").mouseover(function(){
        $(".bg1").css({"opacity":"1"})
    });
    $(".group1").mouseout(function(){
        $(".bg1").css({"opacity":"0"})
    });
    $(".group2").mouseover(function(){
        $(".bg2").css({"opacity":"1"})
    });
    $(".group2").mouseout(function(){
        $(".bg2").css({"opacity":"0"})
    });
    $(".group3").mouseover(function(){
        $(".bg3").css({"opacity":"1"})
    });
    $(".group3").mouseout(function(){
        $(".bg3").css({"opacity":"0"})
    });
    $(".group4").mouseover(function(){
        $(".bg4").css({"opacity":"1"})
    });
    $(".group4").mouseout(function(){
        $(".bg4").css({"opacity":"0"})
    });
    $(".group5").mouseover(function(){
        $(".bg5").css({"opacity":"1"})
    });
    $(".group5").mouseout(function(){
        $(".bg5").css({"opacity":"0"})
    });



//向下的箭头跳动
    function tiaodong(){
    $(".down-img").animate({top:"15px"},300)
    $(".down-img").animate({top:"0px"},300)
    };
     setInterval(tiaodong,300);
    $(".dian-bottom").mouseover(function(){
        $(".dian-bottom").animate({top:"35px",height:"73px"},300);
    });
    $(".dian-bottom").mouseout(function(){
        $(".dian-bottom").animate({top:"90%",height:"10%"},300);
    });


//收起张开
    var c=0;
    $(".dian").click(function(){
        if(c==0){
            $(".next").animate({top:"170px"},700);
            $(".bottom").animate({top:"1049px"},700);
            $(".main-p,.main-img").hide();
        }
        if(c==1){
            $(".next").animate({top:"639px"},700);
            $(".bottom").animate({top:"1518px"},700);
            $(".main-p,.main-img").show();
        }
        c++;
        c=c%2;
    });



})