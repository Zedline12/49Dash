import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { RouterModule } from '@angular/router';
import {
  provideHttpClient,
  withInterceptorsFromDi,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpRequestInterceptor } from './core/interceptors/http-request.interceptor';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AuthModule } from './pages/auth/auth.module';
import { SharedModule } from './shared/module/shared/shared.module';
import { AuthGuard } from './core/guards/auth.guard';
import { CoreModule } from './core/core.module';
import { FeaturesModule } from './pages/dashboard/features/features.module';
import { MatButtonModule } from '@angular/material/button';
import { SearchComponent } from './shared/components/search/search.component';
import { InputComponent } from './shared/components/input/input.component';
@NgModule({
  declarations: [AppComponent, InputComponent],
  imports: [
    AppRoutingModule,
    PagesModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    MatButtonModule
  ],
  exports: [BrowserModule, BrowserAnimationsModule],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
