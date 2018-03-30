import join from 'lodash/join';
import { cube } from './math.js';

import './style.css';
import Icon from './icon.jpg';

function component1() {
  const element = document.createElement('div');
  element.classList.add('hello');

  const btn = document.createElement('button');
  btn.innerHTML = join(['Hello', 'webpack'], 'lodash');
  btn.onclick = () => {
    console.log('i am click');
  };

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

function getComponent() {
  return import(/* webpackChunkName: "lodash" */ 'lodash/max').then(module => {

    const element = document.createElement('div');
    element.innerHTML = module.default([1, 2, 100, 22]);

    return element;

  }).catch(error => 'An error occurred while loading the component' + error);
}

getComponent().then((component => {
  document.body.appendChild(component);
}));

document.body.appendChild(component1());
document.body.appendChild(component2());

function component3() {
  const element = document.createElement('div');
  const button = document.createElement('button');
  const br = document.createElement('br');

  button.innerHTML = 'Click me and look at the console!';

  element.appendChild(br);
  element.appendChild(button);

  button.onclick = event => import(/* webpackChunkName: "print" */ './print').then(module => {
    const print = module.default;
    print();
  });

  return element;
}

document.body.appendChild(component3());
