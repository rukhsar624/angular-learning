import { Component,OnInit,Input ,Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-berveages',
  templateUrl: './berveages.component.html',
  styleUrls: ['./berveages.component.scss']
})
export class BerveagesComponent implements OnInit {
@Input() beverages ="tea";
@Output() newBeveragesEvent =new EventEmitter<string>();
constructor(){}
  ngOnInit(): void {
  }
  addnewBeverages(value:string){
    this.newBeveragesEvent.emit(value)  
  }
}
