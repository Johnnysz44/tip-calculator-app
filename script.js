const tipBtns = document.querySelectorAll('.tipBtn');
const billValue = document.querySelector('#bill');
const numPerson = document.querySelector('#num-people');
const btCustom = document.querySelector('#bt-custom');

let tipValue = 0.15; //default tip   15%
let bill = 0.0 // default bill
let numPeople = 1; //defalt number of people

function calculateTip(){
    bill = Number(billValue.value)
    numPeople = Number(numPerson.value);
    let tipAmount = (bill*(tipValue))/numPeople
    return Number(tipAmount.toFixed(2));
}

function calculateBill(){
    bill = Number(billValue.value)
    numPeople = Number(numPerson.value);
    let total = (bill / numPeople) 
    return Number(total.toFixed(2))
}

function updateTip() {
    document.querySelector('#tip-amount-person').innerText = `$${calculateTip()}`
}

function billAmountPerson(){
    document.querySelector('#bill-amount-person').innerText = '$'+ (calculateBill() + calculateTip()).toFixed(2);
}

function calculateTotal(){
    updateTip();
    billAmountPerson();
}

function reset(){
    document.querySelector('#bill-amount-person').innerText = '$0.00'
    document.querySelector('#tip-amount-person').innerText = '$0.00'
    document.querySelector('.price-box').value = 0;
    document.querySelector('#num-people').value = 0;
    tipBtns.forEach(btn =>{
        btn.classList.remove('btn-active')
    })
    document.querySelector('#bt-custom').value = '';
}


tipBtns.forEach(btn => {
    btn.addEventListener('click', handleClick)
    btn.addEventListener('click', calculateTotal)
})

btCustom.addEventListener('input', setCustomValue)
numPerson.addEventListener('input', setNumPerson)

function handleClick(event){
    event.preventDefault();

    tipBtns.forEach(btn => {
        //remove active state
        btn.classList.remove('btn-active');

        //set active state
        if(event.target.innerHTML == btn.innerHTML){
            btn.classList.add('btn-active');
            tipValue = parseFloat(btn.innerHTML).toFixed(2)/100; // transforma os 15% em número retirando o %
        }
    })
    btCustom.value = ''
}


function setCustomValue (){
    tipValue = (Number(btCustom.value)/100)
    tipBtns.forEach(btn => {
      btn.classList.remove('btn-active')
    })
}

function setNumPerson(){
    numPeople = Number(numPerson.value) 
    if(numPeople <= 0){
        numPerson.classList.add('warning')
        document.getElementById('zero').classList.add('warning-visible')
    }else{
        document.getElementById('zero').classList.remove('warning-visible')
        numPerson.classList.remove('warning')
    }
}