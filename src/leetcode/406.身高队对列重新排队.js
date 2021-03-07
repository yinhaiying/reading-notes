var people = [[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]]
var reconstructQueue = function (people) {
  people.sort((a, b) => b[0] - a[0] || a[1] - b[1]);
  // [ [ 7, 0 ], [ 7, 1 ], [ 6, 1 ], [ 5, 0 ], [ 5, 2 ], [ 4, 4 ] ]
  console.log(people);
  var arr = [];
  for (var i = 0; i < people.length; i++) {
    var item = people[i];
    arr.splice(item[1], 0, item);
  }
  console.log(arr)
};
reconstructQueue(people)

