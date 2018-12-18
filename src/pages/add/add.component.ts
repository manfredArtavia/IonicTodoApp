import { List, ListItem } from '../../models';
import { TodoService } from '../../services/todo.service';
import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
 
@Component({
    selector: 'page-add',
    templateUrl: './add.component.html',
})
export class AddPage {
    list: List;
    itemName: string = '';
    constructor(
        public todoService: TodoService,
        private navParams: NavParams) {
        if (this.navParams.get('list')) {
            this.list = this.navParams.get('list');
        } else {
            const title = this.navParams.get('title');
            this.list = new List(title);
            this.todoService.addList(this.list);
        }
    }

    addItem() {
        if (!this.itemName) {
            return;
        }
        const newItem = new ListItem(this.itemName);
        this.itemName = '';
        this.list.items.push(newItem);
        this.todoService.saveStorage();
    }

    toggleCheck(item: ListItem) {
        item.done = !item.done;
        const pending = this.list.items.filter(item => !item.done).length;
        if (!pending) {
            this.list.done = true;
            this.list.doneAt = new Date();
        } else {
            this.list.done = false;
            this.list.doneAt = null;
        }
        this.todoService.saveStorage();
    }

    deleteItem(index: number) {
        this.list.items = this.list.items.filter((a, idx) => idx !== index);
        this.todoService.saveStorage();
    }

};