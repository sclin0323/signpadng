import { Component, ViewChild } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  @ViewChild(SignaturePad) signaturePad: SignaturePad;

  // option 可參考: https://www.npmjs.com/package/signature_pad
  private signaturePadOptions: Object = {
    //'canvasWidth': 250,   // 不固定SIZE
    //'canvasHeight': 200,  // 不固定SIZE
    'backgroundColor': 'rgba(225, 255, 255, 0)',  // 筆尖的顏色
    'penColor': 'rgb(0, 0, 0)'  // 筆跡顏色
  };
  
  title = 'app';

  constructor() {
    // no-op
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
      const data = this.signaturePad.toData();
      console.log(data);

      //window.URL.revokeObjectURL();
    }
  }
  

}
