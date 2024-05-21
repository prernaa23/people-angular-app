import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { People } from '../people';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
})
export class IndexComponent {
  persons: People[]=[];
  constructor(public peopleservice: PeopleService) {}

  ngOnInit(): void {
    this.peopleservice.getAll().subscribe((data: People[]) => {
      this.persons = data;
      console.log(this.persons);
    });
  }

  deletePerson(id: string) {
    this.peopleservice.delete(id).subscribe((res) => {
      this.persons = this.persons.filter((item) => item.id !== id);
      alert('Are you sure want to delete this person?');
    });
  }
}
