import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// EL equivalente a render en react
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
