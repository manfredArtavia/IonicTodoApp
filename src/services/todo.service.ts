import { List } from './../models/list.model';
import { Injectable } from "../../node_modules/@angular/core";

@Injectable()
export class TodoService {
    lists: List[] = []
    constructor() {
        const gems = new List('Collect the gems');
        const heroesToBeat = new List('Heroes to destroy!');
        this.lists.push(gems, heroesToBeat);
        console.log('this.lists: ', this.lists);
    }
}