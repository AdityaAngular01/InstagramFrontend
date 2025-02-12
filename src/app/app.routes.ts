import { Routes } from '@angular/router';
import { loginGuard } from './service/guards/login/login.guard';
import { authGuard } from './service/guards/auth/auth.guard';
import { LayoutComponent } from './user/layout/layout.component';
import { ProfileComponent } from './user/layout/profile/profile.component';
import { LoginComponent } from './user/auth/login/login.component';
import { SignUpComponent } from './user/auth/sign-up/sign-up.component';
import { MessagesComponent } from './user/layout/messages/messages.component';
import { CreateComponent } from './user/layout/create/create.component';
import { SearchComponent } from './user/layout/search/search.component';
import {NotificationComponent} from './user/layout/notification/notification.component'
import {HomeComponent} from './user/layout/home/home.component'
export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'auth'
    },
    {
        path: 'auth',
        canActivate: [loginGuard],
        children:[
            {
                path:'login',
                component: LoginComponent
            },
            {
                path: 'register',
                component: SignUpComponent
            },
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            }
        ]
    },
    {
        path:'',
        component: LayoutComponent,
        canActivate: [authGuard],
        children:[
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'search',
                component: SearchComponent
            },
            {
                path: 'messages',
                component: MessagesComponent
            },
            {
                path: 'notification',
                component: NotificationComponent
            },
            {
                path: 'create',
                component: CreateComponent
            },
            {
                path: 'profile',
                component: ProfileComponent
            },
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            }
        ]
    }
];
