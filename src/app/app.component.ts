import { Component } from '@angular/core'; //, OnInit
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Employees Management System';

  constructor(private router: Router) {}

}
