import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form: FormGroup;
  constructor( private fb: FormBuilder) { }


  contactDetals = this.fb.group({
    firstname: ['', [Validators.required, Validators.maxLength(10)]],
    lastname: ['', [Validators.required, Validators.maxLength(10)]],
    email: ['', Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
    ])],
    phone: ['', [Validators.required]],
    message: ['', [Validators.required]]
  });
  ngOnInit() {

  }

}
