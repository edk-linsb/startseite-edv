import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';


@Component({
  selector: 'app-collapsible-card',
  imports: [MatCardModule, MatButtonModule, MatIcon],
  templateUrl: './collapsible-card.component.html',
  styleUrl: './collapsible-card.component.scss'
})
export class CollapsibleCardComponent {
  expanded = false;
  title = input.required<string>();
}
