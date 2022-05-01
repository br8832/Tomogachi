    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = new Pet("Zeus", 90, 30, 0);
    var secondpet_info;
    var pics = {
    "Zeus": "https://cdn.glitch.com/73fe3121-3b2a-4e19-8eb4-3c3931ccbee9%2FIMG_0407.JPG?v=1618273966029",
    "Zeus-exercise": "https://cdn.glitch.com/73fe3121-3b2a-4e19-8eb4-3c3931ccbee9%2FIMG_0412.JPG?v=1618274013644",
    "Zeus-speak": "https://cdn.glitch.com/73fe3121-3b2a-4e19-8eb4-3c3931ccbee9%2FIMG_0408.JPG?v=1618273974113",
    "Zeus-play": "https://cdn.glitch.com/73fe3121-3b2a-4e19-8eb4-3c3931ccbee9%2FIMG_0409.JPG?v=1618273974969",
    "Buddy": "https://cdn.glitch.com/73fe3121-3b2a-4e19-8eb4-3c3931ccbee9%2FIMG_0410.JPG?v=1618273980189",
    "Buddy-treat": "https://cdn.glitch.com/73fe3121-3b2a-4e19-8eb4-3c3931ccbee9%2FIMG_0413.JPG?v=1618273982365",
    "Buddy-exercise": "https://cdn.glitch.com/73fe3121-3b2a-4e19-8eb4-3c3931ccbee9%2FIMG_0411.JPG?v=1618273980694",
  };
 
    (function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    // Called function to update the name, happiness, and weight of our pet in our HTML
    updatePetInfoInHtml(pet_info, "test");
    document.getElementsByClassName("name")[0].innerHTML = pet_info.name;
    // When each button is clicked, it will "call" function for that button (functions are below)
    document.getElementsByClassName("treat-button")[0].addEventListener("click",function() {clickedTreatButton(pet_info)});
    document.getElementsByClassName("play-button")[0].addEventListener("click",function() {clickedPlayButton(pet_info)});
    document.getElementsByClassName("exercise-button")[0].addEventListener("click",function() {clickedExerciseButton(pet_info,"exercise")});
    document.getElementsByClassName("speak-button")[0].addEventListener("click",function() {clickedSpeakButton(pet_info,"speak")});
    document.getElementsByClassName("add-button")[0].addEventListener("click",clickedAddButton);
    
    
  }())
  
  function Pet(name, weight, happiness, barks){
      this.name = name;
      this.weight = weight;
      this.happiness = happiness;
      this.barks = barks;
    }

    function clickedSpeakButton(pet, id){ 
      document.getElementById(id).play();
      notify(pet.name+" says: I'm a sentient dog", 2000, "white","blue");
      pet.barks++;
      updatePetInfoInHtml(pet, "speak");
    }

    function clickedAddButton() {
    var template = document.createElement("template");
    template.innerHTML = '<div style="display:none;" class="flexbox-item"><section class="pet-image-container"><img class="pet-image" src="https://cdn.glitch.com/73fe3121-3b2a-4e19-8eb4-3c3931ccbee9%2FIMG_0410.JPG?v=1618273980189"></section><section class="dashboard"><div>Name: <strong><span class="name"></span></strong></div><div>Weight: <strong><span class="weight"></span> pounds</strong></div><div>Happiness: <strong><span class="happiness"></span> tail wags (per min)</strong></div><div>Number of Barks: <strong><span class="barks"></span></strong></div><div class="button-container"><button class="treat-button">Treat</button><button class="play-button">Play</button><button class="exercise-button"><audio id="exercise1" src="https://cdn.glitch.com/73fe3121-3b2a-4e19-8eb4-3c3931ccbee9%2F208654__luckylittleraven__dogskitter.wav?v=1618269763862" display="none"></audio>Exercise</button><button class="speak-button"><audio id="speak1" src="https://cdn.glitch.com/73fe3121-3b2a-4e19-8eb4-3c3931ccbee9%2F242414__noctaro__small-dog-bark-01.wav?v=1618269471728" display="none"></audio>Speak</button></div></section></div>';
      document.querySelector(".flexbox").appendChild(template.content.firstChild);
      secondpet_info = new Pet("Buddy", 20, 20, 0);
      document.getElementsByClassName("treat-button")[1].addEventListener("click",function() {clickedTreatButton(secondpet_info)});
      document.getElementsByClassName("play-button")[1].addEventListener("click",function() {clickedPlayButton(secondpet_info)});
      document.getElementsByClassName("exercise-button")[1].addEventListener("click",function() {clickedExerciseButton(secondpet_info,"exercise1")});
      document.getElementsByClassName("speak-button")[1].addEventListener("click",function () {clickedSpeakButton(secondpet_info,"speak1")});
      document.querySelectorAll(".flexbox-item")[1].removeAttribute("style")
      document.getElementsByClassName("add-button")[0].style.display = "none";
      updatePetInfoInHtml(secondpet_info);
      document.getElementsByClassName("name")[1].innerHTML = secondpet_info.name;
    }
    function clickedTreatButton(pet) {
      // Increase pet happiness
      // Increase pet weight
      document.getElementById("treat").play();
      notify(pet.name+" says: Thank you!!!", 2000, "blue","orange");
      pet.weight+=5;
      pet.happiness+=5;
      updatePetInfoInHtml(pet, "treat");
      
    }
    
    function clickedPlayButton(pet) {
      document.getElementById("play").play();
      // Increase pet happiness
      // Decrease pet weight
      notify(pet.name+" says: This is fun!!!", 2000, "black","yellow");
      pet.weight-=5;
      pet.happiness+=5;
      updatePetInfoInHtml(pet, "play");
    }
    
    function clickedExerciseButton(pet, id) {
      // Decrease pet happiness
      // Decrease pet weight
      document.getElementById(id).play();
      notify(pet.name+" says: Working Out!!!", 2000, "lightgreen","purple");
      pet.weight-=5;
      pet.happiness-=5;
      updatePetInfoInHtml(pet, "exercise");
    }

    
    // Updates your HTML with the current values in your pet_info dictionary
    function updatePetInfoInHtml(pet, button) {
      var index = (pet.name=="Zeus") ? 0 : 1;
      pet.weight = (pet.weight < 0) ? 0 : pet.weight;
      var things = document.querySelectorAll(".dashboard strong");
      document.getElementsByClassName("pet-image")[index].src = (pics[pet.name+"-"+button]) ? pics[pet.name+"-"+button] :pics[pet.name] ;  
      things[1 + 4*index].innerHTML = (pet.weight == 0) ? '<span class="weight">'+pet.weight+'</span> pounds FEED HIM PLEASE 😭😭😭' :
      '<span class="weight">'+pet.weight+'</span> pounds';
      things[2 + 4*index].innerHTML = (pet.happiness <= 0) ? '<span class="happiness"></span>'+pet.happiness+' tail wags LOVE HIM 😠😠😠' :
      '<span class="happiness"></span>'+pet.happiness+' tail wags'; 
      document.getElementsByClassName("barks")[index].innerHTML = pet.barks;
       

    }


    //Source: https://www.codespeedy.com/popup-notification-using-javascript-and-css/
    //function to notify the user of actions performed. It creates html content, as though it was there from the beginning
    function notify(text,time,color,background)
      {
        //the notification html
        var popup_content = "<div id='popup-container' class='popup'><div style='color:"+color+";background-color:"+background+";'class='popup-content'><span class='popup-close'>X</span>"+text+"</div></div>";
        document.getElementsByClassName("popup-area")[0].innerHTML = popup_content;
        var popup = document.getElementById("popup-container");
        var span = document.getElementsByClassName("popup-close")[0];
        popup.style.display = "inline-block";
        
        // user manually wants to close the notification on the X
        span.onclick = function() {
            popup.style.display = "none";
        }
        
        // like most users, we just want to click anywhere and close the notification
        window.onclick = function(event) {
            if (event.target == popup) {
                popup.style.display = "none";
            }
        }
        // allow the notification to play out  for this specified amount of time
        if (time != 0) {
           setTimeout(function(){
               popup.style.display = "none";
           }, time);
       }
}
