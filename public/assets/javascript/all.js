$(document).ready(function() {

  var people = {
    people: [],
    init: function() {
      this.cacheDOM();
      this.render();
      this.bindEvents();
    },
    cacheDOM: function() {
      this.$pModule = $('#peopleModule');
      this.$ul = this.$pModule.find('#people');
      this.$template = this.$ul.find('#peopleTemplate').html();
      temp = Handlebars.compile( this.$template );
      this.$button = this.$pModule.find('.myButton');
    },
    render: function() {
      this.$ul.append( temp(people) );
      console.log(this.$button);
    },
    bindEvents: function() {
      this.$button.on('click', this.addPerson.bind(this));
      this.$ul.delegate('span.del', 'click', this.deletePerson.bind(this));
    },
    addPerson: function() {
      this.people.push( this.$button.prev().val() );
      this.$ul.children().remove(); // how to make work without this line?
      this.render();
      this.$button.prev().val('');
    },
    deletePerson: function(event) {
      var $remove = $(event.target).closest('li');
      this.people.splice($remove.index(), 1);
      $remove.remove();      
      console.log(this.people);
    }

  };

  people.init();
});