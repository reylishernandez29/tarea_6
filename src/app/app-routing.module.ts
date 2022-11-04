import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'navaja',
    loadChildren: () => import('./navaja/navaja.module').then( m => m.NavajaPageModule)
  },
  {
    path: 'genero',
    loadChildren: () => import('./genero/genero.module').then( m => m.GeneroPageModule)
  },
  {
    path: 'acercade',
    loadChildren: () => import('./acercade/acercade.module').then( m => m.AcercadePageModule)
  },
  {
    path: 'edad',
    loadChildren: () => import('./edad/edad.module').then( m => m.EdadPageModule)
  },
  {
    path: 'universidades',
    loadChildren: () => import('./universidades/universidades.module').then( m => m.UniversidadesPageModule)
  },
  {
    path: 'clima',
    loadChildren: () => import('./clima/clima.module').then( m => m.ClimaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
