function eval() { eval(); }
function DoWhile_3()
{
  eval();
}
try
{
  DoWhile_3();
}
catch(summary)
{
  BUGNUMBER = summary + '';
}
function f()
{
  test();
  yield BUGNUMBER& new test( DoWhile_3,
	      (new eval()).eval  == eval.prototype.eval );
}

function test()
{
  function foopy()
  {
    try
    {
      for (var i in f());
    }
    catch (e) { }
  }
  foopy();
  gc();
}

test();

new Date( 1999,11,31,16,0,0,0);

test();
