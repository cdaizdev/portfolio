import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideMenu } from '../../components/layout/aside-menu/aside-menu';

@Component({
  selector: 'app-blog',
  standalone: true, 
  imports: [CommonModule, AsideMenu],
  templateUrl: './blog.html'
})
export class Blog {

}
