let brush = "black"

let current_stroke = 1

let angle = 0


function setup() {

    // create a 640x480 pixel canvas and attach it to your HTML
    createCanvas(1500, 1000).parent('p5')

    print("this is the setup")

    background(200)


}

function draw() {


  if(mouseIsPressed) {

    if (brush == "red") {
      stroke(255, 102, 102)
      strokeWeight(current_stroke)
      fill(81, 164, 196)

    }

  if (brush == "blue"){
    stroke(54, 159, 224)
    strokeWeight(current_stroke)
    fill(204, 89, 63)
  }

  if (brush == "green"){
    stroke(60, 240, 135)
    strokeWeight(current_stroke)
    fill(255, 220, 23)

  }

  if(brush == "orange") {
    stroke (245, 149, 71)
    strokeWeight(current_stroke)
    fill(217, 51, 232)

  }

  if(brush == "black") {
    stroke(0,0,0)
    strokeWeight(current_stroke)

  if (brush == "grey") {
      stroke(200,200,200)
      strokeWeight(current_stroke)
      fill(200,200,200)
    }
  }

  if (keyIsPressed) {

    if (key == "Meta") {
      rect(mouseX,mouseY, 20,20)
    }

    if (key == "e"){
        fill(200)
        rect(mouseX,mouseY,10,10)
        noStroke()
      }

     if (key == "a") {
       line(0, 0, mouseX, mouseY)
       line(width, 0, mouseX, mouseY)
       line(0, height, mouseX, mouseY)
       line(width, height, mouseX, mouseY)
     }

     if (key == "q") {
       if (mouseIsPressed === true) {
         angle += 5;
         let val = cos(radians(angle)) * 12.0;
         for (let a = 0; a < 360; a += 75) {
           let xoff = cos(radians(a)) * val;
           let yoff = sin(radians(a)) * val;
           fill(0);
           ellipse(mouseX + xoff, mouseY + yoff, val, val);
         }
         fill(255);
         ellipse(mouseX, mouseY, 2, 2);
       }

        }


  } else {
    line(pmouseX, pmouseY, mouseX, mouseY)

  }


}

    fill(255, 102, 102)
    rect(10,10,50,50)


    fill(54, 159, 224)
    rect(10,70,50,50)


    fill(60, 240, 135)
    rect(10,130,50,50)


    fill( 245, 149, 71)
    rect (10,190,50,50)

    fill(0,0,0)
    rect(10,250,50,50)

    // make a decrease strokeWeight button
    fill(166, 184, 191)
    rect(10, 310, 50, 50)
    line(20, 335, 50, 335)

    // make an increase strokeWeight button
    rect(10, 370, 50, 50)
    strokeWeight(5)
    line(20, 395, 50, 395)

    // make a clear button
    strokeWeight(1)
    fill(145, 169, 255)
    rect(10, 430, 50, 50)
    fill(255,255,255)
    text("C", 31, 460)

    // make a save button
    fill(145, 169, 255)
    rect(10, 490, 50, 50)
    fill(255,255,255)
    text("S", 31, 520)
}

function mouseClicked() {

    print(int(mouseX), int(mouseY))

    if (mouseX > 10 && mouseX < 60 && mouseY > 10 && mouseY < 60) {

      print("red button")
      brush = "red"


    }
if (mouseX > 10 && mouseX < 60 && mouseY > 60 && mouseY < 120) {
  print("blue button")
  brush = "blue"

  }

if (mouseX > 10 && mouseX < 60 && mouseY > 120 && mouseY < 180) {
  print (" Green Button")
  brush = "green"

  }
if ( mouseX > 10 && mouseX < 60 && mouseY > 180 && mouseY < 240) {
  print ("Orange Button")
  brush = "orange"
}

if(mouseX > 10 && mouseX < 60 && mouseY > 240 && mouseY < 300){
print ("Black Button")
brush = "black"
}

// check if mouse clicked in "strokeWeight decrease" box
    if (mouseX > 10 && mouseX < 60 && mouseY > 300 && mouseY < 360) {
        print("Clicked stroke decrease")
        if (current_stroke > 1) {
            current_stroke -= 1
        }
    }

    // check if mouse clicked in "strokeWeight increase" box
    if (mouseX > 10 && mouseX < 60 && mouseY > 360 && mouseY < 420) {
        print("Clicked stroke increase")
        current_stroke += 1
    }

    // check if mouse clicked in "clear" box
    if (mouseX > 10 && mouseX < 60 && mouseY > 420 && mouseY < 480) {
        background(200) // clear everything
    }

    // check if mouse clicked in "save" box
    if (mouseX > 10 && mouseX < 60 && mouseY > 480 && mouseY < 540) {
        save()  // saves an image of the canvas
    }
}
