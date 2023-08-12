// coded by Mohammad Zefri
// contact me on zfrmhmmd.code@gmail.com





var numberOf = document.getElementById("number-of");
var resetBtn = document.getElementById("reset-btn");
var upCon = document.getElementById("up-con");
var bellowCon = document.getElementById("bellow-con");
var nextBtn = document.getElementById("next-btn");
var correctSound = document.getElementById("correct");
var wrongSound = document.getElementById("wrong");


if (window.localStorage.getItem("idx") === null) {
    window.localStorage.setItem("idx", 0);
    var idx = window.localStorage.getItem("idx");
} else {
    var idx = window.localStorage.getItem("idx");
};

idx = +idx;

var sentences = [
    // 1
    "Wie heißt du ?",
    "Ich heiße ...",
    "Wie ist dein Name ?",
    "Mein Name ist ...",
    "Wer bist du ?",
    "Ich bin ...",
    "Wie geht's ?",
    "Gut, danke und dir ?",
    "Wie geht es dir ?",
    "Es geht.",
    "Nicht so gut",
    "Mir geht es gut.",
    "Woher kommst du ?",
    "Ich komme aus Syrien.",
    "Ich komme aus Palästina.",
    "Ich komme aus Ägypten.",
    "Ich komme aus Marokko.",
    "Wo wohnst du ?",
    "Wie heißen Sie ?",
    "Wie ist Ihr Name ?",
    // 2
    "Wer sind Sie ?",
    "Wie geht es Ihnen ?",
    "Gut, danke und Ihnen ?",
    "Woher kommen Sie ?",
    "Wo wohnen Sie ?",
    "Guten Morgen",
    "Guten Tag",
    "Guten Abend",
    "Gute Nacht",
    "Auf Wiedersehen!",
    "Bis dann!",
    "Auf Wiederhören!",
    "Tschüss!",
    "Bis später!",
    "Bis bald!",
    "Woher kommst du? Aus Spanien?",
    "Nein, ich komme aus Mexiko.",
    "Du kommst aus Deutschland, oder?",
    "Aus der Schweiz ?",
    "Ich komme aus Österreich.",
    // 3
    "Ich bin Lehrerin. Meine Muttersprache ist Deutsch.",
    "Ich spreche auch Spanisch und Englisch.",
    "Was machst du beruflich ?",
    "Was machen Sie beruflich ?",
    "Was bist du von Beruf ?",
    "Was sind Sie von Beruf ?",
    "Noch einmal, bitte.",
    "Wie bitte?",
    "Wir sind verheiratet.",
    "Wir sind nicht verheiratet.",
    "Wir sind geschieden.",
    "Wir haben ein Kind.",
    "Ich bin verheiratet.",
    "Wie alt bist du ?",
    "Wie alt sind Sie ?",
    "Wo lebst du ?",
    "Wo leben Sie ?",
    "Welche Sprachen sprechen Sie ?",
    "Welche Sprachen sprichst du ?",
    "Was sind Ihre Hobbys ?",
    // 4
    "Was sind deine Hobbys ?",
    "Sind Sie verheiratet ?",
    "Bist du verheiratet ?",
    "Meine Schwester ist Lehrerin.",
    "Was ist deine Muttersprache ?",
    "Wie ist deine Telefonnummer ?",
    "Das ist meine Mutter",
    "Ist das deine Frau ?",
    "Grüß Gott!",
    "Hast du Kinder ?",
    "Haben Sie Kinder ?",
    "Wie viel kostet denn das ?",
    "Was kostet das ?",
    "Die Lampe ist wirklich sehr schön und nicht teuer!",
    "Brauchen Sie Hilfe ?",
    "Ja, bitte",
    "Nein, danke!",
    "Was kostet die Lampe ?",
    "Wie viel kostet denn die Lampe ?",
    "Was ist das ?",
    // 5
    "Ist das eine Brille ?",
    "Ja. Das ist eine Brille.",
    "Welche Farbe hat das Auto ?",
    "Das Auto ist grün.",
    "Das ist eine Uhr. Sie ist braun.",
    "Das ist ein Schirm. Er ist grün.",
    "Das ist eine Seife. Sie ist gelb.",
    "Das ist eine Geldbörse. Sie ist blau.",
    "Entschuldigung, wie heißt das auf Deutsch ?",
    "Wie schreibt man Uhr ?",
    "Bitteschön. kein Problem.",
    "Wie sagt man das auf Deutsch ?",
    "Wie heißt das ?",
    "Was bedeutet das ?",
    "Noch einmal bitte!",
    "Können Sie das bitte wiederholen ?",
    "Können Sie das noch einmal sagen ?",
    "Können Sie das bitte buchstabieren ?",
    "Wie schreibt man Tasche ?",
    "Ist das ein Stuhl ?",
    // 6
    "Ja, das ist ein Stuhl.",
    "Nein, das ist kein Stuhl.",
    "Ist das kein Stuhl ?",
    "Ja, das ist kein Stuhl.",
    "Doch, das ist ein Stuhl.",
    "Das ist einfach, oder ?",
    "Das ist nicht schwer, oder ?",
    "Wer ist das ?",
    "Was macht der Mann ?",
    "Ich habe keine Zeit.",
    "Ich habe einen Laptop.",
    "Wo wohnst Sarah ?",
    "Mein Nachbar kommt aus Italien.",
    "Ich wohne in Berlin",
    "Meine Nachbarin heißt Serena.",
    "Lernst du Deutsch ?",
    "Du bist schön.",
    "Du bist süß",
    "Du bist hübsch",
    "Du bist so lieb",
    // 7
    "Kann ich hier rauchen ?",
    "Ja, klar.",
    "Ja, natürlich.",
    "Ja, gern",
    "Nicht so gern.",
    "Nein, das geht leider nicht.",
    "Nein, tut mir leid.",
    "Ich arbeite als Journalist.",
    "Welche Sprachen sprecht ihr ?",
    "Wir sprechen Italienisch und ein bisschen Deutsch.",
    "Ist das eine Brille ?",
    "Nein, das ist keine Brille.",
    "Wo ist der Laptop.",
    "Hier, ich habe den Laptop ?",
    "Haben Sie ein Notizbuch ?",
    "Nein, ich habe kein Notizbuch.",
    "Gestern war ihr Geburtstag und ihr Vater hat schon wieder nicht angerufen.",
    "Ich bin nicht taub.",
    "Mein Vater ist berühmt.",
    "Er ist einfach nur zu beschäftigt, um anzurufen.",
    // 8
    "Drüben am Empfang wartet ein Paket für dich. Beeil dich.",
    "Ich habe gehört, mein Vater hat mir ein Paket geschickt.",
    "Ich habe ein Paket, aber ich glaube kaum, dass es von deinem Vater ist.",
    "Das ist ein Missverständnis.",
    "Ich bin deine Tochter.",
    "Wir haben Gesellschaft.",
    "Die Sonne geht bald auf.",
    "Das Rennen hat begonnen.",
    "Ich werde alles tun ohne zu klagen.",
    "Ich bin die neue Lehrerin.",
    "Ich habe einen guten Rat für dich.",
    "Du musst vergessen, dass wir einmal Freunde waren.",
    "Uns geht es gut.",
    "Ich werde nicht aufgeben.",
    "Ich habe eine Stimme gehört.",
    "Ich dachte, ich hätte dich für immer verloren.",
    "Wir haben gewonnen.",
    "Deine Mutter wäre stolz auf dich.",
    "Wir müssen siegen.",
    "Was wollen Sie von mir ?",
    // 9
    "Was machst du hier ?",
    "Wieso sagst du mir das ?",
    "Kannst du mich hören ?",
    "Was habe ich getan ?",
    "Wie geht's ihm ?",
    "Wie spät ist es ?",
    "Wie viel Uhr ist es ?",
    "Hast du heute Nachmittag Zeit ?",
    "Nein, leider nicht.",
    "Nein, ich habe leider keine Zeit.",
    "Nein, leider habe ich keine Zeit.",
    "Warum nicht?",
    "Heute Nachmittag gehe ich ins Museum.",
    "Ich gehe heute Nachmittag ins Museum.",
    "Heute Nachmittag male ich.",
    "Was machst du heute Nachmittag ?",
    "Gehen wir ins Kino?",
    "Gute Idee! Wann denn?",
    "Um zwei, um vier oder um sechs?",
    "Sechs Uhr ist zu spät. Heute Abend habe ich keine Zeit. Gehen wir um vier?",
    // 10
    "Okay, dann bis vier!",
    "Ja, bis dann!",
    "Tut mir leid. Ich habe keine Lust.",
    "Das weiß ich noch nicht.",
    "Du bist so stark.",
    "Du musst mir nur vertrauen.",
    "Das darf ich nicht verpassen.",
    "Wirklich fantastisch, genauso wie im Zirkus.",
    "Ich werde sie befreien.",
    "Es ist eine Falle.",
    "Wir sehen uns wieder.",
    "Er kommt bestimmt zurück.",
    "Ist alles in Ordnung ?",
    "Hast du das gehört ?",
    "Lass die Leute in Ruhe. Sie haben kein Geld.",
    "Wir müssen das Geld zählen.",
    "Wir unterhalten uns später nochmal darüber.",
    "Prima, es ist kein Schloss an der Kiste.",
    "Die Kisten sind ganz leer.",
    "Ich verstehe deine Verzweiflung.",
    // 11
    "Aus welchem Grund ?",
    "Was für ein hübscher Stein.",
    "Aber wer ist sie denn ?",
    "Hast du ihn gefunden ?",
    "Mein Vater hat mir den Stein gegeben.",
    "Wie heißt du denn ?",
    "Das ist ja sehr interessant.",
    "Das kann nicht wahr sein.",
    "Er ist vor vielen Jahren gestorben.",
    "Ich bin allein. Ich habe niemanden mehr.",
    "Ich bin nicht seine Tochter.",
    "Ich hatte auch einen Bruder. Er war älter als ich und einfach wundervoll.",
    "Er war der wichtigste Mensch der Welt für mich.",
    "Aber ich bin nicht allein, weil ich eine Schwester und einen Bruder habe.",
    "Du hast recht.",
    "Sie ist unschuldig.",
    "Vielen Dank, dass du mir geholfen hast.",
    "Nichts zu danken, und jetzt geh mit deinem Vater nach Hause.",
    "Vielen Dank für deine Hilfe.",
    "Ich habe das Gefühl, dass du mir etwas sagen willst.",
];

