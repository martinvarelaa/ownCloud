import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  title = 'cloudApp';
  public selectedFiles : Array < File >;
  public directoryFiles : Array < string > ;
  public toDeleteFiles : any ;

    
  

constructor(private _http : HttpClient){

this.directoryFiles = [];
this.toDeleteFiles = "Unidad1.pdf";
  this.updateDirList();
}

public fileChange(element){
this.selectedFiles = element.target.files;
console.log('Archivo seleccionado correctamente!')
  
}

public upload() {
  let formData = new FormData();
  for (var i = 0; i < this.selectedFiles.length; i++) {
    
      formData.append("uploads[]", this.selectedFiles[i], this.selectedFiles[i].name);
      
  }
  this._http.post('/api/upload', formData)
  .subscribe((response) => {
      console.log(response);
  });

  this.updateDirList();


}

public updateDirList() {
  this._http.post('/api/list', null)
    .subscribe((response) => {
      this.directoryFiles = Object.values(response);

    });
}



}



