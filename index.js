(function(window, document, undefined) {
    'use strict';
    var NEUA = (window.NEUA = (window.NEUA || {}));
    NEUA.main = function main(window, document, NEUA, undefined) {
        //INICIA APENAS APÓS DOMContentLoaded
    };
    NEUA.on = {};
    NEUA.on.ready = function() {
        var loaded = false,
            evt = document.createEvent('Event');
        window.onbeforeunload = NEUA.on.beforeunload;
        window.addEventListener('load', function() {
            if (document.readyState !== 'complete' && !loaded)
                return;
            var init = function() {
                    if (loaded && (!NEUA || !NEUA.main))
                        return;
                    loaded = undefined;
                    resize();
                    NEUA.main(window, document, NEUA, undefined);
                },
                resize = function() {
                    window.addEventListener('resize', NEUA.on.resize, false);
                    window.addEventListener('orientationchange', NEUA.on.resize, false);
                    NEUA.on.resize();
                };
            loaded = true;
            if (window.location.hash) {
                window.setTimeout(function() {
                    NEUA.utils.fixScroll();
                    init();
                }, 0);
            } else {
                window.location.hash = '';
                init();
            }
        }, false);
        evt.initEvent('load', false, false);
        window.dispatchEvent(evt);
    };
    NEUA.on.beforeunload = function() {
        NEUA.utils.fixScroll();
        return null;
    };
    NEUA.on.resize = function() {};
    NEUA.utils = {};
    NEUA.utils.fixScroll = function() {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    };
    document.addEventListener('DOMContentLoaded', NEUA.on.ready, false);
}(this, this.document));