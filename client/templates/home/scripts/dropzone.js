//Javascript for the dropzone events. Adapted from a tutorial.
Template.dropzone.events({
  'dropped #dropzone': function(e) {
    //Meteor.user(); retrieves the current Meteor user information
    var userInfo = Meteor.user();
    var topicInfo = $('.current-topic').text();

    FS.Utility.eachFile(e, function(file) {
      var newUpload = new FS.File(file);
      //This tags the upload with username and userID for later
      newUpload.username = userInfo.username;
      newUpload.userId = userInfo._id;
      newUpload.cTopic = topicInfo;
      //Insertion to the Images collection on s3
      Images.insert(newUpload, function (error, fileObj) {
        if (error) {
          //Toastr messages for success/failure
          toastr.error("Upload failed..");
        } else {
          toastr.success("Success!");
        }
      });
    });
  },
    //Attempt at a HTML file upload using inputs.
    'change #file-upload-input': function(e){
    var userInfo = Meteor.user();
    var topicInfo = $('.current-topic').text();

      FS.Utility.eachFile(e, function(file) {
      var newUpload = new FS.File(file);
      //This tags the upload with username and userID for later
      newUpload.username = userInfo.username;
      newUpload.userId = userInfo._id;
      newUpload.cTopic = topicInfo;
      //Insertion to the Images collection on s3
      Images.insert(newUpload, function (error, fileObj) {
        if (error) {
          //Toastr messages for success/failure
          toastr.error("Upload failed..");
        } else {
          toastr.success("Success!");
        }
      });
    });

  }

});