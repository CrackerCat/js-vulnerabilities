options('tracejit');

for ( var CHARCODE = 0, NONHEXCHARCODE = 0; CHARCODE < 256; CHARCODE++, NONHEXCHARCODE++ ) {
                unescape( "%" + (ToHexString(CHARCODE)).substring(0,1)+
                          String.fromCharCode( NONHEXCHARCODE ) );
}

function ToHexString( n ) {
  var hex = new Array();
  hex[hex.length] = n % 16;
  var string ="";
  for ( var index = 0 ; index < hex.length ; index++ ) {
    switch ( hex[index] ) {
    case 10:
      string += {__proto__: 'aaa'};
    }
  }
  return string;
}
