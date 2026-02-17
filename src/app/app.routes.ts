import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Privacy } from './pages/privacy/privacy';
import { Blog } from './pages/blog/blog';
import { BlogDocker } from './pages/blog-docker/blog-docker';
import { Notfound } from './pages/notfound/notfound';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'privacy', component: Privacy },
    { path: 'use_hyperv_in_environment', component: Blog },
    { path: 'docker_development', component: BlogDocker },
    { path: '**', component: Notfound }
];
