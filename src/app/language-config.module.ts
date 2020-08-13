import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

import { LanguageConfigService } from './services/language-config.service';

export function HttpLoaderFactory(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient);
}

@NgModule({
    declarations: [],
    imports: [CommonModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })],
    exports: [TranslateModule],
    providers: [],
})

export class LanguageConfigModule {

    static forRoot(languageCodes?: string[], defaultLang?: string): ModuleWithProviders<LanguageConfigModule> {
        return {
            ngModule: LanguageConfigModule,
            providers: [LanguageConfigService, { provide: 'config', useValue: { default: defaultLang, codes: languageCodes } }
            ]
        };
    }
}
