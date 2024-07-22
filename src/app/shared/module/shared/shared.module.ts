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
import { HttpRequestInterceptor } from '../../../core/interceptors/http-request.interceptor';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TokenInterceptor } from '../../../core/interceptors/token.interceptor';
import { SearchComponent } from '../../components/search/search.component';
import { MatInputModule } from '@angular/material/input';
import { BeautyPipe } from '../../pipes/beauty.pipe';
import { EntitesPipe } from '../../pipes/entites.pipe';
import { DynamicFormComponent } from '../../components/dynamic-form/dynamic-form.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    SearchComponent,
    BeautyPipe,
    EntitesPipe,
    DynamicFormComponent,
  ],
  imports: [
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
    FormsModule,
  ],
  exports: [
    NgxSpinnerModule,
    SearchComponent,
    BeautyPipe,
    EntitesPipe,
    DynamicFormComponent,
  ],
  providers: [
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
