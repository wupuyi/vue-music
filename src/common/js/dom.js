export function hasClass(el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}
export function addClass(el, className) {

  if (hasClass(el, className)) {
    return
  }
  let newClass = el.className.split(' ')
  // 因为可能存在很多class名
  newClass.push(className)
  el.className = newClass.join(' ')
}
