import { Component } from '@angular/core';
import { ExcelService } from '../../services/excel.service';

@Component({
  selector: 'app-excel-generator',
  template: `
    <button (click)="generateExcel()">Generar Excel</button>
  `,
})
export class ExcelGeneratorComponent {
  constructor(private excelService: ExcelService) {}

  generateExcel(): void {
    const data = [
      { name: 'John Doe', age: 30, email: 'john.doe@example.com' },
      { name: 'Jane Smith', age: 25, email: 'jane.smith@example.com' },
      { name: 'Mike Johnson', age: 35, email: 'mike.johnson@example.com' },
    ];
    this.excelService.generateExcel(data, 'example-file');
  }
}