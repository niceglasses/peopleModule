$(document).ready(function() {
  
  var people = [];  

  // init
  var template = Handlebars.compile( $("#peopleTemplate").html() );
  var temp = template(people);
  $('#people').append(temp);  
  
  // add people  
  $('.myButton').on('click', function() {
    var name = $(this).prev().val();
    if (name) {
      var newName = {
        firstName: name.split(" ")[0],
        lastName: name.split(" ")[1]
      };
    
      people.push(newName);
    
      var newPeople = [newName];
   
      $(this).prev().val('');
      $('#people').append(template(newPeople));
      console.log(people);
    }    
  });

  // delete people  
  $('#people').on('click', '.del', function(e) {
    console.log('hey');
    var $remove = $(e.target).closest('li');
    var i = $(this).find('ul').find('li').index($remove);
    $remove.remove();
    people.splice(i, 1);
    console.log(people);
  });
});