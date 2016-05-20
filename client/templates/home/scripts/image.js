

//Helper functions for the image template
Template.image.helpers({

  // postDate: function() {
  //   var date = new Date();
  //   var hours = date.getHours();
  //   return date + hours;
  // }
  //Moment JS for easier formatting of the date object
  //Could have used the current Date object but it's kind of awkward
  postDate: function() {
    var postMoment = moment(this.uploadedAt).format('MMMM Do YYYY, HH:mm a');
    return postMoment;
  },
  //This is just to check if the user id of the image matches the user id of the current user
  ownImage: function() {
    return this.userId === Meteor.userId();
  },

  topicInformation: function(){

      var wordArray = [
      'words', //0
      'test',  //1
      'coffee', //2
      'code',  //3
      'friends', //4
      'nature', //5
      'clouds', //6
      'animals', //7
      'water', //8 
      'buildings', //9
      'cities', //10
      'green', //11
      'red', //12
      'blue' //13
      ];

    var tDate = new Date();
    var cHour = tDate.getHours();

        if(cHour === 9 || cHour === 10 || cHour === 11){
        $('.topic-text').text(wordArray[2]);
      } else if(cHour === 12 || cHour === 13 || cHour === 14){
        $('.topic-text').text(wordArray[5]);
      } else if(cHour === 15 || cHour === 16 || cHour === 17){
        $('.topic-text').text(wordArray[6]);
      } else if(cHour === 18 || cHour === 19 || cHour === 20){
        $('.topic-text').text(wordArray[7]);
      } else{
        $('.topic-text').text(wordArray[9]);
      }
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
  },

  'click .like-image': function(e){
    e.preventDefault();
    console.log('You like this image');
  }
});