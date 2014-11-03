$(function() {

  var $mouse = $('#mouse');
  var $floor = $('#floor');

  // TODO: to keep the mouse inside the bounds of the #floor,
  // you'll need to figure out how far the mouse can scamper in
  // either direction before hitting a wall.
  // note: you need to know both the dimensions of the floor
  // and the dimensions of the mouse.
  // you'll use these values in the 'scamper' method below
  var xMax = $floor.width(); // TODO: initialize me
  var yMax = $floor.height(); // TODO: initialize me

  // constants
  var MOVE_LENGTH = 50; // pixels
  var MOVE_TIME = 300; // milliseconds
  var DIRECTIONS = ['up', 'down', 'left', 'right'];

  // give top and left position properties initial values
  $mouse.css('top', 0);
  $mouse.css('left', 0);

  // TODO: register an event handler to respond to a win
  $($mouse).on('click', function() {
    alert('You Caught the mouse, you win!');
  });
  // TODO: scamper the mouse MOVE_LENGTH pixels in a direction
  // randomly chosen from array DIRECTIONS
  // be sure to call boundValue on the input in order to keep
  // the mouse within the floor boundaries.
  // note:
  // to scamper the mouse right, you add to the 'left' position property.
  // to scamper the mouse down, you add to the 'top' position property.
  function scamper() {
    console.log('implement the scamper method');
    // TODO: implement me
    // TODO: call randomDirection
    // TODO: use the current function (twice)
    // TODO: call boundValue (twice) somewhere in here
    // to make sure the mouse stays on the floor

    var mousePos = current($mouse);
    var mouseX = mousePos[0];
    var mouseY = mousePos[1];
    var mouseWidth = $mouse.width();
    var mouseHeight = $mouse.height();
    var yNum = 0;
    var xNum = 0;
    var c = '';
    var r = randomDirection();
    var convert = function(s) {
      var st = '';
      switch (s) {
        case 'up':
          st = '-=' + MOVE_LENGTH;
          yNum = -MOVE_LENGTH;
        return {top:st};
        case 'down':
          st =  '+=' + MOVE_LENGTH;
          yNum = MOVE_LENGTH;
        return {top:st};
        case 'left':
          st = '-=' + MOVE_LENGTH;
          xNum = -MOVE_LENGTH;
        return {left:st};
        case 'right':
          st = '+=' + MOVE_LENGTH;
          yNum = MOVE_LENGTH;
        return {left:st};
      }
    };

    var moveMouse = function() {
      c = convert(r);
      if (boundValue(mouseX + xNum, xMax) && boundValue(mouseY + yNum, yMax)) {
        $mouse.animate(c, MOVE_LENGTH);
      }
    };

    moveMouse();

  }

  // start the mouse running
  // plus 10 ms to put some padding between the
  // animation and the next interval
  // don't change the following line.
  setInterval(scamper, MOVE_TIME + 10);

  // ----------------------------------------
  // helpers
  // ----------------------------------------

  // bound value between 0 and max
  // TODO: use me in the scamper method
  function boundValue(value, max) {
    //TODO: implement me
    if ((value - 50 < 0) || (value + 50 > max)) {
      return false;
    } else {
      return true;
    }
  }

  // TODO: use me in the scamper method
  function randomDirection() {
    // TODO: randomly select and return one of the values in
    // implement me
    // the array DIRECTIONS
    return DIRECTIONS[Math.floor(Math.random() * (DIRECTIONS.length))];
  }

  // positionProperty should be one of
  // 'top', 'left', 'right', or 'bottom'
  // TODO: use me in the scamper method
  function current(positionProperty) {
    // TODO: return an integer representing the specified
    // implement me
    // position property (where the mouse currently is)
    p = positionProperty.offset();
    return [p.left, p.top];
  }
});
