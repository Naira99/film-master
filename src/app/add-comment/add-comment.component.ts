import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormControlName } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { Service } from 'src/app/service/service';
import { Comment } from 'src/app/model/Comment';
import { Photo } from 'src/app/model/Phote';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})

export class AddCommentComponent implements OnInit {

  form: FormGroup;
  /*reactive form*/

  userDetals = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(10)]],
    email: ['', Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
    ])],
    message: ['', [Validators.required]]
  });

  /*post method*/

  id: number;
  comment: Comment[];
  image: Photo[];
  temp: Comment[];
  today = new Date();
  addcomment: boolean = false;
  constructor(private http: HttpClient, private service: Service, private fb: FormBuilder) { }


  getComment() {
    this.service.getComment().subscribe(com => {
      this.comment = com;
    });
  }
  getPhoto() {
    this.service.getPhoto().subscribe(photo => {
      this.image = photo;
    });
  }

  addComment() {
    const comment: Comment = {
      id: new Date().getTime(),
      name: this.userDetals.controls.name.value,
      email: '',
      body: this.userDetals.controls.message.value
    }
    this.comment.push(comment);
    this.service.addCom(this.userDetals.controls.message.value,
      this.userDetals.controls.name.value).subscribe((message) => {
        this.addcomment = true;
      });
  }
  // delete() {
  //   this.service.deleteCom(this.id).subscribe((id) => { console.log(`delete ${id}`); }, err => { console.log(err); })
  // }

  ngOnInit() {
    this.getPhoto();
    this.getComment();
  }
}
