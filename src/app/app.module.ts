import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes} from "@angular/router";
import { AppComponent } from './app.component';
import { RouteComponent } from './components/header/route/route.component';
import { HeaderComponent } from './components/header/header.component';
import { PopoverComponent } from './components/header/route/popover/popover.component';
import { AboutComponent } from './components/header/route/popover/about/about.component';
import { ContactComponent } from './components/header/route/popover/contact/contact.component';

import { BodyComponent } from './components/body/body.component';
import { DiscountViewComponent } from './components/body/discount-view/discount-view.component';
import { PopularViewComponent } from './components/body/popular-view/popular-view.component';
import { CategoryViewComponent } from './components/body/category-view/category-view.component';

import { FooterComponent } from './components/footer/footer.component';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    RouteComponent,
    PopoverComponent,
    AboutComponent,
    ContactComponent,
    DiscountViewComponent,
    PopularViewComponent,
    CategoryViewComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
