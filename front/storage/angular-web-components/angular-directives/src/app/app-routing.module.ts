import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgclassAttributeComponent } from './ngclass-attribute/ngclass-attribute.component';
import { NgstyleAttributeComponent } from './ngstyle-attribute/ngstyle-attribute.component';
import { NgmodelAttributeComponent } from './ngmodel-attribute/ngmodel-attribute.component';
import { IfDirectiveComponent } from './if-directive/if-directive.component';

const routes: Routes = [
	{ path: 'if-directive', component: IfDirectiveComponent },
  { path: 'ngclass-directive', component: NgclassAttributeComponent },
	{ path: 'ngstyle-directive', component: NgstyleAttributeComponent },
	{ path: 'ngmodel-directive', component: NgmodelAttributeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }