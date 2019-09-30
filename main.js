//const add = (x, y, k) => { return x + y + k}

const validate = async (event) => {
  console.log(`triggered validate on ${event.target.id}`)
  const isValid = event.target.checkValidity()
  if (isValid) {
    event.target.nextElementSibling.innerHTML = ''
  } else {
    event.target.nextElementSibling.innerHTML = 'Invalid input'
    event.target.focus()
  }
}

const updateWithVol = async (event) => {
  document.querySelector('#result').innerHTML = ''
  if (document.querySelector('#firstNumber').checkValidity() && document.querySelector('#secondNumber').checkValidity() && document.querySelector('#thirdNumber').checkValidity()) {
    //const regex = /[^a-zA-Z_]/g
    //const s = document.querySelector('#guest').value.replace(regex, '')
    const i = parseInt(document.querySelector('#firstNumber').value)
    const j = parseInt(document.querySelector('#secondNumber').value)
    const k = parseInt(document.querySelector('#thirdNumber').value)
    const ans = `Volume is ${i*j*k}.`
    document.querySelector('#result').innerHTML = ans
  }
}

document.addEventListener('focusout', event => {
  if ((event.target && event.target.id === 'firstNumber') ||
    (event.target && event.target.id === 'secondNumber')||
    (event.target && event.target.id === 'thirdNumber')){
    validate(event)
  }
})

document.addEventListener('click', event => {
  if (event.target && event.target.id === 'addButton') { updateWithVol(event) }
})
