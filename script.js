const listElement = document.querySelectorAll('.rating-list > li');

const deleteActiveStyle = () => {
  listElement.forEach((element) => {
    element.classList.remove('selected')
  })
}

const listClicking = (element) => {
  deleteActiveStyle();
  element.classList.add('selected');

}

listElement.forEach((element) => {
  element.addEventListener('click', () => listClicking(element))
})