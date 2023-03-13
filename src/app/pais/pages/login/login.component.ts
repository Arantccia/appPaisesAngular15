import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  miFormulario: FormGroup = this.fb.group({
    username:['test user 2', [Validators.required, Validators.maxLength(13)]],
    password:['12345678', [Validators.required, Validators.minLength(6)]]
  });

  constructor(private fb: FormBuilder,
              private router: Router,
              private authService:AuthService){}

  login(){
    //console.log(this.miFormulario.value)
    const {username, password} = this.miFormulario.value
    this.authService.login(username, password)
    .subscribe(resp => {
      if(resp === true){
        this.router.navigateByUrl('/region')
      }else{
        this.router.navigateByUrl('/login')
      }
    })

    
  }              
  
}
