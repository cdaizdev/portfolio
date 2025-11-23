import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Privacy } from './privacy/privacy';
import { Manager } from './manager/manager';
import { Notfound } from './notfound/notfound';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'privacy', component: Privacy },
    { path: 'app', component: Manager },
    { path: '**', component: Notfound }
];
