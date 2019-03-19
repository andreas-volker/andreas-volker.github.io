(function MAIN(GLOBAL) {
    'use strict';
    var self = this,
        _ = GLOBAL;
    _.init(function() {
        window.console.log('dom loaded');
    });
    document.addEventListener('DOMContentLoaded', _.DOMContentLoaded, false);
    return self;
}((function(window, document, undefined) {
    'use strict';
    var ret = {
        on: {
            resize: [function() {}],
            beforeunload: []
        },
        fix: {
            bug: {},
            reset: {}
        },
        util: {
            mid: {},
            vendor: {}
        }
    };
    ret.init = function init(cb) {
        if (typeof cb === 'function') {
            ret.init.cb = cb;
            // window.addEventListener('resize', ret.on.resize, false);
            // window.addEventListener('orientationchange', ret.util.addOn('resize'), false);
            // ret.util.on('resize');

        } else if (!ret.init.cb) {} else
            ret.init.cb();
    };
    ret.DOMContentLoaded = function() {
        var loaded = false,
            load = function() {
                if (document.readyState !== 'complete' && !loaded)
                    return;
                if (loaded || !(ret && ret.init && ret.init.cb))
                    return;
                loaded = true;
                window.setTimeout(function() {
                    loaded = undefined;
                    ret.fix.reset.scroll();
                    ret.init();
                }, 0);
            };
        window.onbeforeunload = ret.on.beforeunload;
        window.addEventListener('load', load, false);
        load();
    };
    ret.on.beforeunload.push(function() {
        ret.fix.reset.scroll();
        return null;
    });
    ret.fix.reset.scroll = function() {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        document.body.scrollLeft = 0;
    };
    return ret;
}(this, this.document))));