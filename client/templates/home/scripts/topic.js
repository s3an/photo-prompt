//Start this file when topic.html is rendered
Template.topic.rendered = function() {
    if(!this._rendered) {
      this._rendered = true;

//Init a word array
      var wordArray = [
      'Words', //0
      'Test',  //1
      'Coffee', //2
      'Code',  //3
      'Friends', //4
      'Nature', //5
      'Clouds', //6
      'Animals', //7
      'Water', //8 
      'Buildings', //9
      'Cities', //10
      'Green', //11
      'Red', //12
      'Blue' //13
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
