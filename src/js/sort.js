// 排序算法
define (function() {
    // 冒泡排序
    var bubble = function(array) {
        var i, j, swapped, temp;

        // 遍历数组
        for (i = array.length; i > 0; i--) {
            swapped = 0;

            for (j = 0; j < i; j++) {
                if (array[j] - array[j + 1] > 0) {
                    temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                    swapped = 1;
                    //setTimeout(" drawArray(array) ", 500); 
                }
            }

            // 如果没有发生交换，则排序完成
            if (swapped = 0) {
                break;
            }
        }

        console.log(array);

        return;
    };

    // TODO 插入排序


    // 返回
    return {
        bubble: bubble,
    };
});