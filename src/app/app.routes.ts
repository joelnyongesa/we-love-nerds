import { Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';

export const routes: Routes = [
    {
        path: 'demo',
        loadComponent: () => import("./demo/demo.component").then(c => c.DemoComponent)
    },
    {
        path: 'home',
        component: DemoComponent
    },
    {
        path: '',
        redirectTo: "home",
        pathMatch: "full"
    }
];
