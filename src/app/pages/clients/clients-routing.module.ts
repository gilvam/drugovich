import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./list/client-list.module').then((m) => m.ClientListModule),
  },
  {
    path: 'new',
    loadChildren: () =>
      import('./new/client-new.module').then((m) => m.ClientNewModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsRoutingModule {}
