//Once the home template is created it runs the function
Template.home.created = function() {
  //Get a javascript context of itself. This is important because 
  // Otherwise if you used this(); everytime it would constantly change the object in context
  var self = this;

  self.limitValue = new ReactiveVar;
  self.limitValue.set(parseInt(Meteor.settings.public.recordsPerPage));
  
  //This is a meteor tracker that autoruns to subscribe to the images publication
  Tracker.autorun(function() {
    //This suscribes to the publication 'images'
    //This allows me to check the server information for the limit and the username
    Meteor.subscribe('images', self.limitValue.get(), Router.current().params.username, Router.current().params.cTopic);
  });
}

//Once the template is rendered
Template.home.rendered = function() {
  var self = this;
  // This function is an infinite scroll on the window that increments the limit of records. Once
  // the limit is reached it increments again to return more images
  $(window).scroll(function() {
    if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
      increment(self);
    }
  });
}

//A client side helper to return the sort function
Template.home.helpers({
  'images': function() {
     return Images.find({}, {sort:{uploadedAt:-1}});
  }
});

// A function to increment the limit of returns based on the current template instance
// This means if you were on the home screen and called it it would increment everyones
// IMages but if you were on your username homescreen it would just incremenet as many as you
// have.
var increment = function(templateInstance) {
  var newLimit = templateInstance.limitValue.get() + 
    parseInt(Meteor.settings.public.recordsPerPage);
  templateInstance.limitValue.set(newLimit);
}