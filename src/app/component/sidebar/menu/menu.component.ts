import { Component, OnInit, ViewChild } from '@angular/core';

// export interface MenuItem {
//   title: string;
//   links: { title: string, link: string }[]
// }


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  isHidenUsers: boolean = false;
  isHidenProducts: boolean = false;
  isHidenDeals: boolean = false;

@ViewChild('headerToggle') headerToggle: any;

  showMenu = '';
  showSubMenu = '';
  myRole = 1;

  showUsers() {
    this.isHidenUsers = !this.isHidenUsers;
    this.isHidenProducts = false;
    this.isHidenDeals = false;
  }
  showProduct() {
    this.isHidenProducts = !this.isHidenProducts;
    this.isHidenDeals = false;
    this.isHidenUsers = false;
  }
  showDeals() {
    this.isHidenDeals = !this.isHidenDeals;
    this.isHidenUsers = false;
    this.isHidenProducts = false;
  }
  public sidebarnavItems: any[];
  public childrenItems: any[];

  constructor() { }

  toggle(){
    this.headerToggle;
    console.log(this.headerToggle);
  }

  ngOnInit() { }
}
