import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotfoundComponent } from './notfound.component';
import { NotfoundRoutingComponent } from './notfound-routing.module';

@NgModule({
    imports:[CommonModule, NotfoundRoutingComponent],
    declarations:[NotfoundComponent]
})

export class NotFoundModule {}
