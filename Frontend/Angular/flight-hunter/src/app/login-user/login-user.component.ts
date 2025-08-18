import { Component} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserLoginService } from '../services/user-login.service';
import { LoginUser } from '../models/loginUser.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-user.component.html',
  styleUrl: './login-user.component.css'
})
export class LoginUserComponent {
  
  loginForm: FormGroup;

  constructor(private readonly fb: FormBuilder, private readonly userLoginService: UserLoginService, private readonly router: Router){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(){
    if(this.loginForm.valid){
      const formData = this.loginForm.value;
      const loginUserData: LoginUser = {
        email: formData.email,
        password: formData.password
      }
      this.userLoginService.loginUser(loginUserData).subscribe({
        next: (response)=>{
          console.log('Login successful: ', response);
          this.router.navigate(["search-flights"]);
        },
        error: (response)=>{
          console.log('error: ',response)
        }
      })
    }
  }
}
