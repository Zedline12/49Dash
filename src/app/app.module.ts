import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { AuthGuard } from './core/guards/auth.guard';
import { CoreModule } from './core/core.module';
import { MatButtonModule } from '@angular/material/button';
import { ToastrModule } from 'ngx-toastr';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { TokenInterceptor } from './core/interceptors/token.interceptor';
@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    PagesModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    MatButtonModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  exports: [BrowserModule, BrowserAnimationsModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    AuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
