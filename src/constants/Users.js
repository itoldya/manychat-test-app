import model from './../model';

export default {
  igor: model.user.create({
    id: 'igor',
    name: 'Igor Isaev',
    pic: 'https://www.gravatar.com/avatar/fffeca5226e327d0b1ca4c081ac4aa1f?s=328&d=identicon&r=PG',
  }),

  ivan: model.user.create({
    id: 'ivan',
    name: 'Ivan Petrov',
    pic: 'https://www.gravatar.com/avatar/8321bb2448594413dfd7e52f29ae9a46?s=328&d=identicon&r=PG&f=1'
  }),

  sophie: model.user.create({
    id: 'sophie',
    name: 'Sophie Turner',
    pic: 'https://www.gravatar.com/avatar/debf73126dd10a2c49362b124bc6807d?s=328&d=identicon&r=PG&f=1'
  }),
}