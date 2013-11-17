;
(function ($, w, undefined) {
    var stack = null;
    var queue = null;


    stack = function() {
        this.stackItems = [];
    };
    stack.prototype = {
        push: function (item) {
            this.stackItems.push(item);
            return this;
        },
        pop: function () {
            var item = null;
            var stackItems = this.stackItems;
            var length = stackItems.length;
            if (length > 0) {
                item = stackItems[length - 1];
                this.stackItems.length -= 1;
            }
            return item;
        },
        clear: function () {
            this.stackItems.length = 0;
            return this;
        },
        isEmpty: function () {
            if (this.stackItems.length === 0) {
                return true;
            }
            else {
                return false;
            }
        },
        itemCount: function () {
            return this.stackItems.length;
        }
    };

    queue = function() {
        this.queueItems = [];
    }
    queue.prototype = {
        push: function (item) {
            this.queueItems.push(item);
            return this;
        },
        pop: function () {
            var item = null;
            var i = 0;
            var queueItems = this.queueItems;
            var length = queueItems.length;
            if (length > 0) {
                item = queueItems[0];
                for (; i < length-1; i++) {
                    this.queueItems[i] = this.queueItems[i + 1];
                }
                this.queueItems.length -= 1;
            }
            return item;

        },
        clear: function () {
            this.queueItems.length = 0;
        },
        isEmpty: function () {
            if (this.queueItems.length === 0) {
                return true;
            }
            else {
                return false;
            }
        },
        itemCount: function () {
            return this.queueItems.length;
        }
    };

    w["DataStructure"] = {};
    w.DataStructure["Stack"] = stack;
    w.DataStructure["Queue"] = queue;
})($, window);