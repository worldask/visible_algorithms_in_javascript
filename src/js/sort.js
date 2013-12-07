// sorting algorithm
define (function() {    
    // bubble sorting
    var bubble = function(array) {
        console.time('bubble time-consuming');

        var i, j, swapped, temp, result = [];

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
        console.time('insert time-consuming');

        var i, j, temp, result = [];

        for (i = 1; i < array.length; i++) {
            temp = array[i];

            for (j = i - 1; j >= 0; j--) {
                if (array[j] > temp) {
                    array[j + 1] = array[j];

                    // write log
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

    return {
        bubble: bubble,
        insert: insert
    };
});