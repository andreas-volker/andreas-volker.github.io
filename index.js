(function(window, document, undefined) {
    'use strict';
    var NEUA = (window.NEUA = (window.NEUA || {}));
    NEUA.on = {};
    NEUA.on.ready = function() {
        var initing = true,
            loaded = false;

        function init() {
            if (!initing || !NEUA || !NEUA.main)
                return;
            initing = false;
            NEUA.main(window, document, NEUA, undefined);
            console.log('initing');
        }

        function load() {
            if (document.readyState !== 'complete' && !loaded)
                return;
            console.log('loaded');
            loaded = true;
            if (window.location.hash) {
                window.setTimeout(function() {
                    window.scrollTo(0, 0);
                    document.body.scrollTop = 0;
                    init();
                }, 0);
            } else {
                window.location.hash = '';
                init();
            }
        }
        window.onbeforeunload = NEUA.on.beforeunload;
        window.addEventListener('load', load, false);
        load();
    };
    NEUA.on.beforeunload = function() {
        console.log('beforeunload');
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return null;
    };
    NEUA.on.resize = function() {
    };
    NEUA.main = function main(window, document, NEUA, undefined) {
        window.addEventListener('resize', NEUA.on.resize, false);
        window.addEventListener('orientationchange', NEUA.on.resize, false);
        NEUA.on.resize();
    };
    if (!NEUA)
        return;
    document.addEventListener('DOMContentLoaded', NEUA.on.ready, false);
}(this, this.document));