import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from "@ngx-translate/core";
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
   submitted = false;
    registerForm: FormGroup;
   public options = [];

    constructor(
        private formBuilder: FormBuilder,
        private translate: TranslateService,
        private registrationService: RegistrationService,           
    ) 
    {}

    ngOnInit() {
      this.options = this.registrationService.getOptions();
        this.registerForm = this.formBuilder.group({
            name: ['', Validators.required],            
            username: ['', Validators.required],
            number: ['',  Validators.required],
            destination: ['', Validators.required],
        });
    }
    get value() { return this.registerForm.controls; 
    }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
      this.translate.get("contact").subscribe((translated)=>alert(translated.message))   
      }
}
