import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  body: DS.attr(),
  img: DS.attr(),
  category: DS.attr(),
  author: DS.attr()
});