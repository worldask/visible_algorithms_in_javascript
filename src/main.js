require.config({
    paths: {
        underscore: 'vendor/underscore-min',
    },
    shim: {
        underscore: {
            exports: '_',
        }
    }
});

require(['js/util', 'js/sort'], function(util, sort){
    var upper = 100, n = 100, data = [];
    var swap_history = [], blocks = [], i = 0;
    // 生成乱序数组
    var data = util.randomArray(upper, n);
    // TODO 另一种生成乱序数组的方法
    // 生成数组
    // for (i=0; i<n; i++) {data.push(i);}
    // 乱序
    // for (i=data.length-1; i>0; i--) {data[i] = data.splice(Math.floor(Math.random() * i), 1, data[i])[0];}

    // 绘制初始数组图形
    util.initShape(data, n, blocks);

    // 执行排序
    swap_history = sort.bubble(data);

    // 根据排序记录重绘排序过程
    var ses_interv = window.setInterval(function () {
        if (swap_history.length > 0) {
            var curr_swap = swap_history.shift();
            var i = curr_swap[0];
            var j = curr_swap[1];
            var t = blocks[i].style.height;
            blocks[i].style.height = blocks[j].style.height;
            blocks[j].style.height = t;
        } else {
            window.clearInterval(ses_interv);
        }
    }, 5);
});