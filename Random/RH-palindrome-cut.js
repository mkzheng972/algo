
function palinCut(s) {
  
  let start = 0
  let end = s.length

  function isPalin(str) {
    if (str.length < 2) {
      return false
    }
    let mid = Math.floor(str.length / 2)
    for (let i = 0; i <= mid; i++) {
      if (str[i] !== str[str.length-1-i]) {
        return false
      }
    }
    return true
  }

  while (start < end) {
    let newStr = s.slice(start, end)
    if (isPalin(newStr)) {
      start = end
      end = s.length
    } else {
      end -= 1
    }
  }
  return start === s.length ? "" : s.slice(start)
}

palinCut('eeeetterahf')
