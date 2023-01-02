import { AboutService } from './../service/about/about.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  description: string = "";
  title: string = "";

  constructor(
    private aboutService: AboutService
  ){}


  ngOnInit(){
      /// page load 
      this.aboutService.getAnAboutByTitleAPI()
        .subscribe((data: { title: string; description: string; }) => {

          //console.log("data", data);

          this.title = data?.title;
          this.description = data?.description;

        })
  }

}
