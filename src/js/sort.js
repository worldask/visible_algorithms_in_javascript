// sorting algorithm
define (function() {    
    // bubble sorting
    var bubble = function(array) {
        var i, j, swapped, temp, result = [];
        console.time('bubble time-consuming');

        for (i = array.length; i > 0; i--) {
            swapped = 0;

            for (j = 0; j < i; j++) {
                if (array[j] > array[j + 1]) {
                    temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                    swapped = 1;

                    // write log
                    result.push([j, j + 1]);
                }
            }

            // if no swaps, finished
            if (swapped = 0) {
                break;
            }
        }

        console.timeEnd('bubble time-consuming');
        console.log(array);
        return result;
    };

    // insert sorting
    var insert = function(array) {
        var i, j, temp, result = [];
        console.time('insert time-consuming');

        for (i = 1; i < array.length; i++) {
            temp = array[i];

            for (j = i - 1; j >= 0; j--) {
                if (array[j] > temp) {
                    array[j + 1] = array[j];
                    result.push([j, j + 1]);
                } else {
                    break;
                }
            }
            array[j + 1] = temp;
        }

        console.timeEnd('insert time-consuming');
        console.log(array);
        return result;
    };

    // shell sorting
    var shell = function (array) {
        var i, j, h, temp, step = 3, result = [];
        console.time('shell time-consuming');

        // find starting h
        for (h = 1; h <= parseInt(array.length / (step * step)); h = step * h + 1) {
        }

        for (; h > 0; h = parseInt(h / step)) {
            for (i = h; i < array.length; i++) {
                temp = array[i];

                for (j = i - h; j >= 0; j -= h) {
                    if (array[j] > temp) {
                        array[j + h] = array[j];
                        result.push([j, j + h]);
                    } else {
                        break;
                    }
                }
                array[j + h] = temp;
            }
        }

        console.timeEnd('shell time-consuming');
        console.log(array);
        return result;
    };

    // quick sorting 1st
    var quick1 = function(array) {

    };

    return {
        bubble: bubble,
        insert: insert,
        shell: shell,
        quick1: quick1 
    };
});