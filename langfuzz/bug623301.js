options('tracejit');
gczeal(2);

function crashMe(n) {
  nasty = [];
  while (n--)
    nasty.push("a"+n);
  fn = Function.apply(null, nasty);
}
crashMe(0x8001);
