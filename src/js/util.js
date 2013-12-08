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
    };

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

    // replay sorting process
    var drawSorting = function (history, blocks) {
        var curr_swap = history.shift();
        var i = curr_swap[0];
        var j = curr_swap[1];
        var t = blocks[i].style.height;

        blocks[i].style.height = blocks[j].style.height;
        blocks[j].style.height = t;
    };

    /*
     * add event listener
     * obj        object to be listened
     * eventName  event name
     * fun        function name
     * param      function parameter
     */
    var addEventHandler = function (obj, eventName, fun, param) {
        var fn = fun;
        if (param) {
            fn = function(e) {
                // call fun and all parameter
                fun.call(this, param);
            }
        }
        if (obj.addEventListener) {
            obj.addEventListener(eventName, fn, false);
        } else if (obj.attachEvent) {
            obj.attachEvent('on' + eventName, fn);
        } else {
            obj["on" + eventName] = fn;
        }
    };
 
     /*
     * remove event listener
     * obj        object to be listened
     * eventName  event name
     * fun        function name
     */
    var removeEventHandler = function (obj, eventName, fun) {
        if (obj.removeEventListener){
            obj.removeEventListener(eventName, fun, false);
        } else if (obj.detachEvent) {
            obj.detachEvent("on" + eventName, fun);
        } else{
            delete obj["on" + eventName];
        }
    };


    return {
        randomArray: randomArray,
        randomArray1: randomArray1,
        initShape: initShape,
        changeColor: changeColor,
        drawSorting: drawSorting,
        addEventHandler: addEventHandler,
        removeEventHandler: removeEventHandler
    };
});