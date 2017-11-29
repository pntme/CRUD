import { AjaxService } from './ajax.service';
import { Component, OnInit } from '@angular/core';
import { TestForm } from './test-form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AjaxService]
})
export class AppComponent implements OnInit {
  title = 'app';
  // model = new TestForm('f_name', 'l_name', 'email');
  model: any;
  users: any;
  submitted = false;
  editing = false;
  constructor(public _ajax: AjaxService) { }

  ngOnInit() {
   this.model = new TestForm('', '', '');
    this._ajax.Get('http://localhost:3000/users').then(res => {
      this.users = res;
    });
  }

  onSubmit() {
    console.log(this.model);
    this._ajax.Post('http://localhost:3000/users', this.model).then(res => {
      this.ngOnInit();
    });
  }

  remove(data) {
    this._ajax.Delete('http://localhost:3000/users/' + data._id).then(res => {
      console.log(res);
      this.ngOnInit();
    });
  }

  edit(data) {
    this.editing = true;
    this.model = data;
  }

  update() {
    this.editing = false;
    console.log(this.model);
    this._ajax.Put('http://localhost:3000/users', this.model).then(res => {
      console.log(res);
      this.ngOnInit();
    });
  }
}
