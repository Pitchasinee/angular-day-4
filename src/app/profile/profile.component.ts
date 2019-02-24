import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { Account } from '../account';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  form: FormGroup;
  @Output() change = new EventEmitter();
  constructor(
    private fb: FormBuilder,
    public accountService: AccountService,
    private titleService: Title
  ) {
    this.titleService.setTitle('Profile');
   }

  ngOnInit() {
    const {firstName,lastName} = this.accountService.account;
    const validatorsAccount = [Validators.required, Validators.minLength(2)];
    this.form = this.fb.group({
      firstName: [firstName,validatorsAccount],
      lastName: [lastName,[...validatorsAccount,Validators.maxLength(10)]]
    });
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      const { firstName, lastName} = form.value;
      const account = new Account(firstName, lastName);
      this.accountService.account = account;
      // this.change.emit(account);
    } else {
      alert('Validate Work');
      ['firstName',
        'lastName',
       ].forEach((key: string)=>{
          form.get(key).markAsTouched();
        })
    }

  }
}
