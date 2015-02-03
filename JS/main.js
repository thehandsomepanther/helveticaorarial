var num_guesses = 0;
var num_correct = 0;
var first_words = ["Lorem", "Ipsum", "Dolor", "Sit", "Amet", "Over", "Dog", "Days", "Through", "Grind"];
var second_words = ["everlasting", "light", "next", "girl", "let", "me", "tree", "wait", "makes", "road"];

function genRandomPhrase() {
    var first_num = Math.floor(Math.random() * 10);
    var second_num = Math.floor(Math.random() * 10);
    return first_words[first_num] + ' ' + second_words[second_num];
}

function genHelveticaOrArial(num) {
    if (num) {
        return "Helvetica";
    } else {
        return "Arial";
    }
}

function reset(seed) {
    $('.phrase').fadeOut();
    setTimeout(function () {
        $('.phrase').html(genRandomPhrase());
        $('.phrase').css('font-family', genHelveticaOrArial(seed));
    }, 500);
    $('.phrase').fadeIn(500);
}

function genRandomNumber() {
    var num = Math.floor(Math.random() * 10);
    if (num % 2 == 0) {
        return 1;
    } else {
        return 0;
    }
}

function endGame() {
    $('.game').fadeOut();
    $('.endGame-text').html(num_correct + "/" + num_guesses);
    setTimeout(function(){
        $('.endGame').fadeIn();
    }, 500);
}

function restartGame() {
    num_guesses = 0;
    num_correct = 0;
    $('.endGame').hide();
    $('.game').fadeIn();
}

$(document).ready(function () {
    var num = genRandomNumber();


    $('.game').hide();
    $('.endGame').hide();
    $('.play-button').click(function () {
        $('.intro').fadeOut();
        setTimeout(function () {
            $('.phrase').css('font-family', genHelveticaOrArial(num));
            $('.phrase').html(genRandomPhrase());
        }, 500);
        setTimeout(function () {
            $('.game').fadeIn();
        }, 500);
    });

    $('.helvetica-button').click(function () {
        if (genHelveticaOrArial(num) === "Helvetica") {
            num = genRandomNumber();
            reset(num);
            num_correct++;
        } else {
            num = genRandomNumber();
            reset(num);
        } 
        num_guesses++;
        
        if (num_guesses >= 10) { 
            endGame();
        }
    });

    $('.arial-button').click(function () {
        if (genHelveticaOrArial(num) === "Helvetica") {
            num = genRandomNumber();
            reset(num);
        } else {
            num = genRandomNumber();
            reset(num);
            num_correct++;
        }
        num_guesses++; 
        if (num_guesses >= 10) {
            endGame();
        }
    });
    
    $('.endGame-button').click(function() {
        restartGame(); 
    });

});