/**
 * @description 快速排序
 * https://blog.csdn.net/qq_38845858/article/details/104780763
 */

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr
  }
  //  pivotIndex 为基准索引
  var pivotIndex = Math.floor(arr.length / 2)
  // 找到基准，并将基准从原数组中删除
  var pivot = arr.splice(pivotIndex, 1)[0]
  let left = []
  let right = []
  // 比基准小的放在左边，比基准大的放在右边
  arr.forEach(el => {
    if (el < pivot) {
      left.push(el)
    } else {
      right.push(el)
    }
  })
  // 不能再分，退出递归。并将新数组合并
  return quickSort(left).concat([pivot], quickSort(right))
}
let arr = [12, 45, 78, 2, 23, 4, 5, 6]
console.log(quickSort(arr))

