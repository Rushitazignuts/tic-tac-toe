import { Component, OnInit } from '@angular/core';
import { ApiService } from './service/api.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './component/dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'practice';
//  isDarkTheme= false;
//  getData :any
//  constructor(private service :ApiService,private dialog: MatDialog){}
//   ngOnInit() {
//     return this.service.getData().subscribe((data)=>{
//       this.getData=data;
//       console.log(data)
//     })
//   }
//   onClick(){
//     this.dialog
//       .open(DialogComponent, {
//         width: '20%',
//         height: '10%',
//       })
//   }
 ngOnInit(){
   
 }
}
