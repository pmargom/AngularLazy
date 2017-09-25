
import { NgModule, ModuleWithProviders} from "@angular/core";
import { UserService } from './../services/user.service';

import { TitleComponent } from './shared-components/title.component';

@NgModule({
  declarations: [
    TitleComponent
  ],
  exports: [
    TitleComponent
  ]
})
export class SharedModule {
    static forRoot():ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
              UserService
            ]
        };
    }
}
