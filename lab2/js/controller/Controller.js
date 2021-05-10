import Poll from '../model/Poll.js';

import PollList from '../model/PollList.js';
import PollListView from '../view/PollListView.js';
import PollView from '../view/PollView.js';

export default class Controller{
    constructor(){
        this.poll = new Poll();
        this.pollList = new PollList();
        this.pollView = new PollView();
        this.pollListView = new PollListView(this.pollList);
        this.createPollButton = document.getElementById("createPollButton");
        this.createPollButton.addEventListener("click", this.createPoll.bind(this));
        this.testButton = document.getElementById("test");
        this.testButton.addEventListener("click", this.test.bind(this));
        this.mainBlock = document.getElementById("main-block");
    }

    test(){
        this.pollListView.showTest(this.mainBlock);
    }

    create(){
        this.pollView.createPoll();
    }

    createPoll(){
        let newPoll = this.poll.createPoll();
        this.pollList.addPoll(newPoll);
    }

    passPoll(){
        this.mainBlock.innerHTML = "saved";
    }
}