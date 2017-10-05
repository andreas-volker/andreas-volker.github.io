window.NEUA = window.NEUA || {};
NEUA.main = function main(window, document, undefined) {
    var body = document.body,
        h = window.screen.height + 'px';
    if (body) {
        console.log(2);
        body.style.height = h;
        body = body.parentNode;
        if (body)
            body.style.height = h;
    }
};
(function(window, document, undefined) {
    window.NEUA = window.NEUA || {};
    'use strict';
    var initing = true;
    document.addEventListener('DOMContentLoaded', function() {
        var loaded = false;

        function init() {
            if (!initing || !window.NEUA || !window.NEUA.main)
                return;
            initing = false;
            window.NEUA.main(window, document, undefined);
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
        window.onbeforeunload = function() {
            window.scrollTo(0, 0);
            document.body.scrollTop = 0;
            return undefined;
        };
        window.addEventListener('load', load, false);
        load();
    }, false);

}(this, this.document));