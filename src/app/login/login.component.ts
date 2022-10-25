import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formSignIn: any = {
    email: 'admin@newhorizons.edu.pe',
    password: '123456',
  };

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}
  handleSignIn() {
    const userToLogin = this.formSignIn;
    this.authService.signIn(userToLogin).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        if (error.status === 400)
          this.snackBar.open('Usuario y/o contraseña incorrecto.', 'OK');
      },
    });
  }
  ngOnInit(): void {
    this.handleSignIn();
  }
}
