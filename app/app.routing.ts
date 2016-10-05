import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormPerson } from './components/formPerson/formPerson.component';
import { User } from './components/user/user.component';

const appRoutes: Routes = [
    {
        path: '',
        component: FormPerson
    },{
        path: 'userDetail/:id',
        component: User
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
