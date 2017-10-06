(function(window, document, undefined) {
    'use strict';
    var NEUA = window.NEUA = window.NEUA || {};
    NEUA.on = {};
    NEUA.on.ready = function() {
        var initing = true,
            loaded = false;

        function init() {
            if (!initing || !NEUA || !NEUA.main)
                return;
            initing = false;
            NEUA.main(window, document, NEUA, undefined);
            console.log(1);
        }

        function load() {
            if (document.readyState !== 'complete' && !loaded)
                return;
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
        window.addEventListener('beforeunload', NEUA.on.beforeunload, false);
        window.addEventListener('load', load, false);
        load();
    };
    NEUA.on.beforeunload = function() {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return undefined;
    }
    NEUA.on.resize = function() {
        var body = document.body,
            h = (window.screen.height - 20) + 'px';
        if (body) {
            console.log(2);
            body.style.height = h;
            body = body.parentNode;
            if (body)
                body.style.height = h;
        }
    };
    NEUA.main = function main(window, document, NEUA, undefined) {
        window.addEventListener('resize', NEUA.on.resize, false)
        NEUA.on.resize();
    };
    if (!NEUA)
        return;
    document.addEventListener('DOMContentLoaded', NEUA.on.ready, false);
}(this, this.document));