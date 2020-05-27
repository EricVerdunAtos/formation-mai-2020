import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from './components/btn/btn.component';
import { TableLightComponent } from './components/table-light/table-light.component';



@NgModule({
  declarations: [BtnComponent, TableLightComponent],
  imports: [
    CommonModule
  ],
  exports: [BtnComponent, TableLightComponent]
})
export class SharedModule { }
