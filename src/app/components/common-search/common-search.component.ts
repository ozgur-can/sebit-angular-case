import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-common-search',
  templateUrl: './common-search.component.html',
  styleUrls: ['./common-search.component.scss'],
})
export class CommonSearchComponent implements OnInit {
  searchForm = new FormGroup({
    text: new FormControl(null, [Validators.required]),
  });
  constructor(private router: Router) {}

  ngOnInit(): void {}

  formOnSubmit() {
    // get text from form
    let searchText: string = this.searchForm.get('text')!.value!;

    // navigate to new url if text is proper
    if (searchText) {
      this.router.navigateByUrl(`/search/${searchText}`);
    }

    // clear form values after navigate
    this.searchForm.setValue({
      text: null,
    });
  }
}
