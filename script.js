const listOfQuestions = [
      // Edit things to study here, nothing else needs to be d o n e 
      // to customise the experience.
      //After attempts, you can comment away the things *not* needed to revise. 
        "", //Leave this blank item here
        //official items start here
      "sample1",
     "sample2"
        ]
        var questionCount = 0;
        var revise;
      var questionButton = document.getElementById("know")
      function next() {
        questionCount++;
        document.getElementById("question").innerHTML = listOfQuestions[questionCount];
      }
        function knowAnswer() {
         next(); 
   //     document.getElementById("question").innerHTML = listOfQuestions[questionCount];
}
     function dontKnow() {
      document.getElementById("unknown").innerHTML = listOfQuestions[questionCount];
        //After clicking dont know you need to click next question
    const para = document.createElement("p");
para.innerText = listOfQuestions[questionCount];
document.body.appendChild(para);
next();
       }