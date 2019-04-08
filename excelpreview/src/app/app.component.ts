import { Component, OnInit } from '@angular/core';
import * as XLSX from 'ts-xlsx';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'excelpreview';
  csvContent: any;
  data = [
    ['Google', 1998, 807.80],
    ['Apple', 1976, 116.52],
    ['Yahoo', 1994, 38.66],
  ];
  data2 = [
    [3, 'Classe A', 'Cheese', 1, '2017-01-12'],
    [1, 'Classe B', 'Apples', 1, '2017-01-12'],
    [2, 'Classe A', 'Carrots', 1, '2017-01-12'],
    [1, 'Classe C', 'Oranges', 0, '2017-01-12'],
  ];
  ngOnInit() {

  }


  onFileLoad(fileLoadedEvent) {
    debugger
    const textFromFileLoaded = fileLoadedEvent.target.result;
    this.csvContent = textFromFileLoaded;
    //let checkdata=JSON.parse(textFromFileLoaded);
   // const split:any = textFromFileLoaded.split(",");
    // console.log(1,checkdata)
  //  console.log(2,split)
    alert(this.csvContent);
  }

  onFileSelect(input: HTMLInputElement) {
debugger
    const files = input.files;
    var content = this.csvContent;

    if (files && files.length) {
      /*
       console.log("Filename: " + files[0].name);
       console.log("Type: " + files[0].type);
       console.log("Size: " + files[0].size + " bytes");
       */

      const fileToRead = files[0];

      const fileReader = new FileReader();
      fileReader.onload = this.onFileLoad;

      fileReader.readAsText(fileToRead, "UTF-8");
    }
  }
    ngAfterViewInit(): void {
      //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
      //Add 'implements AfterViewInit' to the class.
      $('button').click(function () {
        alert('hii');
      })



    $('#mytable').jexcel({ data: this.data, colWidths: [300, 80, 100] });

      $('#my').jexcel({
        data: this.data2,
        colHeaders: ['Country', 'Description', 'Type', 'Stock', 'Next purchase'],
        colWidths: [300, 80, 100, 60, 120],
        columns: [
          // { type: 'autocomplete', url:'/jexcel/countries' },
          { type: 'text' },
          { type: 'text' },
          { type: 'dropdown', source: [{ 'id': '1', 'name': 'Fruits' }, { 'id': '2', 'name': 'Legumes' }, { 'id': '3', 'name': 'General Food' }] },
          { type: 'checkbox' },
          { type: 'calendar' },
        ]
      });

      $('#fileData').jexcel({
        data: this.csvContent,
      //  colHeaders: ['Country', 'Description', 'Type', 'Stock', 'Next purchase'],
        colWidths: [300, 80, 100, 60, 120],
        columns: [
          // { type: 'autocomplete', url:'/jexcel/countries' },
          { type: 'text' },
          { type: 'text' },
          { type: 'dropdown', source: [{ 'id': '1', 'name': 'Fruits' }, { 'id': '2', 'name': 'Legumes' }, { 'id': '3', 'name': 'General Food' }] },
          { type: 'checkbox' },
          { type: 'calendar' },
        ]
      });

    }

  }

