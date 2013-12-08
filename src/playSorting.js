// playSorting.js

define(['util', 'algorithms/sorting'], function(util, sorting){
    var n, speed, timer, flagPlaying = 0, flagPlayed = 0;
    var data = [], swapHistory = [], blocks = [];

    var init = function() {
        // bind event handler to sorting buttons 
        util.addEventHandler(document.getElementById("btnBubble"), 'click', ready, sorting.bubble);
        util.addEventHandler(document.getElementById("btnInsert"), 'click', ready, sorting.insert);
        util.addEventHandler(document.getElementById("btnShell"), 'click', ready, sorting.shell);

        // bind event handler to control buttons 
        document.getElementById("btnReset").onclick = reset;
        document.getElementById("btnStop").onclick = stop;
        
        // bind event handler to color picker 
        var colorBlocks = document.getElementsByClassName("color-block");
        var selectedColor;

        for (block in colorBlocks) {
            if (typeof colorBlocks[block] == 'object') {
                util.addEventHandler(colorBlocks[block], 'click', changeColor, colorBlocks[block].style.backgroundColor);
            }
        }
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
                reset();
            }

            speed = document.getElementById("speed").value;
            swapHistory = sortMethod(data);
            go();
        }
    };

    var go = function() {
        flagPlaying = 1;
        console.time('replay time-consuming');

        if (swapHistory.length > 0) {
            var current = swapHistory.shift();
            swap(current, blocks)
        } else {
            console.timeEnd('replay time-consuming');
            flagPlaying = 0;
            flagPlayed = 1;
            window.clearTimeout(timer);
            
            return;
        }

        timer = window.setTimeout(go, speed);
    };

    var stop = function() {
        if (flagPlaying == 1) {
            flagPlaying = 0;
            window.clearTimeout(timer);
            reset();
        }
    }

    var reset = function() {
        if (flagPlaying == 0 || flagPlayed == 1) {
            flagPlayed = 0;
            n = document.getElementById("arrayLength").value;
            blocks = [];
            data = util.randomArray(n);
            initGraph(data, n, blocks);
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
        reset: reset,
        init: init
    };
});