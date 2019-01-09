import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Sidebar } from '../models/sidebar.model';
import { HttpClient } from '@angular/common/http';
import { TreeviewItem } from 'ngx-treeview';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {


  constructor(private http: HttpClient, private router: Router) { }

  getBooks(): TreeviewItem[] {
    const childrenCategory = new TreeviewItem({
        text: 'Children', value: 1, collapsed: true, children: [
            { text: 'Baby 3-5', value: 11 },
            { text: 'Baby 6-8', value: 12 },
            { text: 'Baby 9-12', value: 13 }
        ]
    });
    const itCategory = new TreeviewItem({
        text: 'IT', value: 9, children: [
            {
                text: 'Programming', value: 91, children: [{
                    text: 'Frontend', value: 911, children: [
                        { text: 'Angular 1', value: 9111 },
                        { text: 'Angular 2', value: 9112 },
                        { text: 'ReactJS', value: 9113, disabled: true }
                    ]
                }, {
                    text: 'Backend', value: 912, children: [
                        { text: 'C#', value: 9121 },
                        { text: 'Java', value: 9122 },
                        { text: 'Python', value: 9123, checked: false, disabled: true }
                    ]
                }]
            },
            {
                text: 'Networking', value: 92, children: [
                    { text: 'Internet', value: 921 },
                    { text: 'Security', value: 922 }
                ]
            }
        ]
    });
    return [childrenCategory, itCategory];
  }
}
