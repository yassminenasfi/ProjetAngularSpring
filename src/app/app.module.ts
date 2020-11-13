import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProduitsComponent } from './list-produits/list-produits.component';
import { EnregistrerproduitComponent } from './enregistrerproduit/enregistrerproduit.component';
import { FormsModule} from '@angular/forms';
import { ModifierProduitComponent } from './modifier-produit/modifier-produit.component';
import { AccueilComponent } from './accueil/accueil.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    ListProduitsComponent,
    EnregistrerproduitComponent,
    ModifierProduitComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
