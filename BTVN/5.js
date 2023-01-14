const name1 = localStorage.setItem('mot','ha')
const name2 = localStorage.setItem('hai','huy')
const name3 = localStorage.setItem('ba','hieu')
const name4 = localStorage.setItem('bon','huong')
const name5 = localStorage.setItem('nam','hung')
const name6 = localStorage.setItem('sau','huyen')

const nameChange = localStorage.getItem('mot')
nameChange.name = 'phuoc'
localStorage.setItem('mot',nameChange)

