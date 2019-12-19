import { Component, OnInit } from '@angular/core';
import { GitServiceService } from '../../services/git-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private gitService: GitServiceService) { }

  ngOnInit() {
    this.gitService.gitdataLoad().subscribe(
      (res: any) => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

}
