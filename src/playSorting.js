// playSorting.js

define(['util', 'algorithms/sorting'], function(util, sorting){
    var n, speed, timer, flagPlaying = 0, flagPlayed = 0;
    var swaps, timeSorting, timePlayStart, timePlayEnd;
    var data = [], swapHistory = [], blocks = [];

    var init = function() {
        // bind event handler to sorting buttons 
        util.addEventHandler(document.getElementById("btnBubble"), 'click', ready, sorting.bubble);
        util.addEventHandler(document.getElementById("btnInsert"), 'click', ready, sorting.insert);
        util.addEventHandler(document.getElementById("btnShell"), 'click', ready, sorting.shell);

        // bind event handler to control buttons 
        document.getElementById("btnReset").onclick = reset;
        
        // bind event handler to color picker 
        var colorBlocks = document.getElementsByClassName("color-block");
        var selectedColor;

        for (block in colorBlocks) {
            if (typeof colorBlocks[block] == 'object') {
                util.addEventHandler(colorBlocks[block], 'click', changeColor, colorBlocks[block].style.backgroundColor);
            }
        }

        start();
    };

    // draw initial graph
    var initGraph = function(data, n, blocks) {
        document.getElementById("canvas").innerHTML = '';
        var color = document.getElementById("selectedColor").value;

        for (var i = 0; i < n; i++) {
            blocks.push(document.createElement("div"));
            blocks[i].style.backgroundColor = color;
            blocks[i].style.width = 100.0 / n + "%";
            blocks[i].style.height = data[i] * 100.0 / n + "%";
            document.getElementById("canvas").appendChild(blocks[i]);
        }
    };

    var ready = function(sortMethod) {
        if (flagPlaying == 0) {
            if (flagPlayed == 1) {
                start();
            }

            speed = document.getElementById("speed").value;
            swapHistory = sortMethod(data);
            swaps = swapHistory['swaps'].length;
            timeSorting = swapHistory['timeSorting'];

            timePlayStart = new Date().getTime();
            go();
        }
    };

    var go = function() {
        flagPlaying = 1;
        // console.time('replay time-consuming');

        if (swapHistory['swaps'].length > 0) {
            var current = swapHistory['swaps'].shift();
            swap(current, blocks)
        } else {
            timePlayEnd = new Date().getTime();
            // console.timeEnd('replay time-consuming');
            _writeStatistics();
            flagPlaying = 0;
            flagPlayed = 1;
            window.clearTimeout(timer);
            
            return;
        }

        timer = window.setTimeout(go, speed);
    };

    var reset = function() {
        flagPlaying = 0;
        window.clearTimeout(timer);
        start();
    }

    var start = function() {
        if (flagPlaying == 0 || flagPlayed == 1) {
            flagPlayed = 0;
            n = document.getElementById("arrayLength").value;
            blocks = [];
            data = util.randomArray(n);
            initGraph(data, n, blocks);
            document.getElementById("statistics").innerHTML= "";
        }
    };

    // swap blocks
    var swap = function (history, blocks) {
        var i = history[0];
        var j = history[1];
        var t = blocks[i].style.height;

        blocks[i].style.height = blocks[j].style.height;
        blocks[j].style.height = t;
    };

    var _writeStatistics = function() {
        var html = '';

        html = 'swaps: ' + swaps + ' times, ';
        html += 'sorting time consuming: ' + timeSorting + ' ms, '
        html += 'play time consuming: ' + (timePlayEnd - timePlayStart) + ' ms';
        document.getElementById("statistics").innerHTML= html;
    };

    // change blocks color
    var changeColor = function(color) {
        document.getElementById("selectedColor").value = color;
        var blocks = document.getElementById("canvas").children;

        for (block in blocks) {
            if (typeof blocks[block] == 'object') {
                blocks[block].style.backgroundColor = color;
            }
        }
    };

    return {
        init: init
    };
});