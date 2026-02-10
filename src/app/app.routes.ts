import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Privacy } from './privacy/privacy';
import { Blog } from './blog/blog';
import { Notfound } from './notfound/notfound';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'privacy', component: Privacy },
    { path: 'blog/use_hyperv_in_environment', component: Blog },
    { path: '**', component: Notfound }
];
