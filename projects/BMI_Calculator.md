# BMI Calculator 

``` javascript
// From Tutorial

const form = document.querySelector('form');
// const wg = document.getElementById('weigth-guide');
const para = document.getElementsByClassName('para');
// const para = wg.querySelectorAll('p');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const h = parseInt(document.getElementById('height').value);
  const w = parseInt(document.getElementById('weight').value);
  const res = document.getElementById('results');

  // console.log(wg);
  if (h == '' || h <= 0 || isNaN(h))
    res.innerHTML = `${h} is not a valid height`;
  else if (w == '' || w <= 0 || isNaN(w))
    res.innerText = `${w} is not a valid weight`;
  else {
    const bmi = ((w * 10000) / (h * h)).toFixed(2);

    // wg.style.display = 'none';
    if (bmi < 18.6)
      res.textContent = `${bmi} is your BMI. ${para[0].innerHTML}`;
    else if (bmi >= 18.6 && bmi <= 24.9)
      res.textContent = `${bmi} is your BMI. ${para[1].innerHTML}`;
    else res.textContent = `${bmi} is your BMI. ${para[2].innerHTML}`;
  }
});

// Self done

// const form = document.querySelector('form');
// // console.log(w);
// // console.log(res);
// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const h = document.querySelector('#height').value;
//   const w = document.getElementById('weight').value;
//   const res = document.getElementById('results');
//   // const resVal = document.createElement('p');
//   const hVal = Number(h) / 100;
//   // console.log(`hVal= ${hVal}`);
//   const wVal = Number(w);
//   // console.log(`wVal= ${wVal}`);
//   const p = Math.round(wVal / (hVal * hVal));
//   // resVal.appendChild(document.createTextNode(`Your BMI is ${p}`));
//   res.innerText = `Your BMI is ${p}`;
//   // console.log(`p= ${p}`);
// });
```