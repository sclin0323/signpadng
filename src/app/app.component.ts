import { Component, ViewChild } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';

// services
import { SignpadService } from './signpad.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // 簽名板 option 可參考: https://www.npmjs.com/package/signature_pad
  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  private signaturePadOptions: Object = {
    //'canvasWidth': 250,   // 不固定SIZE
    //'canvasHeight': 200,  // 不固定SIZE
    'backgroundColor': 'rgba(225, 255, 255, 0)',  // 筆尖的顏色
    'penColor': 'rgb(0, 0, 0)'  // 筆跡顏色
  };

  //private signpadService: SignpadService;

  // 建構子
  constructor(private signpadService: SignpadService) { 
    console.log('constructor')
    //signpadService = signpadService;

  }
 
  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('maxWidth', 2);
    this.signaturePad.set('minWidth', 1); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }
 
  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    console.log(this.signaturePad.toDataURL());
  }
 
  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }

  // 清除簽名版
  clear() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('clear');
    this.signaturePad.clear()
  }

  saveButton() {
    if (this.signaturePad.isEmpty()) {
      alert("Please provide a signature first.");
    } else {

      //this.signpadService.saveSignImage();

      //this.signpadService.saveSignImage('testing').subscribe(() => this.goBack());

     // this.signpadService.updateHero('hello').subscribe(() => this.goBack());

      //const data = this.signaturePad.toData();
      //console.log(data);

      //window.URL.revokeObjectURL();
    }
  }
  
  // Test ForEach
  testForEach() {

    var arr = ['Jerry', 'Anna'];
    arr.forEach((item) => console.log(item))

  }

  // Test MAP
  testMap() {

    let data = [
      { id: '001', name:'N001', rating:5 },
      { id: '002', name:'N002', rating:4 },
      { id: '003', name:'N003', rating:4 },
      { id: '004', name:'N004', rating:5 },
      { id: '005', name:'N005', rating:6 }
    ]

    let newDate = [];
    /*
    data.forEach((movie) => {
      newDate.push({ id: movie.id, name: movie.name });
    });
    */

    newDate = data.map((movie) => { return { id: movie.id, name: movie.name } });
    console.log(newDate);
  }

  // Test Filter
  testFilter(){
    let data = [
      { id: '001', name:'N001', rating:5 },
      { id: '002', name:'N002', rating:4 },
      { id: '003', name:'N003', rating:4 },
      { id: '004', name:'N004', rating:5 },
      { id: '005', name:'N005', rating:6 }
    ]

    let newDate = [];
    newDate = data.filter((movie) =>  movie.rating === 5)
    console.log(newDate);
  }

}
