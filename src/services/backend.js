import Promise from 'bluebird';
import model from './../model';
import Users from './../constants/Users';


const comment = {
  read() {
    return Promise.delay(500).then(() => [
      // model.comment.create({text: 'foo', author: Users.ivan, isCreating: false}),
      // model.comment.create({text: 'abr', author: Users.ivan, isCreating: false}),
    ]);
  },

  create({path, data}) {
    return Promise.delay(500).then(() => data);
  },

  remove({path}) {
    return Promise.delay(500).then(() => true);
  },
};


export default {
  comment,
}