import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  title = 'cloudApp';
  public uploadedFiles : Array < File >;

constructor(private _http : HttpClient){


}


public fileChange(element){
  
this.uploadedFiles = element.target.files;
console.log('Array updated!')
  
}

public upload() {
  let formData = new FormData();
  for (var i = 0; i < this.uploadedFiles.length; i++) {
    
      formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
      
  }
  this._http.post('/api/upload', formData)
  .subscribe((response) => {
       console.log('response received is ', response);
  });


  this._http.post('/api/list', null)
  .subscribe((response) => {
       var jsonFilenames = response;
       console.log(jsonFilenames);
       
  });
}
  
}



