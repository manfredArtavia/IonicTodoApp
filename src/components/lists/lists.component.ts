import { List } from './../../models/list.model';
import { AddPage } from './../../pages/add/add.component';
import { NavController } from 'ionic-angular';
import { Component, Input } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
    selector: 'app-lists',
    templateUrl: './lists.component.html'
})
export class ListsComponent {
    @Input() done: boolean  = true;
    constructor(public todoService: TodoService, public navController: NavController) {}

    selectedList(list: List) {
        this.navController.push(AddPage, { title: list.title, list });
    }

    deleteList(id: number) {
        this.todoService.deleteList(id);
    }
}

