export function sortArrayObject(array, sort) {
  let sortArray = array;
  sortArray.sort(function (a, b) {
    if (a[sort] > b[sort]) {
      return 1;
    }
    if (a[sort] < b[sort]) {
      return -1;
    }
    return 0;
  });
  return sortArray;
}
