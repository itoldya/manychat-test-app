import Baobab from 'baobab';

const user1 = {
  id: 'one',
  name: 'someone',
};

const user2 = {
  id: 'itoldya',
  name: 'Igor Isaev',
};

const tree = new Baobab({
  comments: [{
    id: '1',
    author: user1,
    text: 'first comment',
    _isRemoving: false,
    _isCreating: false,
    comments: [{
      id: '1.1',
      author: user1,
      text: 'first child',
      comments: [],
      _isRemoving: false,
      _isCreating: false,
    }, {
      id: '1.2',
      author: user2,
      text: 'second child',
      _isRemoving: false,
      _isCreating: false,
      comments: [{
        id: '1.2.1',
        author: user1,
        text: 'fooo',
        _isRemoving: false,
        _isCreating: false,
      }],
    }],
  }, {
    id: '2',
    author: user1,
    text: 'second comment',
    _isRemoving: false,
    _isCreating: false,
    comments: [],
  }],

  currentUser: user2,
  replyPosition: null,
});

export default tree;