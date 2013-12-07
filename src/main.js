require(['js/util', 'js/sort'], function(util, sort){
    var n = 100, data = [];
    var swap_history = [], blocks = [], i = 0;

    // 生成乱序数组
    data = util.randomArray(n);

    // 绘制初始数组图形
    util.initShape(data, n, blocks);

    // 执行排序
    swap_history = sort.bubble(data);

    // 根据记录回放排序过程
    var replay = window.setInterval(function () {
        if (swap_history.length > 0) {
            util.drawSorting(swap_history, blocks)
        } else {
            window.clearInterval(replay);
        }
    }, 5);
});