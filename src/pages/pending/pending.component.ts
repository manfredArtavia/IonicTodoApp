import { List } from './../../models/list.model';
import { TodoService } from './../../services/todo.service';
import { Component } from '@angular/core';
@Component({
    selector: 'page-pending',
    templateUrl: './pending.component.html'
})
export class PendingPage {
    constructor(public todoService: TodoService) {}

    selectedList(list: List) {
        console.log('list: ', list);

    }
};