require(['js/util', 'js/sort'], function(util, sort){
    var n = 200, i = 0;
    var data = [], swap_history = [], blocks = [];

    data = util.randomArray(n);
    util.initShape(data, n, blocks);
    // swap_history = sort.bubble(data);
    // swap_history = sort.insert(data);
    swap_history = sort.shell(data);

    // replay
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