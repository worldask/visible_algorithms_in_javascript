requirejs.config({
    paths: {
        underscore: 'vendor/underscore-min',
    },
    shim: {
        underscore: {
            exports: '_',
        }
    }
});

requirejs(['js/util', 'js/sort'], function(util, sort){
    var upper = 100, length = 100;
    var array = util.generateRandomList(upper, length);

    sort.bubble(array);
    //drawArray(array);
});