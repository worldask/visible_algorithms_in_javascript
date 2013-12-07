require(['js/util', 'js/sort'], function(util, sort){
    var n, speed, timer, i = 0, flagPlaying = 0, flagPlayed = 0;
    var data = [], swapHistory = [], blocks = [];

    var init = function() {
        if (flagPlaying == 0 || flagPlayed == 1) {
            flagPlayed = 0;
            n = document.getElementById("arrayLength").value;
            blocks = [];
            data = util.randomArray(n);
            util.initShape(data, n, blocks);
        }
    };

    var stop = function() {
        if (flagPlaying == 1) {
            flagPlaying = 0;
            window.clearTimeout(timer);
            init();
        }
    }

    var replay = function() {
        flagPlaying = 1;
        console.time('replay time-consuming');

        if (swapHistory.length > 0) {
            util.drawSorting(swapHistory, blocks)
        } else {
            console.timeEnd('replay time-consuming');
            flagPlaying = 0;
            flagPlayed = 1;
            window.clearTimeout(timer);
            
            return;
        }

        timer = window.setTimeout(replay, speed);
    };

    var start = function(sortMethod) {
        if (flagPlaying == 0) {
            if (flagPlayed == 1) {
                init();
            }

            speed = document.getElementById("speed").value;
            swapHistory = sortMethod(data);
            replay();
        }
    };

    init();

    util.addEventHandler(document.getElementById("btnBubble"), 'click', start, sort.bubble);
    util.addEventHandler(document.getElementById("btnInsert"), 'click', start, sort.insert);
    util.addEventHandler(document.getElementById("btnShell"), 'click', start, sort.shell);

    document.getElementById("btnReset").onclick = init;
    document.getElementById("btnStop").onclick = stop;
});