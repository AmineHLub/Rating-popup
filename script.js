const elementListContainer = document.querySelector('.rating-list');
const elementList = document.querySelectorAll('.rating-list > li');
const popupContent = document.querySelector('.popup-content');
const submitBtn = document.querySelector('.submit-btn');
const img = document.querySelector('.useless-star > img');
const headingElement = document.querySelector('.rating-content-information > h2');
const paragraphElement = document.querySelector('.rating-content-information > p');

let selectedElement = null;

const deleteActiveStyle = () => {
  elementList.forEach((element) => {
    element.classList.remove('selected')
  })
}

const listClicking = (element) => {
  deleteActiveStyle();
  element.classList.add('selected');
  selectedElement = element;
}

const thankYou = () => {
  if (selectedElement) {
    // adjusted style img and deleted elements
    popupContent.style.alignItems = "center"
    popupContent.style.textAlign = "center"
    img.src = "./images/illustration-thank-you-svg.png"
    img.parentElement.classList.add('thankyou-img')
    elementListContainer.remove()
    submitBtn.remove()
  
    // Change prev text (no need for new elmnts)
    headingElement.innerText = "Thank you!"
    paragraphElement.innerText = "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!"
    
    // creating Rating
    const newRatingspan = document.createElement('p')
    newRatingspan.classList.add('newrating-span')
    newRatingspan.innerText = `You selected ${selectedElement.innerText} out of 5`
    headingElement.parentElement.insertBefore(newRatingspan, headingElement)
  }
  else {
    alert("Select a rating value first!")
  }
}

submitBtn.addEventListener('click',() => thankYou())
elementList.forEach((element) => {
  element.addEventListener('click', () => listClicking(element))
})
