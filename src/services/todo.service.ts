import { List } from './../models/list.model';
import { Injectable } from "@angular/core";

@Injectable()
export class TodoService {
    lists: List[] = []
    constructor() {
        // const gems = new List('Collect the gems');
        // const heroesToBeat = new List('Heroes to destroy!');
        // this.lists.push(gems, heroesToBeat);
        this.loadStorage();
    }

    addList(list: List) {
        this.lists.push(list);
        this.saveStorage();
    }

    saveStorage() {
        localStorage.setItem('data', JSON.stringify(this.lists));
    }

    loadStorage() {
        this.lists = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [];
    }
}