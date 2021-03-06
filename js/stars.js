
// window.onload = function() {
//   var lastCalledTime;
//   var counter = 0;
//   var fpsArray = [];

//   function update(timestamp) {
//     var fps;
  
//     if (!lastCalledTime) {
//       lastCalledTime = new Date().getTime();
//       fps = 0;
//     }
  
//     var delta = (new Date().getTime() - lastCalledTime) / 1000;
//     lastCalledTime = new Date().getTime();
//     fps = Math.ceil((1/delta));
  
//     if (counter >= 60) {
//       var sum = fpsArray.reduce(function(a,b) { return a + b });
//       var average = Math.ceil(sum / fpsArray.length);
//       console.log(average);
//       counter = 0;
//     } else {
//       if (fps !== Infinity) {
//         fpsArray.push(fps);
//       }
  
//       counter++;
//     }
  
//     window.requestAnimationFrame(update);
//   }

//   window.requestAnimationFrame(update);
// };


// (function(){
//   var script = document.createElement('scriptX');
//   script.onload = function()  {
//     var stats = new Stats();
//     document.body.appendChild(stats.dom);
//     requestAnimationFrame(function loop(){
//       stats.update();
//       requestAnimationFrame(loop)
//     });
//   };
//   script.src='//rawgit.com/mrdoob/stats.js/master/build/stats.min.js';
//   document.head.appendChild(script);
// })();

// var fps = 0;

window.requestAnimFrame = (function() {
  return  window.requestAnimationFrame 
          || window.webkitRequestAnimationFrame 
          || window.mozRequestAnimationFrame 
          || window.oRequestAnimationFrame 
          || window.msRequestAnimationFrame 
          || function( callback ) { window.setTimeout(callback, 100 / 60); }
})();

(function() {
  var settings = {
    NUM_PARTICLES : 500,
    AVNUM_PER_1000PX  : 15,
    DISTANCE_T : 0,
    RADIUS : 2.0,
    OPACITY : 1,
    ANGLE_DEG : 5,
    // SPEED_X       : 0.2,
    SPEED_Y : -0.25,
    AMPLITUDE : 0,
    GALAXY_PIXMAP : "img/galactic_core.jpg",
    GALAXY_WIDTH_RATIO : 0.5,
    GALAXY_XSHIFT_RATIO : 0.05
  };
  
  var COLOURS___ = ["#FFFFFF", "#d1e1ef", "#2e8d1"],
      COLOURS__ = ["#b7d7e7", "#d9b3a0", "#b7a6d5"],
      COLOURS_ = ["#90bdd4", "#d0997e", "#827ac9"],
      COLOURS = ["#9db6c3", "#bc9f92", "#8985ae"],
      bounds = {},
      particles = [],
      random = Math.random,
      sqrt = Math.sqrt,
      PI = Math.PI,
      cos = Math.cos,
      sin = Math.sin,
      abs = Math.abs,
      round = Math.round,
      gamma_rad = settings.ANGLE_DEG * PI / 180.0,
      k = 0.0,
      num = settings.NUM_PARTICLES,
      fps = 29,
      ctx, W, H, stats, pixel, d, galaxy;
  
  function Particle() {

    this.x0 = random() * bounds.right;
    this.y0 = random() * bounds.bottom;

    this.x = this.x0;
    this.y = this.y0;

    this.xspeed =  abs(settings.SPEED_Y) * sin(gamma_rad)/cos(gamma_rad);
    this.yspeed =  settings.SPEED_Y;

    this.radius = random() * settings.RADIUS;
    this.colour = COLOURS[ ~~(random() * COLOURS.length)];
  }

  function Galaxy() {
    this.x = 0;
    this.y = 0;

    this.pixmap = new Image(600, 690);
    this.pixmap.src = settings.GALAXY_PIXMAP;

    this.xscale = settings.GALAXY_WIDTH_RATIO;
    // this.yscale = settings.GALAXY_WIDTH_RATIO * this.pixmap.height / this.pixmap.width;
    this.yscale = settings.GALAXY_WIDTH_RATIO * 1.15;

    this.xspeed = abs(settings.SPEED_Y) * sin(gamma_rad)/cos(gamma_rad);
    this.yspeed = settings.SPEED_Y;
  }
  
  var bindEvents = function() {
    window.addEventListener('resize', resize, false);
  };
  
  var resize = function() {

    W = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

    H = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;

    ctx.canvas.width = W;
    ctx.canvas.height = H;
    bounds.top = -H * k;
    bounds.right = W * (1 + k);
    bounds.bottom = H * (1 + k);
    bounds.left = -W * k;
    bounds.w = W;
    bounds.h = H;
    bounds.dx_max = H * sin(gamma_rad)/cos(gamma_rad);

    var nx = settings.AVNUM_PER_1000PX * W / 1000.0;
    var ny = settings.AVNUM_PER_1000PX * H / 1000.0;
    num = round(nx * ny);

    particles  = [];
    for (var i = 0; i < num; i += 1) {
      particles.push( new Particle() );
    }
  };
  
  var draw = function() {
    // setTimeout(draw, 1);
    // render();
    // requestAnimFrame(draw, ctx);
    // render();
    // requestAnimFrame(draw);

    setTimeout(function() {
        requestAnimationFrame(draw, ctx);
        render();
    }, 1000/fps);

  };
  
  var update = function (p) {
    if (p.y < 0) {
        p.y = bounds.h;
        p.x = random() * bounds.right;
    };

    p.x += p.xspeed;
    p.y += p.yspeed;

  };
  
  var render = function() {
    ctx.clearRect(0, 0, W, H);

    // Draw galaxy
    var galaxy_bottom = galaxy.y + galaxy.yscale*W;
    if (galaxy_bottom > 0) {
      ctx.drawImage(galaxy.pixmap, galaxy.x, galaxy.y, galaxy.xscale*W, galaxy.yscale*W);
      galaxy.x += galaxy.xspeed;
      galaxy.y += galaxy.yspeed;
    }
    
    // Draw stars
    // ctx.beginPath();  
    for (var i = 0; i < particles.length; i += 1) {
      var p = particles[i];
      ctx.fillStyle = p.colour;
      ctx.fillRect(p.x, p.y, p.radius, p.radius);   
      update(p);
      
    }
    // ctx.closePath();

  };
  
  var init = function() {
    ctx = document.getElementById('space-canvas').getContext('2d');
    galaxy = new Galaxy();
    bindEvents();
    resize();
    galaxy.x -= round(W * settings.GALAXY_XSHIFT_RATIO);
    draw();
    // setInterval(render, 40);
    // setInterval(draw, round(1000 / fps));
    // setInterval(draw, 0.01);

  };
  
  window.onload = init;
  
})();   
        