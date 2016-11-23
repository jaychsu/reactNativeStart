// Move `arr[from]` to `arr[to]`, `from` and `to` is index in `arr`.
export function arrItemMove(arr, from, to) {
  arr.splice(to, 0, arr.splice(from, 1)[0])
}
