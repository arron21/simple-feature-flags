import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-starter-eleven';
  item$: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.item$ = firestore.collection('items').valueChanges();
  }
}
