import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes} from "@angular/router";
import { AppComponent } from './app.component';
import { RouteComponent } from './components/head/route/route.component';
import { HeadComponent } from './components/head/head.component';
import { PopoverComponent } from './components/head/route/popover/popover.component';
import { AboutComponent } from './components/head/route/popover/about/about.component';
import { ContactComponent } from './components/head/route/popover/contact/contact.component';

import { BodyComponent } from './components/body/body.component';
import { DiscountViewComponent } from './components/body/discount-view/discount-view.component';
import { PopularViewComponent } from './components/body/popular-view/popular-view.component';
import { CategoryViewComponent } from './components/body/category-view/category-view.component';

import { FootComponent } from './components/foot/foot.component';
import { ScrollableContainerComponent } from './components/body/scrollable-container/scrollable-container.component';

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
    HeadComponent,
    BodyComponent,
    FootComponent,
    ScrollableContainerComponent
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
