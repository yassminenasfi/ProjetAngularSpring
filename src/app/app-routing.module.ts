import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnregistrerproduitComponent } from './enregistrerproduit/enregistrerproduit.component';
import { ListProduitsComponent } from './list-produits/list-produits.component';
import { ModifierProduitComponent } from './modifier-produit/modifier-produit.component';


const routes: Routes = [
  {path: 'Listdesproduits', component: ListProduitsComponent},
  {path: 'enregistrerproduit', component: EnregistrerproduitComponent}, 
  {path: '', redirectTo: 'Listdesproduits', pathMatch: 'full'},
  {path: 'modifierproduit/:id', component: ModifierProduitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
