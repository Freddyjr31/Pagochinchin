import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from 'src/app/components/carousel/carousel.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import {MatDividerModule} from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { TablaTransaccionesComponent } from 'src/app/components/tabla-transacciones/tabla-transacciones.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-view-home',
  standalone:true,
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.css'],
  imports:[FooterComponent, CarouselComponent, MatDividerModule, TablaTransaccionesComponent,MatIconModule,HeaderComponent]
})
export class ViewHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
