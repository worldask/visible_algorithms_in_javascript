// util.js

define(function() {
    // generate natural number random array start from 1
    var randomArray = function (legnth) {
        var i, result = [];

        // generate ascending natural number array start from 1
        for (i = 1; i <= legnth; i++) {
            result.push(i);
        }

        // random
        for (i = result.length - 1; i > 0; i--) {
            result[i] = result.splice(Math.floor(Math.random() * i), 1, result[i])[0];
        }

        console.log(result);
        return result;
    }

    // generate natural number random array
    var randomArray1 = function(upper, length) {
        var result = [];
        var temp;

        for (i = 0; i < length; i++) {
            // random
            temp = Math.floor(Math.random() * upper + 1);

            // remove repeated
            if (result.indexOf(temp) >= 0) {
                i--;
                continue;
            }

            result.push(temp);
        }

        console.log(result);
        return result;
    };

    // draw random array
    var initShape = function(data, n, blocks) {
        for (var i = 0; i < n; i++) {
            blocks.push(document.createElement("div"));
            blocks[i].style.width = 100.0 / n + "%";
            blocks[i].style.height = data[i] * 100.0 / n + "%";
            document.getElementById("canvas").appendChild(blocks[i]);
        }
    };

    // replay sorting process
    var drawSorting = function (history, blocks) {
        var curr_swap = history.shift();
        var i = curr_swap[0];
        var j = curr_swap[1];
        var t = blocks[i].style.height;

        blocks[i].style.height = blocks[j].style.height;
        blocks[j].style.height = t;
    };

    return {
        randomArray: randomArray,
        randomArray1: randomArray1,
        initShape: initShape,
        drawSorting: drawSorting
    };
});