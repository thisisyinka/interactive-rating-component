const ratingDiv = document.querySelectorAll('.each-rating');
const allRatings = document.querySelectorAll('.rating');
const submitBtn = document.querySelector('.submitBtn');
const ratingText = document.querySelector('.rating-text');
const containerDiv = document.querySelector('.container');
const thankyouDiv = document.querySelector('.thankyou-wrapper');

const ratingOne = document.querySelector('.rating-one');
const ratingTwo = document.querySelector('.rating-two');
const ratingThree = document.querySelector('.rating-three');
const ratingFour = document.querySelector('.rating-four');
const ratingFive = document.querySelector('.rating-five');

const endingText = 'out of 5';

// TODO: when user clicks on a rating it should show the selected stated
ratingDiv.forEach((div) => {
  div.addEventListener('click', function () {
    if (div.childNodes[1].className) {
      div.classList.toggle('selected');
    }
    console.log('the div', div);
    console.log('child nodes', div.childNodes);
    console.log('child nodes 2nd arr', div.childNodes[1]);

    submitBtn.addEventListener('click', function () {
      if (div.childNodes[1].firstChild.textContent) {
        submitLogic(div.childNodes[1].firstChild.textContent);
      }
    });
  });
});

const submitLogic = (rating) => {
  ratingText.textContent = `You selected ${rating} ${endingText}`;
  containerDiv.classList.remove('container');
  containerDiv.classList.add('container-hide');
  thankyouDiv.classList.add('thankyou-wrapper-show');
};
