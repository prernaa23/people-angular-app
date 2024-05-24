import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PeopleService } from '../people.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  id!: string;
  form!: FormGroup;

  constructor(
    public peopleService: PeopleService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['peopleId'];
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      age: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      mobileNumber: new FormControl('', [Validators.required]),
    });

    this.peopleService.find(this.id).subscribe((data: any) => {
      this.form.patchValue({
        name: data.name,
        age: data.age,
        gender: data.gender,
        mobileNumber: data.mobileNumber,
      });
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    if (this.form.valid) {
      this.peopleService
        .update(this.id, this.form.value)
        .subscribe((res: any) => {
          alert('Data updated successfully!');
          this.router.navigateByUrl('people');
        });
    }
  }
}
