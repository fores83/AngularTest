import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { GitServiceService } from '../../services/git-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  gitData: any[];
  options: any[];
  myControl = new FormControl();
  filteredOptions: Observable<any[]>;

  constructor(private gitService: GitServiceService) {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this.filterOptions(value))
      );
   }

  ngOnInit() {
    this.gitService.gitdataLoad().subscribe(
      (res: any) => {
        this.gitData = res;
        this.options = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  private filterOptions = (value: string): any[] => {
    if (!this.options) {
      return [];
    }
    const filterValue = value.toLowerCase();
    this.options = this.gitData.filter(option => option.commit.author.name.toLowerCase().includes(filterValue));
    return this.options;
  }

}
