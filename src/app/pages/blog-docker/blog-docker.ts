import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideMenu } from '../../components/layout/aside-menu/aside-menu';

@Component({
  selector: 'app-blog-docker',
  standalone: true, 
  imports: [CommonModule, AsideMenu],
  templateUrl: './blog-docker.html'
})
export class BlogDocker {

}
