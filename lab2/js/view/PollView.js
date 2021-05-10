import Poll from '../model/Poll.js';

export default class PollView{
    constructor(){

    }

    createPoll(){

    }

    renderPoll(poll, number){
        console.log("poll");
        return '<div class="col-11">\
            <span id="pass_title">' +
                poll.question + 
           ' </span> \
            <div class="form-check"> \
                <input class="form-check-input" checked type="radio" name="'+number+'" id="radio' + number + '.1" value="A"> \
                <label id="label_answer_variant4" class="form-check-label" for="radio' + number + '.1"> ' +
                    poll.answerList[0] +
              ' </label> \
            </div>\
            <div class="form-check">\
                <input class="form-check-input" type="radio" name="'+number+'" id="radio' + number + '.2" value="B">\
                <label id="label_answer_variant4" class="form-check-label" for="radio' + number + '.2">' +
                    poll.answerList[1] + 
                '</label>\
            </div>\
            <div class="form-check">\
                <input class="form-check-input" type="radio" name="'+number+'" id="radio' + number + '.3" value="C">\
                <label id="label_answer_variant3" class="form-check-label" for="radio' + number + '.3">' +
                    poll.answerList[2] + 
               '</label>\
            </div>\
            <div class="form-check"> \
                <input class="form-check-input" type="radio" name="'+number+'" id="radio' + number + '.4" value="D"> \
                <label id="label_answer_variant4" class="form-check-label" for="radio' + number + '.4">' +
                    poll.answerList[3] + 
               '</label>\
            </div>\
        </div>';
    }
}