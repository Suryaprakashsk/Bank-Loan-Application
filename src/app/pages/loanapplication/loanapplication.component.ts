import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiResponseModel, Application, Loan } from '../../model/application.model';
import { MasterService } from '../../service/master.service';

@Component({
  selector: 'app-loanapplication',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './loanapplication.component.html',
  styleUrl: './loanapplication.component.css'
})
export class LoanapplicationComponent {

  application: Application = new Application();
  loan: Loan = new Loan();

  masterSrv=inject(MasterService);

  addloan(){
    const strobj=JSON.stringify(this.loan);
    const newobj=JSON.parse(strobj);
    this.application.Loans.unshift(newobj);
    this.loan=new Loan();
  }

  onSubmit(){
    debugger;
    this.masterSrv.addnewapplication(this.application).subscribe((Result:ApiResponseModel)=>{
      if(Result.result){
        alert('Loan Application Sucess')
      }else{
        alert(Result.message)
      }

    },error=>{
      alert(error)

    })
  }

}
