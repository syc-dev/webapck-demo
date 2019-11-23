//require : CommonJS 스펙으로 모듈을 가져오는 방법
//var _ = require('lodash'); //lodash 모듈을 _를 통해 사용하겠다.
import _ from 'lodash';

//named import : {}안에 동일한 이름을 명시해야함
import {area, circumference} from './js/circle';

//default import : {}가 없고, 이름을 바꿀 수 있음.
import cube1 from './js/cube';

import './style.css';
import './hello.scss';

function component() {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack!!'], ' ');//_ : index.html에서 롤환경으로 실행됨(lodash에서 로딩됨) => 블로그 참조

  return element;
}

console.log(area(5), circumference(3));
console.log(cube1.volume(2));

document.body.appendChild(component());