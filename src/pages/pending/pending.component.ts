import { List } from './../../models/list.model';
import { AddPage } from '../add/add.component';
import { TodoService } from '../../services/todo.service';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
    selector: 'page-pending',
    templateUrl: './pending.component.html'
})
export class PendingPage {
    constructor(
        public todoService: TodoService,
        public navController: NavController,
        private alertController: AlertController) {}

    selectedList(list: List) {
        this.navController.push(AddPage, {
            title: list.title,
            list
        })
    }

    addPending() {
        // this.navController.push(AddPage);
        const prompt = this.alertController.create({
            title: 'New list',
            message: 'New list name',
            inputs: [{
                name: 'title',
                placeholder: 'Name of your list'
            }],
            buttons: [
                {
                    text: 'Cancel'
                }, {
                    text: 'Add',
                handler: ({title}) => {
                    // Nav controller allow navigation by "push", also next argument is the "data" in terms of redirected component, to send arguments
                    this.navController.push(AddPage, {title});
                }
            }]
        });
        prompt.present();
    }
};