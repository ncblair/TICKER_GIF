let ftext = "";
let fwidth = 0;
let fheight = 0;
let ffontsize = 0;
let ffontcolor = "#ffffff";
let fbackgroundcolor = "#000000";
let fduration = 1;
let ftype = "";

function startSketch(){
    let sketch = function( p ) {
        ftext = document.getElementById("ftext").value + " ";
        fwidth = Number(document.getElementById("fwidth").value);
        fheight = Number(document.getElementById("fheight").value);
        ffontsize = Number(document.getElementById("ffontsize").value);
        ffontcolor = document.getElementById("ffontcolor").value;
        fbackgroundcolor = document.getElementById("fbackgroundcolor").value;
        fduration = Number(document.getElementById("fduration").value);
        ftype = document.getElementById("ftype").value;
        
        p.preload = function() {
            if (ftype == "CaseTrial") {
                ftype = p.loadFont("CaseTrial-Bold.otf");
            }
        }

        p.setup = function() {
            let canv = p.createCanvas(fwidth, fheight);
            canv.hide();
            p.frameRate(30);
            p.createLoop({duration:Math.abs(fduration), gif:true});
        };

        p.draw = function() {
            p.background(fbackgroundcolor);
            p.fill(ffontcolor);
            p.translate(p.width / 2, p.height / 2);
            p.textSize(ffontsize);
            p.textFont(ftype);
            p.textAlign(p.LEFT, p.BOTTOM);

            let text_width = p.textWidth(ftext);
            if (text_width <= 0.1) {
                text_width = 0.1;
            }
            let x = 0;
            if (fduration > 0) {
                x = -p.animLoop.theta * text_width / (2 * Math.PI) - p.width / 2;
            }
            else {
                x = p.animLoop.theta * text_width / (2 * Math.PI) - p.width / 2 - text_width;
            }
            
            let num_repetitions = Math.ceil(p.width / text_width) + 1;
            ftext_repeated = ftext.repeat(num_repetitions);
            let text_height = p.textAscent(ftext) - p.textDescent(ftext);

            p.text(ftext_repeated, x, text_height / 2 + p.textDescent(ftext));
            // p.fill("red");
            // p.stroke("red");
            // p.line(-p.width / 2, 0, p.width/2, 0);
            // p.line(0, 0, 0, p.textAscent(ftext));
            // p.line(0, 0, 0, -p.textDescent(ftext));
        };
    };
 
    let myp5 = new p5(sketch);
 }