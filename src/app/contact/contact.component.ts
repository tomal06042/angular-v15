import { ContactService } from './../service/contact/contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  number: string = "";

  constructor(
    private contactService: ContactService
  ){}


  ngOnInit(){
      /// page load 
      this.contactService.getAContactByNumberAPI()
        .subscribe((data: { number: string; }) => {

          console.log("data", data);

          this.number = data?.number;
          

        })
  }

}