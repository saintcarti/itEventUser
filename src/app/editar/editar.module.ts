import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EditarPageRoutingModule } from './editar-routing.module';
import { EditarPage } from './editar.page'; // Nombre correcto del componente

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarPageRoutingModule
  ],
  declarations: [EditarPage] // Nombre correcto del componente
})
export class EditarModule { }
