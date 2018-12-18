import { ListsComponent } from '../components/lists/lists.component';
import { FilterDonePipe } from './../pipes/filter-done/filter-done';
import { AddPage } from '../pages/add/add.component';
import { TodoService } from '../services/todo.service';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { TabsPage } from '../pages/tabs/tabs';
import { PendingPage } from '../pages/pending/pending.component';
import { DonePage } from '../pages/done/done.component';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PendingPage,
    DonePage,
    AddPage,
    FilterDonePipe,
    ListsComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PendingPage,
    DonePage,
    AddPage,
    ListsComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TodoService
  ]
})
export class AppModule {}
