import { Component ,OnInit,Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() hero ="";
  @Input() hero1="";
  @Input() info="";
  @Input() aliinfo="";
  @Output() parentComponent:EventEmitter<any>=new EventEmitter()
 constructor(){}
  ngOnInit(): void {
  }
  senddata(){
    let item={name:'john',age:'30'}
    this.parentComponent.emit(item);
    
  }
}
