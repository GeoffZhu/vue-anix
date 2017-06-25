export function isEmpty (obj){
  if (obj == null || obj == '' || obj == 'undefined' || obj == 'null') {
     return true;
  }
  if (obj.length > 0) return false;
  if (obj.length === 0) return true;
  for (var key in obj) {
      if (hasOwnProperty.call(obj, key)) return false;
  }
  return true;
}
export function getRandomColor() {
  return '#' + (function (h) {
    return new Array(7 - h.length).join("0") + h;
  })((Math.random() * 0x1000000 << 0).toString(16))
}