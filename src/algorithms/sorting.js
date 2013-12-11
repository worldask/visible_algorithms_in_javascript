// sorting algorithm
define (function() {
    var result = ['swaps', 'timeSorting'], timeStart, timeEnd;
    result['swaps'] = [];

    var _swap = function(array, x, y, flagLog) {
        var temp;

        temp = array[x];
        array[x] = array[y];
        array[y] = temp;
        result['swaps'].push([x, y]);

        if (flagLog !== undefined && flagLog === 1) {
            console.log(array);
        }

        return;
    };

    // bubble sorting
    var bubble = function(array) {
        var i, j, swapped, temp;
        timeStart = new Date().getTime();

        for (i = array.length; i > 0; i--) {
            swapped = 0;

            for (j = 0; j < i; j++) {
                if (array[j] > array[j + 1]) {
                    _swap(array, j, j + 1);
                    swapped = 1;
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

    // quick sorting 1st: choose the leftest & the rightest elements as benchmark
    var quick1 = function(array, left, right) {
        var i = 0, j = 0, temp, timeStart, timeEnd;
        timeStart = new Date().getTime();

        // assign initial value to left & right
        if (left === undefined) {
            left = 0;
        }
        if (right === undefined) {
            right = array.length - 1;
        }

        if (right > left) {
            while (true) {
                for (i = left; array[i] < array[right]; i++) {
                }
                for (j = right - 1; array[j] > array[right] && j > 0; j--) {
                }

                if (i >= j) {
                    break;
                }

                _swap(array, i, j);
            }
            
            _swap(array, i, right);

            quick1(array, left, i - 1);
            quick1(array, i + 1, right);
        }

        timeEnd = new Date().getTime();
        result['timeSorting'] = timeEnd - timeStart;

        return result;
    };

    return {
        bubble: bubble,
        insert: insert,
        shell: shell,
        quick1: quick1
    };
});