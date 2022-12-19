var currentColor = color(0,0,0) ;//To make the currentColor black
var currentScene = 1 ;//Used so I count the scenes and give them numbers 
var drawBitmoji = function(x, y, bitmojiheight){//Used to draw my bitnoji
    noStroke();
    noStroke();
    fill(241, 194, 125); //skin color
    ellipse(x, y, (bitmojiheight/150)*90, (bitmojiheight/150)*110); //head
    fill(252, 252, 252);
    arc(x+(bitmojiheight/150*42), y+(bitmojiheight/150*33), (bitmojiheight/150)*30, (bitmojiheight/150*50), (bitmojiheight/150*0), (bitmojiheight/150*360)); //right chissel
    fill(252, 252, 252);
    arc(x-(bitmojiheight/150*42), y+(bitmojiheight/150*33), (bitmojiheight/150*30), (bitmojiheight/150*50), (bitmojiheight/150*0), (bitmojiheight/150*360)); //left chisel
    fill(28, 27, 27);
    ellipse(x-(bitmojiheight/150*2),y-(bitmojiheight/150*50), (bitmojiheight/150*70), (bitmojiheight/150*50)); //Hair
    fill(20, 20, 20); //hair sides
    quad(x-(bitmojiheight/150*50),y,x-(bitmojiheight/150*35),y-(bitmojiheight/150*35),x-(bitmojiheight/150*10),y-(bitmojiheight/150*50),x-(bitmojiheight/150*30),y-(bitmojiheight/150*1));
    quad(x+(bitmojiheight/150*49),y-(bitmojiheight/150*2),x+(bitmojiheight/150*34),y-(bitmojiheight/150*50),x+(bitmojiheight/150*13),y-(bitmojiheight/150*60),x+(bitmojiheight/150*35),y);
    fill(255, 255, 255); //On top of hair
    rect(x-(bitmojiheight/150*50),y-(bitmojiheight/150*90), (bitmojiheight/150*100), (bitmojiheight/150*35), (bitmojiheight/150*1));
    
    stroke(13, 13, 13);// EYES
    fill(241, 194, 125);
    ellipse(x-(bitmojiheight/150*15),y-(bitmojiheight/150*10), (bitmojiheight/150*20),(bitmojiheight/150*8)); //left eye
    ellipse(x+(bitmojiheight/150*20),y-(bitmojiheight/150*10),(bitmojiheight/150*20), (bitmojiheight/150*8)); //Rigt eye
    fill(99,57,15);// left eyeball
    ellipse(x-(bitmojiheight/150*18), y-(bitmojiheight/150*10), (bitmojiheight/150*6), (bitmojiheight/150*4));
    fill(99,57,15);// eyes color
    ellipse(x+(bitmojiheight/150*17), y-(bitmojiheight/150*10), (bitmojiheight/150*6), (bitmojiheight/150*4));// left eye
    ellipse(x-(bitmojiheight/150*18), y-(bitmojiheight/150*10), (bitmojiheight/150*6), (bitmojiheight/150*3));//right eye
    fill(241, 194, 125);// nose color
    bezier(x, y, x-(bitmojiheight/150*30), y+(bitmojiheight/150*20), x+(bitmojiheight/150*2), y+(bitmojiheight/150*27),x, y+(bitmojiheight/150*15));//Nose
    fill(255, 255, 255);// white for mouth
    arc(x, y+(bitmojiheight/150*28), (bitmojiheight/150*30), (bitmojiheight/150*13), (bitmojiheight/150*1), (bitmojiheight/150*180));// mouth
    line(x-(bitmojiheight/150*16), y+(bitmojiheight/150*28), x+(bitmojiheight/150*15), y+(bitmojiheight/150*28));// line for top of mouth
    fill(125, 118, 107);
    rect(x-(bitmojiheight/150*50), y+(bitmojiheight/150*45), (bitmojiheight/150*100), (bitmojiheight/150*50), (bitmojiheight/150*1));//for my shirt
    fill(69, 48, 69);
    textSize(bitmojiheight/150*30);
    text("RA", x-(bitmojiheight/150*22), y+(bitmojiheight/150*60), (bitmojiheight/150*50), (bitmojiheight/150*50));
    textSize((bitmojiheight/150*20));

};//My bitmoji draw function
var drawCar = function(x){
    stroke(0, 0, 0);
    // draw the car body
    fill(255, 255, 255);
    rect(x, 200, 150, 50);
    rect(x + 27, 179, 95, 61);
    // draw the wheels
    fill(255, 255, 255);
    ellipse(x + 25, 248, 35, 35);
    ellipse(x + 126, 249, 35, 35);

};//To draw a car thats colorable
//Paste in Khan Button class, including mouseClicked function.
 var Button = function(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 150;
    this.height = config.height || 50;
    this.label = config.label || "Click";
    this.onClick = config.onClick || function() {};
    this.color = config.color || color(115, 109, 109);
};

