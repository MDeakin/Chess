var validRook = function(x,y) {
    var file = x[0] === y[0],
        rank = x[1] === y[1];
    return file!==rank;
};

var isOnBoard = function(sq){
    if(sq.length===2 && files[sq[0]]!==undefined && ( ~~sq[1] >=1 && ~~sq[1] <= 8 )) {
           return true;
    }
    return false;
};

exports.isValidMove = function(p,s1,s2) {
    if(s1===s2 || !isOnBoard(s1) || !isOnBoard(s2)){
        return false;
    }
    switch(p) {
        case 'R': return validRook(s1, s2);
        default: return false;
    }
};




    var files = {
        a: 97,
        b: 98,
        c: 99,
        d: 100,
        e: 101,
        f: 102,
        g: 103,
        h: 104
    };
