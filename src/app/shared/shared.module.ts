import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BtnComponent } from './components/btn/btn.component';
import { TableDarkComponent } from './components/table-dark/table-dark.component';
import { TableLightComponent } from './components/table-light/table-light.component';
import { StateDirective } from './directives/state.directive';
import { TotalPipe } from './pipes/total.pipe';
import { TemplatesModule } from '../templates/templates.module';
import { TextModule } from '../text/text.module';



@NgModule({
  declarations: [BtnComponent, TableLightComponent, TotalPipe, StateDirective, TableDarkComponent],
  imports: [
    CommonModule, RouterModule, TemplatesModule, TextModule
  ],
  exports: [BtnComponent, TableLightComponent, TotalPipe, StateDirective, TableDarkComponent, TemplatesModule, TextModule]
})
export class SharedModule { }
