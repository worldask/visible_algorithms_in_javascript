// sorting algorithm
define (function() {
    var result = ['swaps', 'timeSort'], timeStart, timeEnd;
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

    // bubble sort
    var bubble = function(array) {
        var i, j, swapped;
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
        result['timeSort'] = timeEnd - timeStart;
        console.log(array);

        return result;
    };

    // insertion sort
    var insertion = function(array) {
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
        result['timeSort'] = timeEnd - timeStart;
        console.log(array);

        return result;
    };

    // shell sort
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
        result['timeSort'] = timeEnd - timeStart;
        console.log(array);

        return result;
    };

    // quick sort 1st: choose the leftest & the rightest elements as benchmark
    var quick1 = function(array, left, right) {
        var i = 0, j = 0, timeStart, timeEnd;
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
        result['timeSort'] = timeEnd - timeStart;

        return result;
    };

    // quick sort 2nd: choose the leftest & the rightest & the middle elements as benchmark
    var _quick2 = function(array, left, right) {
        var i = 0, j = 0, mid = 0, timeStart, timeEnd;
        timeStart = new Date().getTime();

        if (right - left >= 9) {
        // if (right > left) {
            mid = parseInt((left + right) / 2);

            if (array[left] > array[mid]) {
                _swap(array, left, mid, 1);
            }
            if (array[left] > array[right]) {
                _swap(array, left, right, 1);
            }
            if (array[mid] > array[right]) {
                _swap(array, mid, right, 1);
            }
            _swap(array, mid, right - 1, 1);

            while (true) {
                for (i = left + 1; array[i] < array[right - 1] && i < right - 1; i++) {
                }
                for (j = right - 2; array[j] > array[right - 1] && j > 1; j--) {
                }

                if (i >= j) {
                    break;
                }

                _swap(array, i, j);
            }
            
            _swap(array, i, right - 1);

            _quick2(array, left, i - 1);
            _quick2(array, i + 1, right);
        }

        timeEnd = new Date().getTime();
        result['timeSort'] = timeEnd - timeStart;

        return result;
    };

    var quick2 = function(array) {
        var result1 = _quick2(array, 0, array.length - 1);
        insertion(array);

        return result1;
    }

    // quick sort 3th: choose the leftest & the rightest & the middle elements as benchmark
    var _quick3 = function(array, left, right) {
        var i = 0, j = 0, mid = 0, timeStart, timeEnd;
        timeStart = new Date().getTime();

        while (right - left >= 9) {
            mid = parseInt((left + right) / 2);

            if (array[left] > array[mid]) {
                _swap(array, left, mid, 1);
            }
            if (array[left] > array[right]) {
                _swap(array, left, right, 1);
            }
            if (array[mid] > array[right]) {
                _swap(array, mid, right, 1);
            }
            _swap(array, mid, right - 1, 1);

            while (true) {
                for (i = left + 1; array[i] < array[right - 1] && i < right - 1; i++) {
                }
                for (j = right - 2; array[j] > array[right - 1] && j > 1; j--) {
                }

                if (i >= j) {
                    break;
                }

                _swap(array, i, j);
            }
            
            _swap(array, i, right - 1);

            if (i - left > right - i) {
                _quick3(array, i + 1, right);
                right = i - 1;
            } else { 
                _quick3(array, left, i - 1);
                left = i + 1;
            }
        }

        timeEnd = new Date().getTime();
        result['timeSort'] = timeEnd - timeStart;

        return result;
    };

    var quick3 = function(array) {
        var result1 = _quick3(array, 0, array.length - 1);
        insertion(array);

        return result1;
    }

    // quick sort 4th: choose the leftest & the rightest & the middle elements as benchmark
    var _quick4 = function(array, left, right) {
        var i = 0, j = 0, mid = 0, timeStart, timeEnd;
        timeStart = new Date().getTime();
        var diff = right - left;

        while (diff >= 9) {
            mid = parseInt(Math.floor(Math.random() * length) % diff);
            if (mid < 1 || mid > diff - 2) {
               mid = 1;
            } 
            mid = left + mid;

            if (array[left] > array[mid]) {
                _swap(array, left, mid, 1);
            }
            if (array[left] > array[right]) {
                _swap(array, left, right, 1);
            }
            if (array[mid] > array[right]) {
                _swap(array, mid, right, 1);
            }
            _swap(array, mid, right - 1, 1);

            while (true) {
                for (i = left + 1; array[i] < array[j] && i < right - 1; i++) {
                }
                for (j = right - 2; array[j] > array[j] && j > 1; j--) {
                }

                if (i >= j) {
                    break;
                }

                _swap(array, i, j);
            }
            
            _swap(array, i, right - 1);

            if (i - left > right - i) {
                _quick4(array, i + 1, right);
                right = i - 1;
            } else { 
                _quick4(array, left, i - 1);
                left = i + 1;
            }
        }

        timeEnd = new Date().getTime();
        result['timeSort'] = timeEnd - timeStart;

        return result;
    };

    var quick4 = function(array) {
        var result1 = _quick4(array, 0, array.length - 1);
        insertion(array);

        return result1;
    }

    return {
        bubble: bubble,
        insertion: insertion,
        shell: shell,
        quick1: quick1,
        quick2: quick2,
        quick3: quick3,
        quick4: quick4
    };
});
