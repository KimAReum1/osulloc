$(document).ready(function () {

    var current = 0;    //현재 화면 보이는 대상의 인덱스 값
    var setIntervalId;



    $('.l_btn').click(function (e) {
        e.preventDefault();
        var num = current - 1;  //2 1 0
        if (num == -1) {
            num = 2;
        }
        move2(num);

    });

    $('.r_btn').click(function (e) {
        e.preventDefault();
        var num = current + 1;  //0 1 2
        if (num == 3) {
            num = 0;
        }
        move(num);

    });







    $('.mainimg').on({
        mouseover: function () {
            clearInterval(setIntervalId);
        },
        mouseout: function () {
            timer();
        }
    });







    timer();//함수호출
    function timer() {
        //setInterval(실행할함수,시간(초단위)) 시간간격으로 반복 실행
        //clearInterval() setInterval()을 중지
        //setTimeout(실행할함수,시간(초단위))  특정시간후 한번 실행
        //clearTimout() setTimeout()을 중지

        setIntervalId = setInterval(function () {
            var n = current + 1;    //0 1 2
            if (n == 3) {
                n = 0;
            };

            move(n);//애니메이션 함수 호출
        }, 3000);
    };

    function move(i) {
        if (i == current) return;


        var currentEl = $('.list li').eq(current); //0


        var nextEl = $('.list li').eq(i);


        currentEl.css({ left: '0%' }).animate({ left: '-100%' });
        nextEl.css({ left: '100%' }).animate({ left: '0%' });
        current = i;


    };


    function move2(i) {
        if (i == current) return;


        var currentEl = $('.list li').eq(current); //0

        var nextEl = $('.list li').eq(i);


        currentEl.css({ left: '0%' }).animate({ left: '100%' });
        nextEl.css({ left: '-100%' }).animate({ left: '0%' });
        current = i;

    };
});