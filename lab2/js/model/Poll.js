import PollView from "../view/PollView.js";

export default class poll{
    constructor(){
        this.question = "";
        this.answerList = [];
        this.title = "";
        this.description = "";
    }

    addAnswer(answer){
        this.answerList.push(answer);
    }

    createPoll(){
        let newPoll = new poll();
        newPoll.title = document.getElementById("title").value;
        newPoll.description = document.getElementById("description").value;
        newPoll.question = document.getElementById("question_text").value;
        newPoll.addAnswer(document.getElementById("answer_variant1").value);
        newPoll.addAnswer(document.getElementById("answer_variant2").value);
        newPoll.addAnswer(document.getElementById("answer_variant3").value);
        newPoll.addAnswer(document.getElementById("answer_variant4").value);
        return newPoll;
    }

}