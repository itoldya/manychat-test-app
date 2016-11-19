import model from './../model';

export default {
  igor: model.user.create({
    id: 'igor',
    name: 'igor isaev',
  }),

  ivan: model.user.create({
    id: 'ivan',
    name: 'ivan petrov',
  }),
}