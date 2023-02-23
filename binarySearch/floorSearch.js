const binarySearch = (arr, start, end, target) => {
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] > target) end = mid - 1;
    else if (arr[mid] < target) start = mid + 1;
    else return mid;
  }
  return end;
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 15, 16, 17, 18];

console.log(binarySearch(arr, 0, arr.length, 13));
