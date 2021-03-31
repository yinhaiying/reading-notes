var findKthLargest = function (nums, k) {
  let len = nums.length;
  let start = 0;
  let end = len;
  const partition = function (arr, start, end) {
    // [)
    let i = start;
    let j = end - 1;
    let item = arr[end - 1];
    while (i < j) {
      if (arr[i] > item) {
        // 需要交换
        j--;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      } else {
        i++;
      }
    }
    [arr[j], arr[end - 1]] = [arr[end - 1], arr[j]];
    return j;
  }

  // 每次都找pivot等于len-k的值。
  while (start < end) {
    let pivot = partition(nums, start, end);
    if (pivot === len - k) {
      return nums[pivot];
    } else if (pivot < len - k) {
      // 说明地len-k个数在右侧;
      start = pivot + 1;
    } else {
      end = pivot;
    }
  }
};
