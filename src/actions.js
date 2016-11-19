import _ from 'lodash';
import moment from 'moment';
import model from './model';
import backend from './services/backend';


function loadComments(tree) {
  tree.set('isReady', false);
  tree.set('comments', []);

  backend.comment.read().then((data) => {
    tree.set('comments', data);
    tree.set('isReady', true);
    tree.commit();
  })
}


function removeComment(tree, {path}) {
  tree.select(...path, '_isRemoving').set(true);
  console.log(tree.get(path));
  backend.comment.remove({path}).then(() => {
    tree.unset(path);
    tree.commit();
  })
}


function createComment(tree, {path, text}) {
  const author = tree.get('currentUser');
  const _isCreating = true;

  const initial = {
    author,
    text,
    _isCreating,
  };
  const comment = model.comment.create(initial);

  // optimistic update
  tree.select(...path, 'comments').push(comment);
  tree.set('replyPosition', null);
  const item = tree.select(...path, 'comments', (item) => item.id === comment.id);
  const data = item.get();

  backend.comment.create({path, data}).then(() => {
    item.select('_isCreating').set(false);
    tree.commit();
  });
}


function reply(tree, {item}) {
  tree.set('replyPosition', item.id);
}

function setMaxDepth(tree, value) {
  tree.set('maxDepth', value);
}

function setCurrentUser(tree, currentUser) {
  tree.set('currentUser', currentUser);
}

export default {
  loadComments,
  removeComment,
  createComment,

  reply,
  setMaxDepth,
  setCurrentUser,
}