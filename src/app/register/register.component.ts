import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RegisterValidationsMessages } from '../core/helpers/messages/validations/register.validations.messages';
import { UserModel } from '../core/models/user.model';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.registerForm = this.formBuilder.group({
      firstName: new FormControl('', Validators.compose([Validators.required])),
      lastName: new FormControl('', Validators.compose([Validators.required])),
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ])
      ),
      password: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.minLength(6)])
      ),
    });
  }
  handleSignUp(userToRegister: UserModel) {
    this.authService.signUp(userToRegister).subscribe({
      next: (response) => {
        this.snackBar.open('😁 El usuario se registró correctamente.', 'OK');
      },
      error: (error) => {
        if (error.status === 400)
          this.snackBar.open('El usuario ya existe.', 'OK');
      },
    });
  }
  ngOnInit(): void {}
}