Button.prototype.draw = function() {
    fill(this.color);
    rect(this.x, this.y, this.width, this.height, 5);
    fill(0, 0, 0);
    textSize(19);
    textAlign(LEFT, TOP);
    text(this.label, this.x+10, this.y+this.height/4);
};

Button.prototype.changeColor = function(color) {
    this.color = color; // To change different colors 
    this.draw(); // Repeats the function
};

Button.prototype.isMouseInside = function() {
    return mouseX > this.x &&
           mouseX < (this.x + this.width) &&
           mouseY > this.y &&
           mouseY < (this.y + this.height);
};

Button.prototype.handleMouseClick = function() {
    if (this.isMouseInside()){
        this.onClick();
    }
};


//SplashScene bottons that are around the Bitmoji
var Capitals = new Button({//A start botton displayed in the splashScene that takes to the Capital letters scene if clicked
    x: 0,//The x position for the botton
    y: 127,//The y position for the botton
    label: "Capital letters",//The text displayed on the botton 
    color: color(42, 54, 189),//The background color of the botton
    onClick: function() {//An onClick function so when the botton clicked it take us to scene we numbered below. In that botton it's scene 2
        currentScene = 2; 
    }
});

var Lowers = new Button({//A start botton displayed in the splashScene that takes to the Lower case letters scene if clicked
    x: 249,//The x position for the botton
    y: 127,//The y position for the botton
    label: "Lowercase",//The text displayed on the botton
    color: color(189, 42, 42),//The background color of the botton
    onClick: function() {//An onClick function so when the botton clicked it take us to scene we numbered below. In that botton it's scene 3
        currentScene = 3; 
    }
});

var Coloring = new Button({//A start botton displayed in the splashScene that takes to the Car colorinh scene if clicked
    x: 249,//The x position for the botton
    y: 344,//The y position for the botton
    label: "Coloring",
    color: color(101, 189, 42),
    onClick: function() {//An onClick function so when the botton clicked it take us to scene we numbered below. In that botton it's scene 4
        currentScene = 4; 
    }
});

var Numbers = new Button({//A start botton displayed in the splashScene that takes to the Numbers scene if clicked
    x: 0,//The x position for the botton
    y: 344,//The y position for the botton
    label: "Numbers",
    color: color(237, 240, 62),
    onClick: function() {//An onClick function so when the botton clicked it take us to scene we numbered below. In that botton it's scene 5
        currentScene = 5; 
    }
});


//Create Bottons for colors and give each a color to be traced
var orange = new Button({//to draw button for orange color
    x: 288,//The x position for the botton
    width: 109,//The width of the botton
    y: 359,//The y position for the botton
    color: color(191, 151, 42),//The background color of the botton
    label: "Orange!",//The text displayed on the botton
    onClick: function() {
        currentColor = color(201, 138, 36);//The color of the tracing after clicking that botton
    }
});

var yellow = new Button({//to draw button for yelllow color
    x: 150,//The x position for the botton
    width: 109,//The width of the botton
    y: 359,//The y position for the botton
    color: color(255, 230, 0),//The background color of the botton
    label: "Yellow!",//The text displayed on the botton
    onClick: function() {
        currentColor = color(242, 255, 0);//The color of the tracing after clicking that botton
    }
});

var Green = new Button({//To draw button for green color
    x: 0,//The x position for the botton
    width: 109,//The width of the botton
    y: 359,//The y position for the botton//The y position for the botton
    color: color(55, 255, 0),//The background color of the botton
    label: "Green!",//The text displayed on the botton
    onClick: function() {
        currentColor = color(89, 255, 0);//The color of the tracing after clicking that botton
    }
});

var Red = new Button({//To draw button for red color
    x: 0,//The x position for the botton
    width: 109,//The width of the botton
    y: 0,//The y position for the botton
    color: color(255, 0, 0),//The background color of the botton
    label: "Red!",//The text displayed on the botton
    onClick: function() {
        currentColor = color(255, 0, 0);//The color of the tracing after clicking that botton
    }
});

var Blue = new Button({//To draw button for Blue color
    x: 150,//The x position for the botton
    width: 109,//The width of the botton
    y: 0,//The y position for the botton
    color: color(38, 0, 255),//The background color of the botton
    label: "Blue!",//The text displayed on the botton
    onClick: function() {
        currentColor = color(38, 0, 255);//The color of the tracing after clicking that botton
    }
});

var Pink = new Button({//To draw button for Pink color
    x: 288,//The x position for the botton
    width: 109,//The width of the botton
    y: 0,//The y position for the botton
    color: color(251, 0, 255),//The background color of the botton
    label: "Pink!",//The text displayed on the botton
    onClick: function() {
        currentColor = color(251, 0, 255);//The color of the tracing after clicking that botton
    }
});

