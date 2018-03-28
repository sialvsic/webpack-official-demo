import _ from 'lodash';
import './style.css';
import Icon from './icon.jpg';

import printMe from './print';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button')

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');


  // Add the image to our existing div.
  var myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
