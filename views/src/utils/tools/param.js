
const Param = function( a, traditional ) {
    var s = [],
      add = function( key, value ) {
        value = typeof value === 'function' ? value() : value;
        s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
      };

    // If an array was passed in, assume that it is an array of form elements.
    if ( isArray( a ) || !isPlainObject( a ) ) {
      for(var key in a){
        add(key, a[key])
      }

    } else {
      for ( var key in a ) {
        buildParams( key, a[key], add );
      }
    }
    // Return the resulting serialization
    return s.join( "&" ).replace( /%20/g, "+" );
  }

function buildParams( key, obj, add ) {
  if ( isArray(obj) ) {
    for(var i in obj){
        if (/\[\]$/.test( key ) ) {
        add( key, obj[i] );
      } else {
        buildParams( key + "[" + ( typeof obj[i] === "object" ? i : "" ) + "]", obj[i], add );
      }
    }

  } else if ( typeof obj === "object" ) {
    for ( var name in obj ) {
      buildParams( key + "[" + name + "]", obj[ name ], add );
    }
  } else {
    add( key, obj );
  }
}

function isArray(obj){
  if(typeof obj === 'object' && toString.call(obj) === '[object Array]'){
    return true;
  }
  return false;
}

function isPlainObject(obj){
  if(typeof obj === 'object' && !isArray(obj)){
    return true;
  }
  return false;
}

export default Param;
