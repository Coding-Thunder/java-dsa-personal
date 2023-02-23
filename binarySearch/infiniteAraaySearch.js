const findRange = (arr, target) => {
  let start = 0,
    end = 1;
  while (target > arr[end]) {
    let newStart = end + 1;
    end = Math.floor(end + (end - start + 1) * 2);
    start = newStart;
  }

  return { start, end };
};

const binarySearch = (arr, start, end, target) => {
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] > target) end = mid - 1;
    else if (arr[mid] < target) start = mid + 1;
    else return mid;
  }
};

const binarySearchByRange = (arr, target) => {
  let { start, end } = findRange(arr, target);
  if (start && end) {
    let result = binarySearch(arr, start, end, target);
    if (result) return result;
  }
  return -1;
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
console.log(binarySearchByRange(arr, 9));
// s   e
// 1,2,3,4,5,6,7,8,9
//       s
//  start = end + 1
//  satrt = 3 + 1
//  end = end + (end -start +1)
//  end = 3 + (3 - 1 + 1) 3 + 3 * 2 = 12
