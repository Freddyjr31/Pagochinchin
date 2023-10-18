import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from 'src/app/components/carousel/carousel.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { LoginComponent } from 'src/app/components/login/login.component';

@Component({
  selector: 'app-view-login',
  standalone:true,
  templateUrl: './view-login.component.html',
  styleUrls: ['./view-login.component.css'],
  imports:[LoginComponent, FooterComponent, CarouselComponent]
})
export class ViewLoginComponent implements OnInit {

  constructor() { }

  ngOnInit(){
  }

}
