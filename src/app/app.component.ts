import { Component , OnInit ,Input} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-learning';
  contentValue:boolean=false;
  today=Date();
 value='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
 userNames=[
  'sam',
  'John',
  'John Peter Joe',
  'joe Smith Sam',
  'Peterson Smith Sam',
  'Anil Sidhu John',
]  
  users=['Anil' , 'Sidhu' , 'John' , 'Smith' , 'Peter' , 'Sam' ]
  usersDetails=[
      {name:'Anil' , email:'anil12@gmail.com' , age:'25'},
      {name:'Sidhu' , email:'Sidhu12@gmail.com' , age:'23'},
      {name:'John' , email:'John12@gmail.com' , age:'23'},
      {name:'Smith' , email:'Smith12@gmail.com' , age:'21'},
      {name:'Peter' , email:'Peter12@gmail.com' , age:'34'},
      {name:'Sam' , email:'Sam12@gmail.com' , age:'33'},
  ]
  pipeUsers={name:'Rukhsar', email:'rukhsaranwar56@gmail.com'}
  isValue:boolean=false;
  bind:any;
  bind1:any;
  clsName = 'one';
  color='blue'
  currentBerveages='coffee';
  data="pass";
  data1="passanotherstring"
  data3={
    name:'Rukhsar'
  }
  changeColor(){
    this.color="red"
  }
  upperCase(item:string){
    return item.toUpperCase();


  }
  showContents(){
    this.isValue=true;
  }
  data4={
    name:'Ali',
    age:'23',
  }
  
  parentComponent(event:any)
  {
    console.log(event);
  }
  baverages=['milk' ,'tea' ,'coldcoffee' ,'juice' ,'greentea'];
  addBerveages(newBeverages:string){
    this.baverages.push(newBeverages);
  }
  showContent(){
    this.contentValue=true 
  }
  @Input() name='Rukhsar'
  constructor(){}
  ngOnInit(): void {
  }
}