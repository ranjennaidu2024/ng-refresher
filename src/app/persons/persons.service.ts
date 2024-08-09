import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PersonsService {
  personsChanged = new Subject<string[]>();
  private persons: string[] = []; // This will hold the combined list

  constructor(private http: HttpClient) {}

  fetchPersons() {
    this.http
      .get<any>('https://swapi.dev/api/people')
      .pipe(
        map((resData) => {
          return resData.results.map((character) => character.name);
        })
      )
      .subscribe((transFormedData) => {
        this.persons = transFormedData.concat(this.persons); // Combine fetched and existing persons
        this.personsChanged.next(this.persons.slice()); // Emit the updated list
      });
  }

  addPerson(name: string) {
    this.persons.push(name);
    this.personsChanged.next(this.persons.slice()); // Emit the updated list
  }

  removePerson(name: string) {
    this.persons = this.persons.filter((person) => {
      return person !== name;
    });
    this.personsChanged.next(this.persons.slice()); // Emit the updated list
  }
}
