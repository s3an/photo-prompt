
//Helper functions for the image template
Template.image.helpers({

  // postDate: function() {
  //   var date = new Date();
  //   var hours = date.getHours();
  //   return hours;
  // }
  //Moment JS for easier formatting of the date object
  //Could have used the current Date object but it's kind of awkward
  postDate: function() {
    return moment(this.uploadedAt).format('MMMM Do YYYY, h:mm:ss a');
  },
  //This is just to check if the user id of the image matches the user id of the current user
  ownImage: function() {
    return this.userId === Meteor.userId();
  }
});

Template.image.events({
  'click .delete-image': function(e) {
    e.preventDefault();
    //confirmation of deletion
    var sure = confirm('Are you sure? Once deleted..');
    if (sure === true) {
      //Remove it from Images (.remove is just mongo for delete)
      Images.remove({ _id:this._id }, function(error,result) {
        if (error) {
          //Toastr Messages for success and failure
          toastr.error("Delete failed... " + error);
        } else {
          toastr.success('Image no longer exsists!');
        }
      })
    }
  }
});