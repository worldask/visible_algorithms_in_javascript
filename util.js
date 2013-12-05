
// 生成随机数数组
var generateRandomList = (function(upper, length) {
    var result = [];
    var temp;

    for (i = 0; i < length; i++) {
        // 生成随机数
        temp = Math.floor(Math.random() * upper + 1);

        // 去重
        if (_.indexOf(result, temp) >= 0) {
            i--;
            continue;
        }

        result.push(temp);
    }

    console.log(result);
    return result;
});

// 得到画布上下文
var draw = function() {
    canvas = document.getElementById("canvas");

    if (canvas.getContext) {
        ctx = canvas.getContext("2d");
        return ctx;
    }

    return null;
}

// 绘制矩形
var drawRect = function(maxLength, x, height) {
    var canvas = draw();
    canvas.fillStyle = "#2E81CE";
    canvas.strokeStyle = "red";
    canvas.lineWidth = 1;

    x = x * 10;
    height = height;
    maxLength = maxLength;
    // 填充
    canvas.fillRect(x, maxLength - height + 10, 10, height);
    // 描线
    canvas.strokeRect(x, maxLength - height + 10, 10, height);
}

// 绘制数组
var drawArray = function(array) {
    // 清除画布
    var canvas = draw();
    canvas.clearRect(0, 0, 1000, 1000);

    for (i = 0; i < array.length; i++) {
        drawRect(array[array.length - 1], i, array[i]);
    }
};