import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TextModule } from '../text/text.module';
import { ObservablesComponent } from './pages/observables/observables.component';
import { TestObservablesRoutingModule } from './test-observables-routing.module';



@NgModule({
  declarations: [ObservablesComponent],
  imports: [
    CommonModule,
    TestObservablesRoutingModule,
    TextModule
  ]
})
export class TestObservablesModule { }
