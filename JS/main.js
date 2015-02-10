var num_guesses = 0;
var num_correct = 0;
var first_words = ["adorable",
"beautiful",
"clean",
"drab",
"elegant",
"fancy",
"glamorous",
"handsome",
"long",
"magnificent",
"old-fashioned",
"plain",
"quaint",
"sparkling",
"ugliest",
"unsightly",
"wide-eyed",
"red",
"orange",
"yellow",
"green",
"blue",
"purple",
"gray",
"black",
"white",
"alive",
"better",
"careful",
"clever",
"dead",
"easy",
"famous",
"gifted",
"helpful",
"important",
"inexpensive",
"mushy",
"odd",
"powerful",
"rich",
"shy",
"tender",
"uninterested",
"vast",
"wrong",
"angry",
"bewildered",
"clumsy",
"defeated",
"embarrassed",
"fierce",
"grumpy",
"helpless",
"itchy",
"jealous",
"lazy",
"mysterious",
"nervous",
"obnoxious",
"panicky",
"repulsive",
"scary",
"thoughtless",
"uptight",
"worried",
"agreeable",
"brave",
"calm",
"delightful",
"eager",
"faithful",
"gentle",
"happy",
"jolly",
"kind",
"lively",
"nice",
"obedient",
"proud",
"relieved",
"silly",
"thankful",
"victorious",
"witty",
"zealous",
"broad",
"chubby",
"crooked",
"curved",
"deep",
"flat",
"high",
"hollow",
"low",
"narrow",
"round",
"shallow",
"skinny",
"square"];
var second_words = ["ball",
"bat",
"bed",
"book",
"boy",
"bun",
"can",
"cake",
"cap",
"car",
"cat",
"cow",
"cub",
"cup",
"dad",
"day",
"dog",
"doll",
"dust",
"fan",
"feet",
"girl",
"gun",
"hall",
"hat",
"hen",
"jar",
"kite",
"man",
"map",
"men",
"mom",
"pan",
"pet",
"pie",
"pig",
"pot",
"rat",
"son",
"sun",
"toe",
"tub",
"van",
"actor",
"airplane",
"airport",
"army",
"baseball",
"beef",
"birthday",
"boy",
"brush",
"bushes",
"butter",
"cast",
"cave",
"cent",
"cherries",
"cherry",
"cobweb",
"coil",
"cracker",
"dinner",
"eggnog",
"elbow",
"face",
"fireman",
"flavor",
"gate",
"glove",
"glue",
"goldfish",
"goose",
"grain",
"hair",
"haircut",
"hobbies",
"holiday",
"hot",
"jellyfish",
"ladybug",
"mailbox",
"number",
"oatmeal",
"pail",
"pancake",
"pear",
"pest",
"popcorn",
"queen",
"quicksand",
"quiet",
"quilt",
"rainstorm",
"scarecrow",
"scarf",
"stream",
"street",
"sugar",
"throne"];

function genRandomPhrase() {
    var first_num = Math.floor(Math.random() * 100);
    var second_num = Math.floor(Math.random() * 100);
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
    $('.guess-buttons').attr('disabled', 'disabled');
    $('.phrase').fadeOut();
    setTimeout(function () {
        $('.phrase').html(genRandomPhrase());
        $('.phrase').css('font-family', genHelveticaOrArial(seed));
    }, 500);
    $('.phrase').fadeIn(500);
    $('.guess-buttons').removeAttr('disabled');
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
    setTimeout(function () {
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
        $('.helvetica-button').prop('disabled', true);
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
        setTimeout(function(){
            $('.helvetica-button').prop('disabled', false);
        }, 500);
    });

    $('.arial-button').click(function () {
        $('.arial-button').prop('disabled', true);
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
        setTimeout(function(){
            $('.arial-button').prop('disabled', false);
        }, 500);
    });

    $('.endGame-button').click(function () {
        restartGame();
    });

});