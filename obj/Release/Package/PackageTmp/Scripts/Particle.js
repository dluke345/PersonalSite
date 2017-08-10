if ($(window).width() >= 900) { 
    

    // Get random number
    function getRandomNum(max) {
        'use strict';
        return Math.floor(Math.random() * max);
    }

    window.setTimeout(function () {

$(function () {
    'use strict';
    var total = 6;
    var particles = [];

    for (var i = 0; i < total; i++) {
        particles[i] = new Particle();
    }
});
    }, 3500);
    var num = 1;
function Particle() {
    'use strict';
    var self = this;
    self.images = ['/content/images/html.png', '/content/images/css.png', '/content/images/javascript.png', '/content/images/jQuery.png', '/content/images/angularjs.png', '/content/images/react.png'];
    
    self.image = self.images[self.images.length - num];
    self.file = self.image;

    self.element = document.createElement('img');

    self.speed().newPoint().display().newPoint().fly();

    num++;
};


//  Get a random Speed 
Particle.prototype.speed = function () {
    'use strict';
    var self = this;
    self.duration = (getRandomNum(10) + 8) * 1000;

    return self;
};

//  Get a Random Position 
Particle.prototype.newPoint = function () {
    'use strict';
    var self = this;
    self.pointX = getRandomNum(window.innerWidth - 250);
    self.pointY = getRandomNum(window.innerHeight - 250);

    return self;
};

//  Display the images 
Particle.prototype.display = function () {  
    'use strict';
    var self = this;
    $(self.element)
        .attr('src', self.file)
        .css({ 'position': 'absolute', 'top': self.pointY, 'left': self.pointX })
        .addClass("floatingImages");
    $(document.body).append(self.element);

    return self;
};

//  Animate Movements 
Particle.prototype.fly = function () {
    'use strict';
    var self = this;
    $(self.element).animate({
        "top": self.pointY,
        "left": self.pointX,
    }, self.duration, 'linear', function () {
        self.speed().newPoint().fly();
    });
    return self;
};


};