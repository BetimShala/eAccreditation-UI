import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-layout',
  template: `<body class="app sidebar-mini rtl pace-done" [ngClass]="{'sidenav-toggled': isToggle}">

    <router-outlet></router-outlet>
    <main class="app-content">
    <router-outlet></router-outlet>
  </main>
</body>
  `,
  styles: []
})
export class LoginLayoutComponent {}