
//

var vows = require('vows'),
    assert = require('assert'),
    chess = require('./chess');
    
vows.describe('Valid Rook Moves').addBatch({
    'same File move Re1-e3': {
        topic: function() {
            return chess.isValidMove('R', 'e1', 'e3');
        },
        'is allowed': function(result) {
            assert.isTrue(result);
        }
    },
    'same Rank move Rc6-f6': {
        topic: function() {
            return chess.isValidMove('R', 'c6', 'f6');
        },
        'is allowed': function(result) {
            assert.isTrue(result);
        }
    },
    'non-straight move Re1-f2': {
        topic: function() {
            return chess.isValidMove('R', 'e1', 'f2');
        },
        'is forbidden': function(result) {
            assert.isFalse(result);
        }
    },
    'same square move Rh7-h7': {
        topic: function() {
            return chess.isValidMove('R', 'h7', 'h7');
        },
        'is forbidden': function(result) {
            assert.isFalse(result);
        }
    },
    'off board move Ri7-h7': {
        topic: function() {
            return chess.isValidMove('R', 'i7', 'h7');
        },
        'is forbidden': function(result) {
            assert.isFalse(result);
        }
    }
}).run();