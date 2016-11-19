import Baobab from 'baobab';
import Users from './constants/Users';

const tree = new Baobab({
  comments: [],

  isReady: false,
  currentUser: Users.igor,
  replyPosition: null,
  maxDepth: 3,
});

export default tree;