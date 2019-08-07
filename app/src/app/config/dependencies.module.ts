//__IMPORT_MODULES_HERE__
import {NgModule } from '@angular/core';
import { sdProviders} from './sd-providers';
@NgModule({
  imports: [
    //__ADD_MODULES_HERE__
  ],
  providers: [...sdProviders],
  exports: [
    //__ADD_MODULES_HERE__
  ]
})
export class DependenciesModule { }