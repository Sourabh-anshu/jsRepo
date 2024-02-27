## Background Color Changer Solution only Js part


```javascript
const body = document.body;
const buttons = document.querySelectorAll('.button');

// using if-else 
buttons.forEach((button) => {
  button.addEventListener('mouseover', (e) => {
    if (e.target.id == 'white') body.style.backgroundColor = '#212121';
    else if (e.target.id == 'yellow') body.style.backgroundColor = 'yellow';
    else if (e.target.id == 'blue') body.style.backgroundColor = 'blue';
    else body.style.backgroundColor = 'grey';
  });
});

// using switch statements 
buttons.forEach(function (button) {
  button.addEventListener('click', (e) => {
    switch (e.target.id) {
      case 'grey':
        body.style.backgroundColor = 'grey';
        break;
      case 'white':
        body.style.backgroundColor = '#212121';
        break;
      case 'yellow':
        body.style.backgroundColor = 'yellow';
        break;
      case 'blue':
        body.style.backgroundColor = 'blue';
        break;
    }
  });
});
```