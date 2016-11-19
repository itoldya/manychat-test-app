import Baobab from 'baobab';
import Users from './constants/Users';
import utils from './utils';

const tree = new Baobab({
  comments: [],

  isReady: false,
  currentUser: utils.getRandom(Users),
  replyPosition: null,
  maxDepth: 3,
});

export default tree;