import _ from 'lodash';
import utils from './utils';


const user = {
  create(initial) {
    const defaults = {
      id: utils.guid(),
      name: '...',
    };
    return _.assign({}, defaults, initial);
  }
};


const comment = {
  create(initial) {
    const defaults = {
      id: utils.guid(),
      created: new Date(),
      author: user.create(),
      text: '...',
      comments: [],

      isRemoving: false,
      isCreating: true,
    };

    return _.assign({}, defaults, initial);
  }
};


export default {
  comment,
  user,
}