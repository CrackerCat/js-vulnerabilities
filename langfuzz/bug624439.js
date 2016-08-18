options('tracejit');

try {
test();
} catch(e) { }

function test()
{
    var s1 = evalcx('lazy');
    expect = function() { test();} (s1);
}

try {

var a = new Array(1000 * 100);
var i = a.length;

new i(eval("var obj = new Object(); obj.split = String.prototype.split; Array.prototype.getClass = Object.prototype.toString; obj.split().getClass()"));

} catch (e) { }

test3();
function test3()
{
  try
  {
    eval(
      "for(let y in ['', '']) try {for(let y in ['', '']) ( /x/g ); } finally {" +
      "with({}){} } this.zzz.zzz"
      );
  }
  catch(ex)
  {
  }
  new test3();
}
