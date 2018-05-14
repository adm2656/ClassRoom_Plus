import history from "../helpers/history";

let recognize;
let recognizing = false;
let ltrans = "";
let trans = "";
let isSupport = false;

if (window.webkitSpeechRecognition) {
    isSupport = true;

    recognize = new window.webkitSpeechRecognition();

    recognize.continuous = true;
    recognize.interimResults = true;
    recognize.lang = "cmn-Hant-TW";
    /*
    **english:en-US
    **chinese:cmn-Hant-TW
    */

    recognize.onstart = function () {
        console.log("start");
        recognizing = true;
    };

    recognize.onend = function () {
        console.log("stop");
        recognizing = false;
    };

    recognize.onresult = function (event) {
        //console.log(event);

        for (let i = event.resultIndex; i < event.results.length; i++) {
            if (event.results[i].isFinal) {
                ltrans = event.results[i][0].transcript;
            }
            else {
                trans += event.results[i][0].transcript;
            }
        }


        if (trans.trim().length > 0) {
            console.log("trans: " + trans);
        }
        if (ltrans.trim().length > 0) {
            console.log("ltrans: " + ltrans);

            /*----------------temp-----------*/
            if (ltrans === "行事曆") {
                history.push("/calendar");
            }
            else if (ltrans === "課程") {
                history.push("/index");
            }
        }

    };
}

function speechAction() {
    if (isSupport) {
        if (!recognizing) {
            recognize.start();

        }
        else {
            recognize.stop();
        }
    }
}

export { speechAction };