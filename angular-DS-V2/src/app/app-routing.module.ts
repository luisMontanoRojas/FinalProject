import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandListComponent } from './../app/components/brand/brand-list/brand-list.component'
import { AboutComponent } from './components/pages/about/about.component'
import { ModelListComponent } from './components/carmodel/model-list/model-list.component'
import { BrandEditComponent } from './components/brand/brand-edit/brand-edit.component';
import { ModelEditComponent } from './components/carmodel/model-edit/model-edit.component';
import { ModelSalesComponent } from './components/carmodel/model-sales/model-sales.component';

const routes: Routes = [
  { path: '', component: BrandListComponent },
  { path: 'about', component: AboutComponent },
  { path: 'carbrand/:brandId/carmodels', component: ModelListComponent },
  { path: 'carbrand/:brandId', component: BrandEditComponent },
  { path: 'carbrand/:brandId/carmodels/:modelId', component: ModelEditComponent },
  { path: 'carmodels', component: ModelSalesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
