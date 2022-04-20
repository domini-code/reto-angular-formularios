import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactReactiveComponent } from "./contact-reactive/contact-reactive.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
    { path: '', redirectTo:'/home', pathMatch: 'full'},
    { path: 'contact-reactive', component: ContactReactiveComponent },
    { path: 'contact-template', component: ContactComponent },
    { path: 'home', component: HomeComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}