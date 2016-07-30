import { XHRBackend } from '@angular/http';


import {bootstrap} from "@angular/platform-browser-dynamic";

import {AppComponent} from "./app.component";
import {appRouterProviders} from "./app.routes";
import {HTTP_PROVIDERS} from "@angular/http";
import {InMemoryBackendService, SEED_DATA} from "angular2-in-memory-web-api/index";
import { InMemoryDataService }  from './in-memory-data.service';

bootstrap(AppComponent,[
    appRouterProviders,
    HTTP_PROVIDERS,
    {provide:XHRBackend,useClass:InMemoryBackendService},
    {provide:SEED_DATA,useClass:InMemoryDataService}
]);