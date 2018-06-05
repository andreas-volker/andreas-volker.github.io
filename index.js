(function(window, document, undefined) {
    'use strict';
    var NEUA = (window.NEUA = (window.NEUA || {}));
    NEUA.on = {};
    NEUA.on.ready = function() {
        var loaded = false,
            ev = new Event('load', null);
        window.onbeforeunload = NEUA.on.beforeunload;
        window.addEventListener('load', function() {
            if (document.readyState !== 'complete' && !loaded)
                return;

            function init() {
                if (loaded && (!NEUA || !NEUA.main))
                    return;
                loaded = undefined;
                NEUA.main(window, document, NEUA, undefined);
            }
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
        }, false);
        document.dispatchEvent(ev);
    };
    NEUA.on.beforeunload = function() {
        console.log('beforeunload');
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return null;
    };
    NEUA.on.resize = function() {};
    NEUA.main = function main(window, document, NEUA, undefined) {
        window.addEventListener('resize', NEUA.on.resize, false);
        window.addEventListener('orientationchange', NEUA.on.resize, false);
        NEUA.on.resize();
    };
    if (!NEUA)
        return;
    document.addEventListener('DOMContentLoaded', NEUA.on.ready, false);
}(this, this.document));