//This is the server creating an s3 bucket names Images. USing the Collections-FS and subsequent S3 packages
//
if (Meteor.isServer) {
  var imageStore = new FS.Store.S3("images", {
    /* REQUIRED */
    //This is the AWS s3 information
    accessKeyId: Meteor.settings.private.AWSAccessKeyId, 
    secretAccessKey: Meteor.settings.private.AWSSecretAccessKey, 
    bucket: Meteor.settings.private.AWSBucket
    //You may need to add a region in here. 
  //region: Ireland /* We can keep this information public because 1) it's sometimes irrelvant and 2) it doesn't need to be used*/
  });
  //This is the bucket on S3 named IMAGES and set up in Mongo Syntax
  Images = new FS.Collection("Images", {
    stores: [imageStore],
    filter: {
      allow: {
        contentTypes: ['image/*']
      }
    }
  });
}

//Client side there is no need for S3 information (And theres no reason to show it to them)
//SO I just create a generic Mongo Collection to hold the information on the client side
if (Meteor.isClient) {
  var imageStore = new FS.Store.S3("images");
  Images = new FS.Collection("Images", {
    stores: [imageStore],
    filter: {
      allow: {
        contentTypes: ['image/*']
      },
      onInvalid: function(message) {
        toastr.error(message);
      }
    }
  });
}

//These are just allow rules for Inserting, updating, deleting and returning the images from S3
//the update and remove rules require the current user ID to be the same so there can't be any 
//cross site insertions of Javascript to change the current account information
Images.allow({
  insert: function(userId) { return userId != null; },
  update: function(userId, image) { return userId === image.userId; },
  remove: function(userId, image) { return userId === image.userId; },
  download: function() { return true; }
});