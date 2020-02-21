import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mes:boolean = false;
  loginForm: FormGroup;
  submitted = false;
  loading = false;
  returnUrl: string;


  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) { return; }
    this.loading = true;
    console.log(this.f.username.value);

    this.loginService.login(this.f.username.value, this.f.password.value)
      .subscribe((data) => {

        console.log(data);

        if (data['token'] != undefined) {
          localStorage.setItem('token', data['token']);
          this.router.navigate(['/home']);
        } else {
          this.mes = !this.mes;
        }
      },
        (error) => {
          this.loading = false;
        }
      );
  }


}
