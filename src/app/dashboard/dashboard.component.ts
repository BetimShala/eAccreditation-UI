import { Component, OnInit } from "@angular/core";
import { CommonService } from "../services/common.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  isToggle: boolean = false;

  constructor(private commonService: CommonService) {
    this.commonService.invokeToggleEvenet.subscribe(value => {
      this.toggle();
    });
  }

  toggle() {
    this.isToggle = !this.isToggle;
  }

  isUserLoggedIn() {
    return localStorage.getItem("user_token") ? true : true //true=>false;
  }

  ngOnInit() {}
}
