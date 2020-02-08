import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  constructor(private notifyService: NotificationService) { }

  ngOnInit() {
  }

  showToaster() {
    this.notifyService.showSuccess("Data shown successfully !!", "Notification");
  }

  showHtmlToaster() {
    this.notifyService.showHTMLMessage("<h2>Data shown successfully !! </h2>", "Notification");
  }

  showSuccessWithTimeout(message, title, timespan) {
    this.notifyService.showSuccessWithTimeout("Data shown successfully !!", "Notification", 10000);
  }

}
