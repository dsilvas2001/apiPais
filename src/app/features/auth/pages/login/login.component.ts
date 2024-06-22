import { Component, OnInit } from '@angular/core';
import { Usermanage } from '../../interfaces/loginModel.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  authForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.authForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {}

  authStorage() {
    const usermanage: Usermanage = {
      usuario: this.authForm.value['username'],
      password: this.authForm.value['password'],
    };
    console.log('ingresa');
    const ok = this.authService.signIn(usermanage.usuario, usermanage.password);
    if (!ok) {
      this.authForm.get('password')?.setErrors({ incorrectPassword: true });
    }
  }
}
