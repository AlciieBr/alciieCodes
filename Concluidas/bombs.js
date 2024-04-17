// 1 ==> 42
Bomb.diffuse(42)

// 2 ==> Keep Trying
Bomb.diffuse()
Bomb.diffuse()
Bomb.diffuse()
Bomb.diffuse()
Bomb.diffuse()

// 3 ==> Global
Bomb.diffuse(global.BombKey)

// 4 ==> diffusethebomb
var diffuseTheBomb = () => true
Bomb.diffuse()

// 5 ==> B64
Bomb.diffuse(3.14159)

// 6 ==> 4 years ago
let fourYears = new Date().setFullYear( new Date().getFullYear() - 4 )
Bomb.diffuse(fourYears);

//7 ==> Freezing
Bomb.diffuse(Object.freeze({key: 43}))

//8 ==> ( code === 42 ) && ( Math.random() * Math.random() * Math.random() === 0.5 )
Bomb.diffuse( obj = {
  i: 0,
  valueOf: function() {
    let outp = this.i ? 11 : 9
    this.i++
    return outp
  }
})

//9 ==> ( code === 42 ) && ( Math.random() * Math.random() * Math.random() === 0.5 )
Math.random = function() {
  return {
  valueOf: () => {
  let x = 0
  if (!this.Used) { x = 0.5; this.Used = true} else {x = 1}
  return x
}} }
Bomb.diffuse(42)

//10 ==> Buffer.from( code, 'base64' ).toString( 'ascii' ), [ 1, 2, 3 ] + [ 3 ] + [ 3, 4, 5, 6, 7, 8 ] == 42);}
Array.prototype.valueOf = () => 14 // 42/3
Bomb.diffuse(new Buffer("yes").toString("base64"))