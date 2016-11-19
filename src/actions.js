import _ from 'lodash';
import moment from 'moment';
import model from './model';


function removeComment(tree, {path}) {
  tree.unset(path)
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

  tree.select(...path, 'comments').push(comment);
  tree.set('replyPosition', null);


  _.delay(() => {
    const item = tree.select(...path, 'comments', (item) => item.id === comment.id);
    // console.log(item.get())
    item.select('_isCreating').set(false);
    tree.commit();
  }, 2000)
}


function reply(tree, {item}) {
  tree.set('createCommentAfterId', item.id);
}

export default {
  removeComment,
  createComment,
  reply,
}