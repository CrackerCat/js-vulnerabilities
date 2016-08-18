var summary = '';
var JSTest = {
};
var code = new Array();
var x1 = "\
    test();\n\
    function test()\n\
    {\n\
      (function(){ eval('this'); (function(){ for(let y in [0,1,2]) new test( summary,\n\
    	      \"var a=4,b=3;{b}\",\n\
    	      3,\n\
    	      eval(\"var a=4,b=3;{b}\") );})(); })();\n\
    }\n\
";
code.push(x1);
code.push("evaluate");
var files = new Array();
while (true) {
	var file = code.shift();
    if (file == "evaluate") {
		loadFiles(files);
	} else {
		files.push(file);
    }
}
function loadFiles(x) {
	for (i in x) {
		try {
			eval(x[i]); 
        } catch (e) {
       	}
  	}
}
