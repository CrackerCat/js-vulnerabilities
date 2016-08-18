// Owner: Langfuzz

var haystack = 'foo';
var re_text = '^foo';
haystack += 'x';
re_text += '(x)';
var re = new RegExp(re_text);
re.test(haystack);
RegExp.input = Number();
print(RegExp.$1);
