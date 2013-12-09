// sorting algorithm
define (function() {
    var result = ['swaps', 'timeSorting'], timeStart, timeEnd;
    result['swaps'] = [];

    // bubble sorting
    var bubble = function(array) {
        var i, j, swapped, temp;
        timeStart = new Date().getTime();

        for (i = array.length; i > 0; i--) {
            swapped = 0;

            for (j = 0; j < i; j++) {
                if (array[j] > array[j + 1]) {
                    temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                    swapped = 1;

                    // write log
                    result['swaps'].push([j, j + 1]);
                }
            }

            // if no swaps, finished
            if (swapped = 0) {
                break;
            }
        }

        timeEnd = new Date().getTime();
        result['timeSorting'] = timeEnd - timeStart;
        console.log(array);

        return result;
    };

    // insert sorting
    var insert = function(array) {
        var i, j, temp;
        timeStart = new Date().getTime();

        for (i = 1; i < array.length; i++) {
            temp = array[i];

            for (j = i - 1; j >= 0; j--) {
                if (array[j] > temp) {
                    array[j + 1] = array[j];
                    result['swaps'].push([j, j + 1]);
                } else {
                    break;
                }
            }
            array[j + 1] = temp;
        }

        timeEnd = new Date().getTime();
        result['timeSorting'] = timeEnd - timeStart;
        console.log(array);

        return result;
    };

    // shell sorting
    var shell = function (array) {
        var i, j, h, temp, step = 3;
        timeStart = new Date().getTime();

        // find starting h
        for (h = 1; h <= parseInt(array.length / (step * step)); h = step * h + 1) {
        }

        for (; h > 0; h = parseInt(h / step)) {
            for (i = h; i < array.length; i++) {
                temp = array[i];

                for (j = i - h; j >= 0; j -= h) {
                    if (array[j] > temp) {
                        array[j + h] = array[j];
                        result['swaps'].push([j, j + h]);
                    } else {
                        break;
                    }
                }
                array[j + h] = temp;
            }
        }

        timeEnd = new Date().getTime();
        result['timeSorting'] = timeEnd - timeStart;
        console.log(array);

        return result;
    };

    // quick sorting 1st
    var quick1 = function(array, left, right) {
        var i = 0, j = 0, temp, timeStart, timeEnd;
        timeStart = new Date().getTime();

        if (left === undefined) {
            left = 0;
        }
        if (right === undefined) {
            right = array.length - 1;
        }

        if (right > left) {
            i = left - 1;
            j = right;

            for (;;) {
                while (array[++i] < array[right]) {
                }
                while (j > 0) {
                    if (array[--j] <= array[right]) {
                        break;
                    }
                }
                if (i >= j) {
                    break;
                }

                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
                result['swaps'].push([i, j]);
            }

            temp = array[i];
            array[i] = array[right];
            array[right] = temp;
            result['swaps'].push([i, right]);

            quick1(array, left, i - 1);
            quick1(array, i + 1, right);
        }

        timeEnd = new Date().getTime();
        result['timeSorting'] = timeEnd - timeStart;
        console.log(array);

        return result;
    }

    return {
        bubble: bubble,
        insert: insert,
        shell: shell,
        quick1: quick1
    };
});