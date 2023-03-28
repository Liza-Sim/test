showIngredients();
showBurgers();

function showIngredients() {
  const ingredientsList = document.getElementById('ingredients-slider');
  for (let i = 0; i < ingredients.length; i++) {
    const ingredientsCardDiv = createElement('div', { className: 'ingredients-cardDiv' }, null, null, ingredientsList);
    const ingredientsCard = createElement('div', { className: 'ingredients-card' }, null, null, ingredientsCardDiv);
    createElement('img', { src: ingredients[i].img, className: 'ingredients-card__img' }, null, null, ingredientsCard);
    createElement('p', { className: 'ingredients-card__title' }, null, ingredients[i].name, ingredientsCard);
  }
}
function showBurgers() {
  const burgersList = document.getElementById('burgersList');
  for (let i = 0; i < burgers.length; i++) {
      const burgerCard = createElement('div', { className: 'burgers-card' }, null, null, burgersList );
      createElement('h2', { className: 'burgers-card__title' }, null, burgers[i].name, burgerCard );
      createElement('img', { src: burgers[i].img, className: 'burgers-card__img' }, null, null, burgerCard);
    const details = createElement('div', { className: 'burgers-card__details-hidden', id : i }, null, null, burgerCard);
    createElement('p', { className: 'burgers-card__details-title' }, null, 'Ingredient', details);
    for (let j = 0; j < burgers[i].details.length; j++) {
      createElement('p', null, null, burgers[i].details[j], details);
    }
    createElement('button', { type: 'button', className: 'burgers-card__btn', 'data-btn': i }, { click: detailsBtn }, 'Details', burgerCard);
  }
}

function detailsBtn(event) {
  const index = event.target.getAttribute('data-btn');
  const detail = document.getElementById(index);
  const btn = document.getElementsByClassName('burgers-card__btn');
  const hidden = detail.classList.contains('burgers-card__details-hidden');
  if (hidden) {
    detail.classList.remove('burgers-card__details-hidden');
    detail.classList.add('burgers-card__details');
    btn[index].textContent = 'Reduce';
  } else {
    detail.classList.add('burgers-card__details-hidden');
    btn[index].textContent = 'Details';
  }
}

function createElement(tagName, attributes, handlers, content, parentElement) {
  const element = document.createElement(tagName);
  if (attributes) {
    for (let key in attributes) {
      if (key === 'className') {
        element.setAttribute('class', attributes[key]);  
      } else {
        element.setAttribute(key, attributes[key]);
      }
    }
  }
  if (handlers) {
    for (let key in handlers) {
      element.addEventListener(key, handlers[key]);
    }
  }
  element.textContent = content;
  parentElement.appendChild(element);
  
  return element;
}