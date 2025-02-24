import { Component, Directive } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'

})
export class LoginComponent {
  constructor(private router: Router) { }
  username: any;
  userPassword: any;
  validate: boolean = false;

  onSubmit() {
    if (this.username && this.userPassword) {
      this.router.navigate(['/todoItems']);
      this.username = this.userPassword = ''; 
    } else {
      this.validate = true
    }
  }
}
