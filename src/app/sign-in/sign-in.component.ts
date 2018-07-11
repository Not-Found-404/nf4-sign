import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  selector: 'sign-in-layout',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  validateForm: FormGroup;
  user:User;

  //“登录”按钮提交
  submitForm(): void {
    //循环表单的所有常规验证
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
    console.log();
    
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      phoneNum: [ null, [ Validators.required ] ],//非空输入
      password: [ null, [ Validators.required ] ],//非空输入
      remember: [ true ]//是否记住
    });
  }

}
