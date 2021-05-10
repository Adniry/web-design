import poll from "./Poll.js";

export default class pollList{
    constructor(){
        this.pollList = [];
    }

    addPoll(poll){
        console.log(poll);
        this.pollList.push({...poll});
        console.log(this.pollList);
    }
}