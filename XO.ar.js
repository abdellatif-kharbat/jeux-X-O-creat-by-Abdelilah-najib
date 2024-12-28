var XO ="X";
setInterval(move, 40);
let size = 60;
let vv = 85
function move() {
  if (size < 85) {
    size += 1;
    document.getElementById("resolt").style.fontSize = size + "px";
  } else if (size < 110) {
    size += 1;
    vv = vv - 1;
    document.getElementById("resolt").style.fontSize = vv + "px";
  } else {
    size = 60;
    vv = 85;
  }
}
var X = 0;
var O = 0;
function X_O(I) {
  let content = document.getElementById(I);
  let turn = XO;
  if (content.innerHTML == "") {
    if (turn == "X") {
      content.innerHTML = "X";
      content.style.color = "red";
      XO = "O";
      document.getElementById("who").innerHTML = 'سوف يلعب <span id="in">' + XO + '</span>';
      document.getElementById("in").style.color = "blue";
    } else {
      content.innerHTML = "O";
      content.style.color = "blue";
      XO = "X";
      document.getElementById("who").innerHTML = 'سوف يلعب <span id="in">' + XO + '</span>';
      document.getElementById("in").style.color = "red";
    }
  }
  if ((id("box1") == "X" && id("box2") == "X" && id("box3") == "X") || (id("box1") == "O" && id("box2") == "O" && id("box3") == "O")) {
    if (id("box1") == "X") {
      document.getElementById("who").innerHTML = "X فاز";
    } else {
      document.getElementById("who").innerHTML = "O فاز";
    }
  } else if ((id("box4") == "X" && id("box5") == "X" && id("box6") == "X") || (id("box4") == "O" && id("box5") == "O" && id("box6") == "O")) {
    if (id("box4") == "X") {
      document.getElementById("who").innerHTML = "X فاز";
    } else {
      document.getElementById("who").innerHTML = "O فاز";
    }
  } else if ((id("box7") == "X" && id("box8") == "X" && id("box9") == "X") || (id("box7") == "O" && id("box8") == "O" && id("box9") == "O")) {
    if (id("box7") == "X") {
      document.getElementById("who").innerHTML = "X فاز";
    } else {
      document.getElementById("who").innerHTML = "O فاز";
    }
  } else if ((id("box1") == "X" && id("box5") == "X" && id("box9") == "X") || (id("box1") == "O" && id("box5") == "O" && id("box9") == "O")) {
    if (id("box1") == "X") {
      document.getElementById("who").innerHTML = "X فاز";
    } else {
      document.getElementById("who").innerHTML = "O فاز";
    }
  } else if ((id("box1") == "X" && id("box4") == "X" && id("box7") == "X") || (id("box1") == "O" && id("box4") == "O" && id("box7") == "O")) {
    if (id("box1") == "X") {
      document.getElementById("who").innerHTML = "X فاز";
    } else {
      document.getElementById("who").innerHTML = "O فاز";
    }
  } else if ((id("box5") == "X" && id("box2") == "X" && id("box8") == "X") || (id("box5") == "O" && id("box2") == "O" && id("box8") == "O")) {
    if (id("box5") == "X") {
      document.getElementById("who").innerHTML = "X فاز";
    } else {
      document.getElementById("who").innerHTML = "O فاز";
    }
  } else if ((id("box6") == "X" && id("box9") == "X" && id("box3") == "X") || (id("box6") == "O" && id("box9") == "O" && id("box3") == "O")) {
    if (id("box6") == "X") {
      document.getElementById("who").innerHTML = "X فاز";
    } else {
      document.getElementById("who").innerHTML = "O فاز";
    }
  } else if ((id("box5") == "X" && id("box7") == "X" && id("box3") == "X") || (id("box5") == "O" && id("box7") == "O" && id("box3") == "O")) {
    if (id("box5") == "X") {
      document.getElementById("who").innerHTML = "X فاز";
    } else {
      document.getElementById("who").innerHTML = "O فاز";
    }
  } else {
    let c = 0;
    for (let i = 1; i < 10; i++) {
      if (document.getElementById("box"+i).innerHTML == "") {
        c += 1;
      }
    }
    if (c == 0) {
      document.getElementById("who").innerHTML = "تعادل";
      document.getElementById("resolt").innerHTML = document.getElementById("who").innerHTML;
      document.getElementById("blockresolt").style.display = "inline-block";
      document.getElementById("resolt").style.color = "black";
      document.getElementById("cong").innerHTML = "try again";
    }
  }
  if (document.getElementById("who").innerHTML == "X فاز") {
    document.getElementById("who").style.color = "red";
    for (let i = 1; i < 10; i++) {
      if (document.getElementById("box"+i).innerHTML == "") {
        document.getElementById("box"+i).innerHTML = " ";
      }
    }
    XO = "X";
    document.getElementById("resolt").innerHTML = document.getElementById("who").innerHTML;
    document.getElementById("resolt").style.color = "red";
    document.getElementById("cong").innerHTML = "X مبروك للاعب(ة)";
    document.getElementById("blockresolt").style.display = "inline-block";
    document.getElementById("X").innerHTML = ++X;
    document.getElementById("X1").innerHTML = X;
  } else if (document.getElementById("who").innerHTML == "O فاز") {
    document.getElementById("who").style.color = "blue";
    for (let i = 1; i < 10; i++) {
      if (document.getElementById("box"+i).innerHTML == "") {
        document.getElementById("box"+i).innerHTML = " ";
      }
    }
    XO = "O";
    document.getElementById("resolt").innerHTML = document.getElementById("who").innerHTML;
    document.getElementById("resolt").style.color = "blue";
    document.getElementById("cong").innerHTML = "O مبروك للاعب(ة)";
    document.getElementById("blockresolt").style.display = "inline-block";
    document.getElementById("O").innerHTML = ++O;
    document.getElementById("O1").innerHTML = O;
  }
}
function id(I) {
  return document.getElementById(I).innerHTML;
}
function restart() {
  for (let i = 1; i < 10; i++) {
    document.getElementById("box"+i).innerHTML = "";
  }
  document.getElementById("who").innerHTML = 'سوف يبدأ <span id="in">' + XO + '</span>';
  document.getElementById("who").style.color = "black";
  if (XO == "X") {
    document.getElementById("in").style.color = "red";
  } else {
    document.getElementById("in").style.color = "blue";
  }
  document.getElementById("blockresolt").style.display = "none";
}
function rest() {
  X = 0;
  O = 0;
  XO = "X";
  document.getElementById("who").innerHTML = 'سوف يبدأ <span id="in" style="color: red;">' + XO + '</span>';
  document.getElementById("X1").innerHTML = X;
  document.getElementById("O1").innerHTML = O;
  document.getElementById("X").innerHTML = X;
  document.getElementById("O").innerHTML = O;
}