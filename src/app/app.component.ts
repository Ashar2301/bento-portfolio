import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterOutlet } from '@angular/router';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { LeetcodeStatsComponent } from './leetcode-stats/leetcode-stats.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatCardModule,
    SlideToggleComponent,
    LeetcodeStatsComponent,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [MatIconRegistry],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  readonly matIconRegistry: MatIconRegistry = inject(MatIconRegistry);

  title = 'bento-portfolio';
}
