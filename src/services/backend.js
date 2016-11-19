import Promise from 'bluebird';


const comment = {
  read() {
    return Promise.delay(500).then(() => []);
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