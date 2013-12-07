// 工具类
define(function() {
    // 生成乱序数组
    var randomArray = function (legnth) {
        var i, result = [];

        // 生成正序自然数数组
        for (i = 1; i <= legnth; i++) {
            result.push(i);
        }

        // 乱序
        for (i = result.length - 1; i > 0; i--) {
            result[i] = result.splice(Math.floor(Math.random() * i), 1, result[i])[0];
        }

        console.log(result);
        return result;
    }

    // 生成随机数数组
    var randomArray1 = function(length) {
        var result = [];
        var temp;

        for (i = 0; i < length; i++) {
            // 生成随机数
            temp = Math.floor(Math.random() * length + 1);

            // 去重
            if (result.indexOf(temp) >= 0) {
                i--;
                continue;
            }

            result.push(temp);
        }

        console.log(result);
        return result;
    };

    // 绘制初始数组图形
    var initShape = function(data, n, blocks) {
        for (var i = 0; i < n; i++) {
            blocks.push(document.createElement("div"));
            blocks[i].style.width = 100.0 / n + "%";
            blocks[i].style.height = data[i] * 100.0 / n + "%";
            document.getElementById("canvas").appendChild(blocks[i]);
        }
    };

    // 根据排序记录重绘排序过程
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