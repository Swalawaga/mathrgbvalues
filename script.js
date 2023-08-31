var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
//canvas.width = canvas.height = 800;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ps = 10;
var check = 0;
var complexity = 10;
function draw(r, g, b) {
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for(var x = 0;x<canvas.width;x+=ps) {
    for(var y = 0;y<canvas.height;y+=ps) {
      if(document.querySelector("#color").checked) {
        var val = (eval(r)+eval(g)+eval(b)) / 3;
        //console.log(val)
        if(val > 255) {
          val = val/2;
        }
        ctx.fillStyle = `rgb(${val}, ${val}, ${val})`;
      } else {
        if(check == 0) {
          ctx.fillStyle = `rgb(${eval(r)*c("rs")}, ${eval(g)*c("gs")}, ${eval(b)*c("bs")})`; 
        } else {
          //ctx.fillstyle = `rgb(${eval(r)}, ${eval(g)}, ${eval(b)})`;
          var val = (eval(r)+eval(g)+eval(b)) / 3;
          if(val > 255) {
            ctx.fillStyle = `rgb(${eval(r)*c("rs")/2}, ${eval(g)*c("gs")/2}, ${eval(b)*c("bs")/2})`; 
          }
          ctx.fillStyle = `rgb(${eval(r)*c("rs")}, ${eval(g)*c("gs")}, ${eval(b)*c("bs")})`; 
        }
      }
      //ctx.fillStyle = `rgb(${(r)}, ${(g)}, ${(b)})`;
      ctx.fillRect(x, y, ps, ps);
    };
  };
};
draw("Math.sin(x)", "y", "x")
function c(id) {
  return document.getElementById(id).value;
}
//draw(0,255,"x/10");
function thing() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
 draw(c("r"), c("g"), c("b"))
 //draw(c("r") * c("rs"), c("g")*c("gs"), c("b") * c("bs"));
}
function choice(test) {
  return test[Math.floor(Math.random() * test.length)];
};
function generateExpr() {
  var expr = choice(["x", Math.floor(Math.random() * 256), "y"]);
  //var t = Math.floor(Math.random() * 10);
  for(var some = 0;some<Math.floor(Math.random() * complexity);some++) {
    var tt = choice(["sin", "cos", "tan", "x", "y", "pi", "+"]);
    if(tt == "sin" || tt == "cos" || tt == "tan") {
      expr = `Math.${tt}(${expr} * Math.PI / 180)`
    }
    if(tt == "x") {
      expr = `${expr}*x`;
    }
    if(tt == "y") {
      expr = `${expr}*y`;
    }
    if(tt == "+") {
      if(Math.floor() * 1) {
        expr = `${expr}+x`;
      } else {
        expr = `${expr}+y`;
      }
    }
    //if(tt == "pi") {
      //expr = `Math.PI * ${expr}`;
    //}
  }
  if(check == 1) {
    var x = y = 10;
    if(eval(expr) < 10) {
      //expr = `${expr}*100`;
      expr = generateExpr();
    }
  }
  return expr;
};
function flip(baa) {
  var str = c(baa);
  str = str.replace(/x/g, "blue");
  str = str.replace(/y/g, "red");
  str = str.replace(/blue/g, "y");
  str = str.replace(/red/g, "x");
  document.getElementById(baa).value = str;
  //console.log(str)
  thing();
}
function b() {
  document.querySelector("#r").value = generateExpr();
  document.querySelector("#g").value = generateExpr();
  document.querySelector("#b").value = generateExpr();
  document.querySelector("#rs").value = Math.floor(Math.random() * 255)  
  document.querySelector("#gs").value = Math.floor(Math.random() * 255)
  document.querySelector("#bs").value = Math.floor(Math.random() * 256)
  thing();
};
b();
