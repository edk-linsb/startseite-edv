import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { KnowledgeDbComponent } from "./knowledge-db/knowledge-db.component";
import { MaintenanceCalendarComponent } from "./maintenance-calendar/maintenance-calendar.component";
import { ServiceComponent } from './service/service.component';

@Component({
  selector: 'app-home',
  imports: [MatCardModule, MatButtonModule, MatGridListModule, KnowledgeDbComponent, MaintenanceCalendarComponent, ServiceComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
