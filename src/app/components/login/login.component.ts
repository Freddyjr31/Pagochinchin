import {Component} from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl,Validators, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatIconModule, ReactiveFormsModule,NgIf, NgFor,MatProgressSpinnerModule],
})

export class LoginComponent {

  constructor(private router: Router) { }
  public loading:boolean = false;
  public loaded:boolean = true;
  public access:boolean = false;
  public usuario:any = "";
  public password:any = "";
  public usuario_registrado:any = "";
  public password_registrado:any = "";

  public loginForm = new FormGroup({
    usuario: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    localStorage.setItem("username","pagochinchin");
    localStorage.setItem("password","pagochinchin123");
  }

  onSubmit(){

    this.usuario = this.loginForm.value.usuario;
    this.password = this.loginForm.value.password;
    this.usuario_registrado = localStorage.getItem("username");
    this.password_registrado = localStorage.getItem("password");

    console.log(this.usuario, this.usuario_registrado)
    console.log(this.password, this.password_registrado)
  
      if(this.usuario == this.usuario_registrado && this.password == this.password_registrado){
  
        this.loaded = true
        this.loading = true
        setTimeout(() => {
          this.access = true
          this.loading = false
          this.loaded = false
        },2500)
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 4000);

      }else{
        this.loading = true
        this.loaded = true
        setTimeout(() => {
          this.loading = false
          this.loaded = false
        },2500)
        this.access = false
      }
    
  }

}
