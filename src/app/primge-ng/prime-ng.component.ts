import {PanelModule} from "primeng/panel";
import {StyleClassModule} from "primeng/styleclass";
import {DividerModule} from "primeng/divider";
import {RippleModule} from "primeng/ripple";
import {InputTextModule} from "primeng/inputtext";
import {SidebarModule} from "primeng/sidebar";
import {BadgeModule} from "primeng/badge";
import {RadioButtonModule} from "primeng/radiobutton";
import {InputSwitchModule} from "primeng/inputswitch";
import {DialogModule} from 'primeng/dialog';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {MessagesModule} from 'primeng/messages';
import {PasswordModule} from "primeng/password";
import {CheckboxModule} from "primeng/checkbox";
import {InputNumberModule} from "primeng/inputnumber";
import {InputMaskModule} from "primeng/inputmask";
import {DropdownModule} from "primeng/dropdown";
import {ChipsModule} from "primeng/chips";
import {CalendarModule} from "primeng/calendar";
import {AutoCompleteModule} from "primeng/autocomplete";
import {FormsModule} from "@angular/forms";
import {CascadeSelectModule} from "primeng/cascadeselect";
import {MultiSelectModule} from "primeng/multiselect";
import {InputTextareaModule} from "primeng/inputtextarea";
import {CardModule} from "primeng/card";
import { ChipModule } from 'primeng/chip';
import { TagModule } from 'primeng/tag';
import { ImageModule } from 'primeng/image';
import { GalleriaModule } from 'primeng/galleria';
import { CarouselModule } from 'primeng/carousel';
import { DataViewModule } from 'primeng/dataview';
import { AccordionModule } from 'primeng/accordion';


import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-primeng-standalone',
  template: `
    <p-button label="Click Me"></p-button>
    <p-table [value]="data"></p-table>
  `,
  standalone: true,
  imports: [
    ButtonModule, TableModule, InputNumberModule, PanelModule, StyleClassModule, DividerModule,
    RippleModule, InputTextModule, SidebarModule, BadgeModule, RadioButtonModule, InputSwitchModule,
    DialogModule, DynamicDialogModule, MessagesModule, PasswordModule, CheckboxModule, InputMaskModule,
    DropdownModule, ChipsModule, CalendarModule, AutoCompleteModule, CascadeSelectModule, MultiSelectModule,
    InputTextareaModule, CardModule, ChipModule, TagModule, ImageModule, GalleriaModule, CarouselModule,
    DataViewModule, AccordionModule, FormsModule
  ]})
export class PrimeNgStandaloneComponent {
  data = [{ name: 'John', age: 30 }  ];
}