console.log(sentences.length);


function zfill(str, width) {
    const padding = "0".repeat(width - str.length);
    return padding + str;
};

function displayNumber() {
    if (idx.toString().length < sentences.length.toString().length) {
        let str = (idx + 1).toString();
        numberOf.innerHTML = `${zfill(str, sentences.length.toString().length)} of ${sentences.length}`;
    } else {
        numberOf.innerHTML = `${idx + 1} of ${sentences.length}`;
    };
};
displayNumber();


var shaffledArray = [];
function shuffle(array) {
    let usedIndexes = [];
    let i = 0;
    while (i < array.length) {
        let randomNumber = Math.floor(Math.random() * array.length);
        if (!usedIndexes.includes(randomNumber)) {
            shaffledArray.push(array[randomNumber]);
            usedIndexes.push(randomNumber);
            i++;
        };
    };
    return shaffledArray;
};






var numOfDivs = sentences[0].split(" ").length;
var numOfDivsUp = 0;
var numOfDivsBellow = 0;

function fillOut(idx) {
    shaffledArray = [];
    shuffle(sentences[idx].split(" "));
    for (let i = 0; i < shaffledArray.length; i++) {
        let div = document.createElement("div");
        div.appendChild(document.createTextNode(`${shaffledArray[i]}`));

        div.style.cssText = `display: inline-block; font-size: 0.7em; background-color: #EEEEEE; padding: 7px 9px; cursor: pointer; border-radius: 3px; margin-left: 7px;`;
        bellowCon.appendChild(div);
        if (bellowCon.childNodes.length > 0) {
            bellowCon.childNodes.forEach(function(d){
                d.style.marginLeft = "7px";
            })
            bellowCon.firstElementChild.style.marginLeft = "0px";
        }
        div.onclick = function() {
            if (div.parentNode === bellowCon) {

                bellowCon.removeChild(div);
                upCon.appendChild(div);

                if (upCon.childNodes.length > 0) {
                    upCon.childNodes.forEach(function(d){
                        d.style.marginLeft = "7px";
                    })
                    upCon.firstElementChild.style.marginLeft = "0px";
                }
    
                    if (bellowCon.childNodes.length > 0) {
                        bellowCon.childNodes.forEach(function(d){
                            d.style.marginLeft = "7px";
                        })
                        bellowCon.firstElementChild.style.marginLeft = "0px";
                    }
        







            } else if (div.parentNode === upCon) {
                
                upCon.removeChild(div);
                bellowCon.appendChild(div);



                if (upCon.childNodes.length > 0) {
                    upCon.childNodes.forEach(function(d){
                        d.style.marginLeft = "7px";
                    })
                    upCon.firstElementChild.style.marginLeft = "0px";
                }


                if (bellowCon.childNodes.length > 0) {
                    bellowCon.childNodes.forEach(function(d){
                        d.style.marginLeft = "7px";
                    })

                    bellowCon.firstElementChild.style.marginLeft = "0px";
                }


            };
        };
    };
    
}

fillOut(idx);

nextBtn.onclick = function() {
    if (idx < sentences.length - 1) {
        if (upCon.innerText === sentences[idx].split(" ").join("")) {
            bellowCon.innerHTML = "";
            upCon.innerHTML = "";
            window.localStorage.idx = +(window.localStorage.idx) + 1;
            idx++;
            fillOut(idx);
            correctSound.play();
            displayNumber();
        } else {
            wrongSound.play();
        };
    } else {
        if (upCon.innerText === sentences[idx].split(" ").join("")) {
            resetBtn.click();
            correctSound.play();
            displayNumber();
        } else {
            wrongSound.play();
        };
    };
};



resetBtn.onclick = function() {
    bellowCon.innerHTML = "";
    upCon.innerHTML = "";
    window.localStorage.idx = 0;
    idx=0;
    fillOut(idx);
    displayNumber();
};