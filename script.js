const ratingDiv = document.querySelectorAll('.each-rating');
const allRatings = document.querySelectorAll('.rating');
const submitBtn = document.querySelector('.submitBtn');
const ratingText = document.querySelector('.rating-text');
const containerDiv = document.querySelector('.container');
const thankyouDiv = document.querySelector('.thankyou-wrapper');

const endingText = 'out of 5';

//TODO: when user clicks on a rating it should show the selected stated
ratingDiv.forEach((div) => {
  div.addEventListener('click', function () {
    div.style.backgroundColor = 'hsl(217, 12%, 63%)';
    div.style.color = 'hsl(0, 0%, 100%)';
  });
});

//when the submit button is clicked, it should show the thank you screen
submitBtn.addEventListener('click', function () {
  allRatings.forEach((rating) => {
    console.log(rating);
    if (rating.textContent) {
      submitLogic(rating);
    }
    // } else if (rating.textContent === '2') {
    //   submitLogic(rating);
    // } else if (rating.textContent === '3') {
    //   submitLogic(rating);
    // } else if (rating.textContent === '4') {
    //   submitLogic(rating);
    // } else if (rating.textContent === '5') {
    //   submitLogic(rating);
    // }
  });
});

const submitLogic = (rating) => {
  //   console.log(`You rated this only ${rating.textContent}!`);
  ratingText.textContent = `You selected ${rating.textContent} ${endingText}`;
  containerDiv.classList.remove('container');
  containerDiv.classList.add('container-hide');
  thankyouDiv.classList.add('thankyou-wrapper-show');
};
