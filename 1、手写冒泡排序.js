/**
 * @description 冒泡排序
 * https://blog.csdn.net/qq_38845858/article/details/93890367
 */
let arr = [1, 2, 4, 8, 5, 10, 9, 7, 6];
function bubble (arr) {
  if (arr instanceof Array && arr.length > 1) {
    // 外层循环，控制趟数，每一次找到一个最大值
    for (let j = 0; j < arr.length -1; j++) {
      // 内层循环，控制比较的次数，并且判断两个数的大小
      for (let i = 0; i < arr.length - 1 - j; i ++) {
        // 如果前面数大，放到后面
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i]
          arr[i] = arr[i + 1]
          arr[i + 1] = temp
        }
      }
    }
    console.log(arr)
    return arr
  }
}
