// Produce an array that contains a join of the passed-in arrays.
// Last argument is a comparator function to compare keys
_.mixin({
    join: function () {
        var cmp = arguments[arguments.length - 1];
        var join = [];
        _.each(arguments, function (array) {
            if (typeof array === "function") return;
            _.each(array, function (newObj) {
                var isMerged = false;
                _.each(join, function (joinObj, joinIndex) {
                    if (cmp(newObj, joinObj)) {
                        _.each(joinObj, function (value, key) {
                            newObj[key] = value;
                        });
                        join[joinIndex] = newObj;
                        isMerged = true;
                    }
                });
                if (!isMerged) {
                    join.push(newObj);
                }
            });
        });
        return join;
    }
});
