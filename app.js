
btnAnimation = document.querySelector('.btn-animation');
mainAnimation = document.querySelector('.main-animation');

btnAnimation.addEventListener('click',function(){

    mainAnimation.style.transform = 'translateY(-100%)';
});

let factContainer = document.querySelector('.fact-container');
let factParagraph = document.querySelector('.fact-paragraph');

let inputFact = document.querySelector('.enter-fact-input')
inputFact.addEventListener('input', getFact);


function getFact() {
    let number = inputFact.value;
    fetch('http://numbersapi.com/' + number + '/year')
    .then(response => response.text())
    .then(data =>{
        factContainer.style.display = 'block';
        factParagraph.innerText = data;

        if(number == 0) {
            factContainer.style.display = 'none';
        }
    })

    .catch( err => console.log('You\'ve got an error'));
}

