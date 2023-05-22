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
  nameSearch:any='';
  usersDetails:any[]=[
      {name:'Anil' , email:'anil12@gmail.com' , age:'25'},
      {name:'Sidhu' , email:'Sidhu12@gmail.com' , age:'23'},
      {name:'John' , email:'John12@gmail.com' , age:'23'},
      {name:'Smith' , email:'Smith12@gmail.com' , age:'21'},
      {name:'Peter' , email:'Peter12@gmail.com' , age:'34'},
      {name:'Sam' , email:'Sam12@gmail.com' , age:'33'},
  ]
  productItems=[
    {sno:1 ,  name :'Mobile', price:'$900' ,availability:'available'},
    {sno:2 ,  name :'Laptop', price:'$113' ,availability:'not available'},
    {sno:3 ,  name :'Smart Phone', price:'$30' ,availability:'available'},
    {sno:4 ,  name :'Washing Machines', price:'$100' ,availability:'not available'},
    {sno:5 ,  name :'Electric fan', price:'$110' ,availability:'available'},
    {sno:6 ,  name :'Television', price:'$110' ,availability:'not available'},
    {sno:7 ,  name :'Ac', price:'$300' ,availability:'not available'},
    {sno:8 ,  name :'Computer', price:'$500' ,availability:'available'},
    {sno:9 ,  name :'Robot', price:'$500' ,availability:'available'},
    {sno:9 ,  name :'Mobile', price:'$500' ,availability:'available'},
  ]
groceryItems=[
  {sno:1 , name:'Vegetable' , prices:'$ 700' , availability:'Available'},
  {sno:2 , name:'Rice' , prices:'$ 400' , availability:'Available'},
  {sno:3 , name:'Frozen Vegetable' , prices:'$ 100' , availability:'Not Available'},
  {sno:4 , name:'Bread' , prices:'$ 100' , availability:'Available'},
  {sno:5 , name:'Vegetable' , prices:'$ 700' , availability:'Not Available'},
  {sno:6 , name:'Fruit' , prices:'$ 500' , availability:'Available'},
  {sno:7 , name:'Dried Fruit' , prices:'$ 700' , availability:'Available'},
  {sno:8 , name:'Milk' , prices:'$ 200' , availability:'Available'},
  {sno:7 , name:'Flour' , prices:'$ 900' , availability:'Available'},
  {sno:7 , name:'Yogurt' , prices:'$ 50' , availability:'Available'},





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
