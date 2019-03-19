(function MAIN(GLOBAL) {
    'use strict';
    var self = this,
        _ = GLOBAL;
    _.init(function() {
        var el = _.doc.querySelector('h1');
        if (!el)
            return;
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'h1.html', true);
        xhr.onreadystatechange = function() {
            var self = this;
            if (self.readyState === 4) {
                if (self.status < 200 || self.status >= 400)
                    return;
                var data = self.responseText;
                _.replace(el, data);
            }
        };
        xhr.send();
        xhr = null;
    });
    return self;
}((function(window, document, undefined) {
    'use strict';
    return {
        self: window,
        doc: document,
        undef: undefined,
        init: function(cb) {
            cb();
        },
        replace: function(el, data) {
            el.innerHTML = data;
        }
    };
}(this, this.document))));