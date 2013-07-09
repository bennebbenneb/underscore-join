underscore-join
===============

A mixin for underscore that add a function similar to SQL Joins

Example Usage -

    var list1 = [
        {
            id: 1,
            columnA: "column A"
        },
        {
            id: 2,
            columnA: "column A"
        }
    ];

    var list2 = [
        {
            id: 1,
            columnB: "column B"
        },
        {
            id: 2,
            columnB: "column B"
        }
    ];

    var list3 = [
        {
            id: 1,
            columnC: "column C"
        },
        {
            id: 2,
            columnC: "column C"
        }
    ];

    var join = _.join(list1, list2, list3, function (l1, l2) {
        return l1.id === l2.id;
    });

    join = [
        {
            id: 1,
            columnA: "column A",
            columnB: "column B",
            columnC: "column C"
        },
        {
            id: 2,
            columnA: "column A",
            columnB: "column B",
            columnC: "column C"
        }
    ];