import PollList from "../model/PollList.js";
import PollView from "../view/PollView.js";

export default class pollListView{
    constructor(pollList){
        this.pollList = pollList;
        this.pollView = new PollView();
    }

    showTest(mainBlock){
        mainBlock.innerHTML = " ";
        this.pollList.pollList.forEach((element, index) => {
            mainBlock.innerHTML += this.pollView.renderPoll(element, index);
        });

        mainBlock.innerHTML += '<div class="col-12 mt-5">\
        <button id="passPollButton" type="button" class="btn btn-primary">Пройти опитування</button>\
        </div>';
        
        this.passPollButton = document.getElementById("passPollButton");
        this.passPollButton.addEventListener("click", () => {
            mainBlock.innerHTML = "Відповіді збережено";
        });
    }
}
