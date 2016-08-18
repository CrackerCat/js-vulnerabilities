// Play with this
var numUpVars = 24;

// Run our composed function
function fail(foo, bar, baz) {
  eval(bar);
}

// Used to build up distinct identifiers (a, aa, aaa etc.)
var id = "a";

// Compose an outer and inner function
var fdefpre = "function outer() { var xi, xo";
var ifdefpre = "function inner() { print(foo); xi(foo, bar, baz); xo();";
var ifdefpost = "} ";
var fdefpost = "}";

// Build numUpVars additional identifiers to add into our code
for (var x = 0; x < numUpVars; x++) {
	fdefpre += ", " + id
	ifdefpre += " " + id + "();";
	id = id+"a";
}
fdefpre += ";";

// Run our code
fail(undefined, fdefpre + ifdefpre + ifdefpost + fdefpost, undefined);
