//Publishing the images information so that I can subscribe to that information on the client side
Meteor.publish('images', function(limit, username, cTopic) {
  check(limit, Number);

  //A find query that checks the usernam information is correct. 
  var findQuery = {};
  if (username) {
    check(username, String);
    findQuery = { username : username };
  }
  var findQuery2 = {};
  if(cTopic){
    check(cTopic, String)
    findQuery = {cTopic: cTopic};
  }

  //Once the find query returns true you can limit the returns
  //And sort them by the latest ones (-1)
  return Images.find(findQuery,findQuery2, {
    limit: limit,
    cTopic: cTopic,
    sort: { uploadedAt: -1 }
  });
});