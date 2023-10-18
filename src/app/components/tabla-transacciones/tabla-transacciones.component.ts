import { CommonModule } from '@angular/common';
import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

export interface UserData {
  moneda: string;
  icon:any;
  total: string;
  col1:string;
  col2:string;
  col3:string;
  //progress: string;
  //fruit: string;
}

@Component({
  selector: 'app-tabla-transacciones',
  standalone: true,
  imports: [CommonModule,MatPaginatorModule,MatSortModule,MatTableModule,MatInputModule,MatFormFieldModule],
  templateUrl: './tabla-transacciones.component.html',
  styleUrls: ['./tabla-transacciones.component.css']
})
export class TablaTransaccionesComponent implements AfterViewInit, OnInit {

  displayedColumns: string[] = ['moneda', 'total', 'col1','col2','col3'];
  //dataSource = new MatTableDataSource<UserData>();
  dataSource = new MatTableDataSource<UserData>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {

    const array = [
      {
        moneda:"Dólares",
        icon:"<img class='w-6 h-14' src='../../../assets/icons/usd.svg'>",
        total:"0,00 USD",
        col1:"",
        col2:"",
        col3:""
      },
      {
        moneda:" Bolívares",
        icon:"<img class='w-6 h-14' src='../../../assets/icons/bs.svg'>",
        total:"0,00 Bs",
        col1:"",
        col2:"",
        col3:""
      }
    ]

    this.dataSource = new MatTableDataSource(array);
  }

  ngOnInit(){

    /*this.dataSource.data = [{
      moneda:"USD",
      total:"123456789.00",
      col1:"",
      col2:"",
      col3:""
    },
    {
      moneda:"Bs",
      total:"123456789.00",
      col1:"",
      col2:"",
      col3:""
    }]*/

    console.log(this.dataSource.data)
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
