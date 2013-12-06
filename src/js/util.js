// 工具类
define(function() {
    // 生成随机数数组
    var randomArray = function(upper, length) {
        var result = [];
        var temp;

        for (i = 0; i < length; i++) {
            // 生成随机数
            temp = Math.floor(Math.random() * upper + 1);

            // 去重
            // if (_.indexOf(result, temp) >= 0) {
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

    return {
        randomArray: randomArray,
        initShape: initShape
    };
});