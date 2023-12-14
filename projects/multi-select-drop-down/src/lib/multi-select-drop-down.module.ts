import { NgModule } from '@angular/core';
import { MultiSelectDropDownComponent } from './multi-select-drop-down.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { PopoverComponent } from './popover/popover.component';

@NgModule({
  declarations: [MultiSelectDropDownComponent, FilterPipe, PopoverComponent],
  imports: [CommonModule, FormsModule],
  exports: [MultiSelectDropDownComponent, CommonModule, FormsModule],
})
export class MultiSelectDropDownModule {}
