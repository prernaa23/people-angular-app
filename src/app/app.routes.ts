import { Routes } from '@angular/router';
import { IndexComponent } from './people/index/index.component';
import { EditComponent } from './people/edit/edit.component';
import { CreateComponent } from './people/create/create.component.spec';

export const routes: Routes = [
  {path:'',redirectTo:"people", pathMatch:"full"},
  { path: 'people', component: IndexComponent },
  { path: 'people/:peopleId/edit', component: EditComponent },
  { path: 'people/create', component: CreateComponent },
];