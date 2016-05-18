//Start this file when topic.html is rendered
Template.topic.rendered = function() {
    if(!this._rendered) {
      this._rendered = true;

//Init a word array
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
      
      //Instansiating a date object
      var date = new Date();
      //Creating a variable based on the current hour of the Date Object.
      var current = date.getHours();
      // var current = 21; <- This was just to test the functionality of changing the word

      // Just an if statement to determine the time
      if(current === 9 || current === 10 || current === 11){
      	$('.current-topic').text(wordArray[2]);
      	$('.timer').text("12 PM");
      } else if(current === 12 || current === 13 || current === 14){
      	$('.current-topic').text(wordArray[5]);
      	$('.timer').text("3 PM");
      } else if(current === 15 || current === 16 || current === 17){
      	$('.current-topic').text(wordArray[6]);
      	$('.timer').text("6 PM");
      } else if(current === 18 || current === 19 || current === 20){
      	$('.current-topic').text(wordArray[7]);
      	$('.timer').text("9 PM");
      } else{
      	$('.current-topic').text(wordArray[9]);
      	$('.timer').text("9 AM");
      }
      
    } 
};
