import { NgModule } from '@angular/core';
import {
  provideHttpClient,
  withInterceptorsFromDi,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { HttpRequestInterceptor } from '../core/interceptors/http-request.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
// import { TokenInterceptor } from '../core/interceptors/token.interceptor';
import { BeautyPipe } from './pipes/beauty.pipe';
import { EntitesPipe } from './pipes/entites.pipe';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ProgressCircleComponent } from './components/progress-circle/progress-circle.component';
import { TimeAgoPipe } from './pipes/time-ago.pipe';

@NgModule({
  declarations: [
    BeautyPipe,
    EntitesPipe,
    TimeAgoPipe,
    ProgressCircleComponent
  ],
  imports: [
    CommonModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
    FormsModule,
    MatCheckboxModule,
  ],
  exports: [
    NgxSpinnerModule,
    BeautyPipe,
    EntitesPipe,
    ProgressCircleComponent,
    TimeAgoPipe
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TokenInterceptor,
    //   multi: true,
    // },
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
      }),
    ),
  ],
})
export class SharedModule {}
