import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes} from "@angular/router";
import { AppComponent } from './app.component';
import { RouteComponent } from './components/mainpage/head/route/route.component';
import { HeadComponent } from './components/mainpage/head/head.component';
import { PopoverComponent } from './components/mainpage/head/route/popover/popover.component';
import { AboutComponent } from './components/mainpage/head/route/popover/about/about.component';
import { ContactComponent } from './components/mainpage/head/route/popover/contact/contact.component';

import { BodyComponent } from './components/mainpage/body/body.component';
import { DiscountViewComponent } from './components/mainpage/body/discount-view/discount-view.component';
import { PopularViewComponent } from './components/mainpage/body/popular-view/popular-view.component';
import { CategoryViewComponent } from './components/mainpage/body/category-view/category-view.component';

import { FootComponent } from './components/mainpage/foot/foot.component';
import { ScrollableContainerComponent } from './components/mainpage/body/scrollable-container/scrollable-container.component';

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
