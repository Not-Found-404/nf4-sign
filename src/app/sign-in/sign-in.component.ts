import {Component, OnInit} from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import {UserService} from '../services/user.service';
import {Result} from '../services/result';
import {User} from '../services/user';

@Component({
  selector: 'app-sign-in-layout',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  validateForm: FormGroup;
  user: User;
  isonLoading = false;
  private prefix = '';

  createMessage(type: string): void {
    if (type === 'success') {
      this.message.create(type, `登录成功！正在进入您的用户中心...`);
    } else {
      this.message.create(type, `用户名或密码有误，请重新输入`);
    }
  }

  // “登录”按钮提交
  submitForm(): void {
    // 循环表单的所有常规验证
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  constructor(private fb: FormBuilder, private userService: UserService, private message: NzMessageService) {
  }

  // 执行登录操作，判断是否成功
  signIn(phoneNum: String, password: String): void {
    console.log('signIn isonLoading: ' + this.isonLoading);
    this.isonLoading = true;
    this.userService.login({
      phoneNum: phoneNum,
      password: password
    }).subscribe((data: Result) => {
      this.isonLoading = false;
      if (data.code === 500) {
        this.createMessage('error');
      } else if (data.code === 200) {
        this.createMessage('success');
        window.open(this.prefix + 'usercenter.html', '_self');
      }
    });
  }

  ngOnInit(): void {
    console.log('ngOnInit isonLoading: ' + this.isonLoading);
    this.isonLoading = false;
    this.validateForm = this.fb.group({
      phoneNum: [null, [Validators.required]], // 非空输入
      password: [null, [Validators.required]], // 非空输入
      remember: [true]// 是否记住
    });
  }

  toRegisterPage() {
    window.open(this.prefix + 'register.html', '_self');
  }
}
