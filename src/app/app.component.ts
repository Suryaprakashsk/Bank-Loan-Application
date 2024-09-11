import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoanapplicationComponent } from './pages/loanapplication/loanapplication.component';
import { ApplicationlistComponent } from './pages/applicationlist/applicationlist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoanapplicationComponent,ApplicationlistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'loanapp';
}
