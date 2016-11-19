import _ from 'lodash';

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}


function getRandom(obj) {
  const keys = _.keys(obj);
  const index = _.random(keys.length - 1);
  return obj[keys[index]];
}


function isBlank(str) {
  return (!str || /^\s*$/.test(str));
}

export default {
  guid,
  getRandom,
  isBlank,
}