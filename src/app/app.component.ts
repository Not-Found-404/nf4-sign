import { Component, OnInit, TemplateRef, Input, AfterViewInit, AfterContentInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  @Input() template: any;

  /* 初始化函数 */
  ngOnInit() {
    // 触发显示通知框按钮的点击事件
    document.getElementById('videoTriggerBtn').click();
  }

  /* 构造函数 */
  constructor(
    // 导入通知信息服务
    private notification: NzNotificationService
  ) {
  }

  /* 通知显示函数 */
  createBasicNotification(template: TemplateRef<{}>): void {
    this.notification.template(template);
  }

  /* 跳转观看视频函数 */
  jumpToVideo(): void {
    /* 跳转到优酷视频播放界面 */
    window.open('http://v.youku.com/v_show/id_XMzkzODUyOTI3Mg==.html', '_blank');
    // 移除通知框
    this.notification.remove();
  }
}
