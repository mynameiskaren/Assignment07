/*eslint-env browser*/

//////////////////	Step 1	//////////////////
//function Cat(){}
//var Dog = function(){}


//////////////////	Step 2	//////////////////
//var cat1 = new Cat();
//var dog1 = new Dog();


//////////////////	Step 3	//////////////////
//function Animal(){
//    "use strict";
//    this.created = function(){
//        return window.console.log("The Animal has been created!");
//    }
//}
//var bird = new Animal();
//bird.created();


//////////////////	Step 4	//////////////////
//function Animal(aType){
//    "use strict";
//    this.aType = aType;
//    this.created = function(){
//        return window.console.log("The Animal \"" + this.aType + "\" has been created!");
//    }
//    this.created();
//}
//var bird = new Animal("Dove");


//////////////////	Step 5	//////////////////
//function Animal(type, breed, color, height, length){
//    "use strict";
//    this.type = type;
//    this.breed = breed;
//    this.color = color;
//    this.height = height;
//    this.length = length;
//    window.console.log("This Animal has the following specifications\n\nType: " + this.type + "\nBreed: " + this.breed + "\nColor: " + this.color + "\nHeight: " + this.height + "\nLength: " + this.length);
//}
//var dove = new Animal("bird", "Dove", "white", "31 cm", "18 cm");


//////////////////	Step 6	//////////////////
//function Animal(type, breed, color, height, length){
//    "use strict";
//    this.type = type;
//    this.breed = breed;
//    this.color = color;
//    this.height = height;
//    this.length = length;
//}
//var animal1 = new Animal();
//for(var property in animal1){
//    window.console.log(property);
//}


//////////////////	Step 7	//////////////////
//function Animal(aType, color){
//    "use strict";
//    this.aType = aType;
//    this.color = color;
//    
//    this.speak = function (){
//        if (this.aType === "Dog")
//            return "The " + this.color + " dog is barking!"
//        else if(this.aType === "Cat")
//            return "The " + this.color + " cat is meowing!";
//    }
//}
//var cat = new Animal("Cat", "orange");
//window.alert(cat.speak());


//////////////////	Step 8	//////////////////
//function Animal(aType){
//    "use strict";
//    var aType = aType;
//    var checkType = function (){
//        if (aType === "dog")
//            return("Dog");
//        else if (aType === "cat")
//            return "Cat";
//    }
//    this.speak = function (){
//        var type = checkType();
//        window.console.log("The " + type + " has made a noise!"); 
//    }
//}
//var dog = new Animal("dog");
//dog.speak();


//////////////////	Step 9	//////////////////
//String.prototype.findWords = function(string, keyWord) {
//    "use strict";
//    var words = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').split(/\s/);
//    var freqMap = {};
//    words.forEach(function(w) {
//        if (!freqMap[w]) {
//            freqMap[w] = 0;
//        }
//        freqMap[w] += 1;
//    });
//    return freqMap;
//}
//
//var keyWord1 = "a";
//var par = "When I came upon that old abandoned house, betwixt the abysmal black sky and the stone cold graveyard at my feet, a cracked, moss-covered sign read: Experimental Institute for Dementia-Praecox. Standing before a broken-hinged gate my soul shrieked within me like the closing cell doors in such a tormented asylum. For a moment I flinched to a faint echo of what sounded like wallows of terror and crippling pain coming from the rotted, old building. Trembling, I fell to my knees and beheld that the ground seemed to crawl with indiscernible life. The dank soil and decaying leaves oozed juices that penetrated the fabric covering my legs, and I was startled to find that the earth felt somewhat warm. The decaying matter around me sent off a fragrance of death, announcing an unspeakable presence that I could never quite have ascertained from within the realm of the living. A chill breeze descended the crumbling sidewalk that led from the sanguine, iron door and abrasively struck the skin on my face, forcing tears to form in my widened eyes. I was desperately seeking a face in one of those milky old windows, wondering where it was that those eyes, which I intuitively sensed measuring my soul, were hiding. To my dismay, I found them and the Hell to which they will forever be condemned.";
//
//var freq = par.findWords(par, keyWord1);
//
//Object.keys(freq).sort().forEach(function(word) {
//    if (word === keyWord1.toLowerCase())
//        window.console.log("Count of " + word + " is " + freq[word]);
//});
