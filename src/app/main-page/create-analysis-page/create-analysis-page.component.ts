import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-create-analysis-page',
  templateUrl: './create-analysis-page.component.html',
  styleUrls: ['./create-analysis-page.component.css']
})
export class CreateAnalysisPageComponent implements OnInit {
  name2 = 'Angular';  
    
  productForm: FormGroup;  

  app = environment.application
  user : any;
  mongo : any;
  collection : any;
  constructor(private fb:FormBuilder) {
    this.user = this.app.allUsers[sessionStorage.getItem("userId")]
      
    this.mongo =this.user.mongoClient('Cluster0');
  
      this.productForm = this.fb.group({  
        name: '',  
        quantities: this.fb.array([]) ,  
      });  
      
  }

  ngOnInit() {
  }
  
quantities() : FormArray {  
  return this.productForm.get("quantities") as FormArray  
}  
   
newQuantity(): FormGroup {  
  return this.fb.group({  
    qty: '',  
    price: '',  
  })  
}  
   
addQuantity() {  
  this.quantities().push(this.newQuantity());  
}  
   
removeQuantity(i:number) {  
  this.quantities().removeAt(i);  
}  
   
onSubmit() {  
  console.log(this.productForm.value);  }

}