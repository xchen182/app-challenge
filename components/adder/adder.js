const prod = (x, y,z) => { return x * y *z}

const adder = new Vue({
  el: '#adder',
  data: {
    guest: 10,
    firstNumber: 5,
    secondNumber: 3
  },
  computed: {
    result: function () {
      const k = parseInt(this.guest)
      const i = parseInt(this.firstNumber)
      const j = parseInt(this.secondNumber)
      return `Your result is ${prod(k,i,j)}.`
    }
  }
})