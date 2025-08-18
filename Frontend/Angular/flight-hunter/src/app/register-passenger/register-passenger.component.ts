import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserRegisterService } from '../services/user-register.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-passenger',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register-passenger.component.html',
  styleUrl: './register-passenger.component.css',
})
export class RegisterPassengerComponent {
  registerForm: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly userRegisterService: UserRegisterService,
    private readonly router: Router
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;
      console.log('User Data:', formData);
      const user: User = { 
        name: formData.name,
        email: formData.email,
        password: formData.password
      };
      this.userRegisterService.registerUser(user).subscribe({
        next: (response)=>{
          console.log('Registration Successfull')
          this.router.navigate(['login-user: '])
        },
        error: (response)=>{
          console.log('Error: ',response)
        }
      });
    }
  }
}
