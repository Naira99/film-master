import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-registr',
  templateUrl: './registr.component.html',
  styleUrls: ['./registr.component.css']
})
export class RegistrComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  loading = false;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
      ])],
      password: ['', Validators.required]
    });
  }
  get f() { return this.registerForm.controls; }

  registFunc() {
    this.submitted = true;
    if (this.registerForm.invalid) { return; }
    this.loading = true;
    console.log(this.f.firstname.value);

    this.loginService.Registration(this.f.email.value, this.f.password.value).subscribe((data) => {
      console.log(data);

      if (data['id'] != undefined) {
        localStorage.setItem('id', data['id']);
        this.router.navigate(['/login']);
      }
    },
      (error) => {
        this.loading = false;
      }
    );

  }

}
