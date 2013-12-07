require(['js/util', 'js/sort'], function(util, sort){
    var n = 100, i = 0;
    var data = [], swap_history = [], blocks = [];

    // 生成乱序数组
    data = util.randomArray(n);

    // 绘制初始数组图形
    util.initShape(data, n, blocks);

    // 执行排序
    swap_history = sort.bubble(data);

    // 根据记录回放排序过程
    console.time('replay time-consuming');
    var replay = window.setInterval(function () {
        if (swap_history.length > 0) {
            util.drawSorting(swap_history, blocks)
        } else {
            console.timeEnd('replay time-consuming');
            window.clearInterval(replay);
        }
    }, 5);
});