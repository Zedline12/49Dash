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
  ],
  exports: [BrowserModule, BrowserAnimationsModule],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
