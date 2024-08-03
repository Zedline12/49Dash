import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import {
  provideHttpClient,
  withInterceptorsFromDi,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpRequestInterceptor } from '../core/interceptors/http-request.interceptor';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TokenInterceptor } from '../core/interceptors/token.interceptor';
import { SearchComponent } from './components/search/search.component';
import { MatInputModule } from '@angular/material/input';
import { BeautyPipe } from './pipes/beauty.pipe';
import { EntitesPipe } from './pipes/entites.pipe';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { FormsModule } from '@angular/forms';
import { SubmitButtonComponent } from 'app/shared/components/submit-button/submit-button.component';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from 'app/core/services/features/modal.service';
import { MainButtonComponent } from './components/main-button/main-button.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
@NgModule({
  declarations: [
    SearchComponent,
    BeautyPipe,
    EntitesPipe,
    DynamicFormComponent,
    SubmitButtonComponent,
    ModalComponent,
    MainButtonComponent,
    SearchPageComponent,
  ],
  imports: [
    CommonModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
    FormsModule,
    MatCheckboxModule,
  ],
  exports: [
    ModalComponent,
    NgxSpinnerModule,
    SearchComponent,
    BeautyPipe,
    EntitesPipe,
    DynamicFormComponent,
    SubmitButtonComponent,
    MainButtonComponent,
    SearchPageComponent
  ],
  providers: [
    ModalService,
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true,
    },
    importProvidersFrom(
      ToastrModule.forRoot({
        preventDuplicates: true,
        positionClass: 'toast-top-left',
        timeOut: 5000,
      })
    ),
  ],
})
export class SharedModule {}
