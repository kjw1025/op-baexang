$(function(){
    cursorFunc()
});

// 커서


/*===== CURSOR FUNCTION ===== */
function cursorFunc() {
    var cursorBall = $('.cursor-ball');
    var cursorBallCon = $('.cursor-ball .ball');
    var cursorAble = $('.cursor-able');

    var pos = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
    };
    var mouse = {
        x: pos.x,
        y: pos.y
    };
    var speed = 0.35;

    gsap.set(cursorBall, {
        xPercent: -50,
        yPercent: -50
    });

    var xSet = gsap.quickSetter(cursorBall, "x", "px");
    var ySet = gsap.quickSetter(cursorBall, "y", "px");

    window.addEventListener("mousemove", function (e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });



    function myfunc() {
        var dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
        pos.x += (mouse.x - pos.x) * dt;
        pos.y += (mouse.y - pos.y) * dt;
        xSet(pos.x);
        ySet(pos.y);
    }

    cursorAble.each(function () {
        var cursorTxt = $(this).attr('data-cursor');
        $(this).on('mouseenter', function (e) {
            cursorBall.css({
                'display': 'flex'
            });
            gsap.ticker.add(myfunc);
            if (cursorTxt !== undefined) {
                cursorBall.append('<div class="text">' + cursorTxt + '</div>');
                gsap.to(cursorBallCon, .3, {
                    scale: 3.5
                });
            } else {
                cursorBallCon.css({
                    'border-color': '#c9ab81'
                });
                gsap.to(cursorBallCon, .3, {
                    scale: 2.5
                });
            }
        });
        $(this).on('mouseleave', function (e) {
            cursorBall.css({
                'display': 'none'
            });
            gsap.ticker.remove(myfunc);
            if (cursorTxt !== undefined) {
                cursorBall.find(".text").remove();
                gsap.to(cursorBallCon, .3, {
                    scale: 0
                });
            } else {
                cursorBallCon.css({
                    'border-color': '#fff'
                });
                gsap.to(cursorBallCon, .3, {
                    scale: 0
                });
            }
        });
    });
}