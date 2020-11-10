import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {registerLocaleData} from '@angular/common';
import de from '@angular/common/locales/de';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthService, DataService, NavigationService, StorageService} from './services';
import {IconModule, NavBarModule, TabHeadersModule} from './components';

registerLocaleData(de);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    IconModule,
    NavBarModule,
    TabHeadersModule,
    TranslateModule.forRoot({
      defaultLanguage: 'de',
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http, '/assets/i18n/');
        },
        deps: [HttpClient],
      }
    }),
  ],
  providers: [
    AuthService,
    DataService,
    NavigationService,
    StorageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
