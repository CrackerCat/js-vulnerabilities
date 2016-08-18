options('strict');
options('tracejit');

function test()
{
  var constants = ['E', 'LN10', 'LN2', 'LOG2E', 'LOG10E', 'PI', 'SQRT1_2', 'SQRT2'];
  for (var j = 0; j < constants.length; j++)
  {
    for(i=0;i<9;++i) {
      ++Math[constants[j]];
    }
    
    eval(++ ''.encodeURI(/foo/) / constants(Math-1));
  }
}

test();
