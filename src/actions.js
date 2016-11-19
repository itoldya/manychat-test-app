import model from './model';
import backend from './services/backend';


async function loadComments(tree) {
  tree.set('isReady', false);
  tree.set('comments', []);

  const data = await backend.comment.read();
  tree.set('comments', data);
  tree.set('isReady', true);
  tree.commit();
}


async function removeComment(tree, {path}) {
  tree.select(...path, 'isRemoving').set(true);

  await backend.comment.remove({path});
  tree.unset(path);
  tree.commit();
}


async function createComment(tree, {path, text}) {
  const author = tree.get('currentUser');

  const initial = {
    author,
    text,
  };
  const comment = model.comment.create(initial);

  // optimistic update
  tree.select(...path, 'comments').push(comment);
  setReplyPosition(tree, null);

  const payload = {
    path,
    data: comment,
  };
  await backend.comment.create(payload);

  tree
    .select(...path, 'comments', (item) => item.id === comment.id)
    .select('isCreating')
    .set(false);

  tree.commit();
}


function setReplyPosition(tree, replyPosition) {
  if (tree.get('replyPosition') === replyPosition) {
    return tree.set('replyPosition', null);
  }
  tree.set('replyPosition', replyPosition);
}


function setMaxDepth(tree, maxDepth) {
  tree.set('maxDepth', maxDepth);
}


function setCurrentUser(tree, currentUser) {
  tree.set('currentUser', currentUser);
}


export default {
  loadComments,
  removeComment,
  createComment,

  setReplyPosition,
  setMaxDepth,
  setCurrentUser,
}