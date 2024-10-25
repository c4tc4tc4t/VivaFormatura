import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OptionsComponent } from './options/options.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { CardsComponent } from './cards/cards.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Rota padrão para a tela inicial
  { path: 'options', component: OptionsComponent }, // Rota para o componente de opções
  { path: 'cards', component: CardsComponent },
  { path: 'galeria/:collection', component: GaleriaComponent },
  { path: '**', redirectTo: '' } // Redireciona rotas inválidas para a tela inicial
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
