import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableExporterModule } from 'mat-table-exporter';
import { MatTableDataSource } from '@angular/material/table';

//this is for defining what all values will be taken by the columns of our table
export interface PElement {
  id: number,
  PV: string;
  Model: string;
  Version: string;
  R2: number;
  MAE: number;
  MSE: number;
  RMSE: number;
  RSMLE: number;
  MAPE: number;
}

//here we are giving in the data manually
const ELEMENT_DATA: PElement[] = [
    {
      id: 1,
      PV: "A Denitration Inlet Outlet CO_H0761588",
      Model: "PLSRegression",
      Version: "base Test-24",
      R2: 0.46,
      MAE: 56.49,
      MSE: 6110.76,
      RMSE: 78.17,
      RSMLE: 1.12,
      MAPE: 96.63
    },
    {
      id: 2,
      PV: "A quaternary superheater outlet header metal temp (inner wall)_H0764421",
      Model: "PLSRegression",
      Version: "base Test-24",
      R2: 0.57,
      MAE: 0.71,
      MSE: 0.77,
      RMSE: 0.88,
      RSMLE: 0,
      MAPE: 0.12
    },
    {
      id: 3,
      PV: "A quaternary superheater outlet header metal temp (outer wall)_H0764430",
      Model: "PLSRegression",
      Version: "base Test-24",
      R2: 0.02,
      MAE: 0.75,
      MSE: 0.88,
      RMSE: 0.94,
      RSMLE: 0,
      MAPE: 0.13
    },
    {
      id: 4,
      PV: "A Secondary reheater outlet header metal temp (inner wall)_H0764478",
      Model: "PLSRegression",
      Version: "base Test-24",
      R2: 0.83,
      MAE: 0.59,
      MSE: 0.54,
      RMSE: 0.74,
      RSMLE: 0,
      MAPE: 0.1
    },
    {
      id: 5,
      PV: "A Secondary reheater outlet header metal temp (outer wall)_H0764477",
      Model: "PLSRegression",
      Version: "base Test-24",
      R2: 0.71,
      MAE: 0.74,
      MSE: 0.88,
      RMSE: 0.94,
      RSMLE: 0,
      MAPE: 0.12
    },
    {
      id: 6,
      PV: "A-AH inlet Gas temperature (Average)_H0761748",
      Model: "Earth",
      Version: "base Test-24",
      R2: 0.91,
      MAE: 1.27,
      MSE: 2.41,
      RMSE: 1.55,
      RSMLE: 0,
      MAPE: 0.34
    },
    {
      id: 7,
      PV: "A-AH outlet Gas temperature (Average)_H0765038",
      Model: "Ridge",
      Version: "base Test-24",
      R2: 0.91,
      MAE: 1.01,
      MSE: 1.67,
      RMSE: 1.29,
      RSMLE: 0.01,
      MAPE: 0.7
    },
    {
      id: 8,
      PV: "A-AH inlet Gas temperature (Average)_H0761748",
      Model: "Earth",
      Version: "base Test-24",
      R2: 0.91,
      MAE: 1.27,
      MSE: 2.41,
      RMSE: 1.55,
      RSMLE: 0,
      MAPE: 0.34
    }  
];

@Component({
  selector: 'app-table2',
  standalone: true,
  imports: [MatTableModule, RouterOutlet, MatButtonModule, MatIconModule, MatTableExporterModule, CommonModule],
  templateUrl: './table2.component.html',
  styleUrl: './table2.component.css'
})
export class Table2Component {
//these are the columns that we are going to display (note: the columns that we type in here have to match all our row-definitions or it won't appear on the screen.
  displayedColumns: string[] = ['id', 'PV', 'Model', 'Version', 'R2', 'MAE', 'MSE', 'RMSE', 'RSMLE', 'MAPE'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
}