//define function splashScreen
var splashScreen = function() {
    background(250, 245, 245);//The color of the background of the scene
    fill(0, 0, 0);//The color of the text in the splash scene
    textSize(16);//The size of the text on the splash scene
    text("Hello kids welcome to my program.", 71, 0,314,83);//A text command to display        text
    fill(0, 0, 0);//The color of the second text in the splash scene
    text("I made this so you can learn the alphabets in English and have fun coloring a car I drawn.", 3, 22,390,115);//A text command to display text
    text("You can also trace numbers and use your artist skills to color a car.", 3, 63,390,115);//A text command to display text
    drawBitmoji(205, 248, 150, 155);//A drawBitmoji command to draw my Bitmoji in a specific     location and size on the splash scene
    image(getImage("avatars/mr-pants-with-hat"), 30, 209, 86, 100);//An image to put mr.pants in the splash scene
    image(getImage("creatures/Hopper-Cool"), 273, 216, 103, 88);//An image to put Hopper in the splash scene
    Capitals.draw();//To  draw the capital letters botton on the splash scene
    Lowers.draw();//To  draw the Lower Case botton on the splash scene
    Coloring.draw();//To  draw the Coloring botton on the splash scene
    Numbers.draw();//To  draw the Numbers botton on the splash scene
};

//define a function for the Capital letters tracing scene
var traceCapitalsScene = function(inital) {
    background(0, 0, 0);//The color of the background of the scene
    fill(255, 255, 255);//The color of the text in the traceCapitalsScene
    textSize(59);//The size of the text on the traceCapitalsScene
    text(inital, 12, 50,404,330);//A text command to display text
    
    orange.draw();
    yellow.draw();
    Green.draw();
    Red.draw();
    Blue.draw();
    Pink.draw();
    fill(255, 255, 255);
    frameRate(80);
};

//define a function for the tracing scene
var traceLowerCaseScene = function(inital) {
    background(0, 0, 0);//The color of the background of the scene
    fill(255, 255, 255);//The color of the text in the traceLowerCaseScene
    textSize(57);//The size of the text on the traceLowerCaseScene
    text(inital, 71, 54,297,381);//A text command to display text
    //Draw all the bottons that give colors to trace
    orange.draw();
    yellow.draw();
    Green.draw();
    Red.draw();
    Blue.draw();
    Pink.draw();
    fill(255, 255, 255);
    frameRate(80);
};

//define a function for the tracing scene
var traceNumbersScene = function(inital) {
    background(0, 0, 0);//The color of the background of the scene
    fill(255, 255, 255);
    textSize(59);
    text(inital, 35, 50,385,326);//A text command to display text in that situation used to display numbers 1-20
    //Draw all the bottons that give colors to trace
    orange.draw();
    yellow.draw();
    Green.draw();
    Red.draw();
    Blue.draw();
    Pink.draw();
    fill(255, 255, 255);
    frameRate(124);
};

var colorScene = function() {
    background(227, 227, 227);//The color of the background of the scene
    fill(0, 0, 0);
    text("lets color the car!!",  5, 64,314,83);//A text command to display text
    text("Pick your favorite colors and start  tracing.",  5, 87,299,62);//A text command to display text
    image(getImage("avatars/avatar-team"), 226, 117, 129, 88);//An image to put the avatar team in the coloring scene
    drawCar(35, 372, 150, 155);////A drawCar command to draw thecar in a specific location and size on the splash scene
    //Draw all the bottons that give colors to trace
    orange.draw();
    yellow.draw();
    Green.draw();
    Red.draw();
    Blue.draw();
    Pink.draw();
    
};

/*define the built-in mouseDragged function that draws a small ellipse of the current color at the mouse’s position as the user drags the mouse
*/
mouseDragged = function() {
    if(currentScene > 1){
        noStroke();
        fill(currentColor);
        ellipse(mouseX, mouseY, 3, 3);
    }
};

draw = function() {//A draw Function to draw scenes at certain scene numbers
    background(255, 255, 255);
    if (currentScene === 1){
        splashScreen();   
    } else if(currentScene === 2){
        traceCapitalsScene("A B C D E F G H I J K L M N O P Q R S T U V W X Y Z");
        noLoop();
    } else if(currentScene === 3){
        traceLowerCaseScene("a b c d e f g h i j k l m n o p q r s t u v w x y z");   
        noLoop();
    }  else if(currentScene === 4){
        colorScene();   
        noLoop();
    } else if(currentScene === 5){
        traceNumbersScene("1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20");   
        noLoop();
    } 

};
//A mouse click function to make bottons handle a mouseClick so when clicked it does the command it was assigned
mouseClicked = function(){
    if(currentScene === 1){//For all the bottons on slpashScene
        Capitals.handleMouseClick();
        Lowers.handleMouseClick();
        Coloring.handleMouseClick();
        Numbers.handleMouseClick();
    } else if (currentScene > 1){//For all the color bottons of colors
        orange.handleMouseClick();
        yellow.handleMouseClick();
        Green.handleMouseClick();
        Red.handleMouseClick();
        Blue.handleMouseClick();
        Pink.handleMouseClick();
    }
};


