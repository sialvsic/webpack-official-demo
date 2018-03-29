import join from 'lodash/join';
import { cube } from './math.js';

import './style.css';
import Icon from './icon.jpg';
import printMe from './print';

function component1() {
  const element = document.createElement('div');
  element.classList.add('hello');

  const btn = document.createElement('button');
  btn.innerHTML = join(['Hello', 'webpack'], 'lodash');
  btn.onclick = printMe;

  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n');

  element.appendChild(btn);

  return element;
}

function component2() {
  const element = document.createElement('div');

  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component1());
document.body.appendChild(component2());
