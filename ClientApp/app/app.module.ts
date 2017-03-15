// Angular Components
import { NgModule } from '@angular/core';   // '@angular/core' ==> the exact location is in systems.config.js file
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { UniversalModule } from 'angular2-universal';

// My Components
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { HelloWorldComponent } from './components/helloworld/helloworld.component';
import { WeatherComponent } from './components/weather/weather.component';

// So this guy describes the class that follows it
@NgModule({
    bootstrap: [AppComponent],    // Where do I start?
    declarations: [     // What's in my app module?
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        HelloWorldComponent,
        WeatherComponent
    ],
    imports: [  // What stuff do I need?
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'hello-world', component: HelloWorldComponent },
            { path: 'weather', component: WeatherComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [                    // what services do I need? using short-hand
    ]
})
export class AppModule {
}

// All the configuration occurs in the NgModule decorator. The bootstrap property is only necessary in this root NgModule.
// It instructs Angular to examine the existing DOM (parsed from index.html in this case), identifying the elements to replace with the components defined in bootstrap.
// The imports property defines any NgModules that are consumed by this NgModule. Being this root NgModule is running in a browser, you must import the BrowserModule.
// The other NgModules in your application do not need to import that BrowserModule, only the root NgModule.
// Finally, you declare all of the Components and Directives that belong to this NgModule in declarations.
// There are several other important properties with the NgModule decorator so refer to the documentation for more information.