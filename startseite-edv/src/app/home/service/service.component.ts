import { Component, Input, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { CollapsibleCardComponent } from "../../components/collapsible-card/collapsible-card.component";

@Component({
  selector: 'app-service',
  imports: [MatCardModule, MatButtonModule, MatIcon, CollapsibleCardComponent],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent {
  expanded = false;
}
