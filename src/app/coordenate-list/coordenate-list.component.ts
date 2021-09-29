import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Workbook } from 'exceljs';
import { saveAs } from 'file-saver'

@Component({
  selector: 'app-coordenate-list',
  templateUrl: './coordenate-list.component.html',
  styleUrls: ['./coordenate-list.component.css']
})
export class CoordenateListComponent implements OnInit {
  public dataSource:any=[];
	public displayedColumns: string[] = ['id', 'registerDate', 'lat','lng','ipAddress'];
  constructor(private restService:RestService) { }

  ngOnInit(): void {
    this.loadData()
  }
  loadData(){
    this.restService.get("http://localhost:1337/coordenate?sort=id DESC").subscribe(data=>{
      this.dataSource=data;
    })
  }
  generateExcel(){
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet('Coordenadas');
    worksheet.columns = [
      { header: 'Id', key: 'id', width: 10 },
      { header: 'registerDate', key: 'registerDate', width: 32 },
      { header: 'lat', key: 'lat', width: 10 },
      { header: 'lng', key: 'lng', width: 10 },
      { header: 'ipAddress', key: 'ipAddress', width: 10, style: { font: { name: 'Arial Black', size:10} } },
    ];
    worksheet.addRows(this.dataSource,"n")
    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      saveAs(blob, 'CoordenadasArchivo.xlsx');
    })
  }

}
