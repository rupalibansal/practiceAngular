import {
  Component,
  Input,
  Output,
  EventEmitter,
  input,
  signal,
  computed,
} from '@angular/core';
// import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;

  @Output() select = new EventEmitter();

  // avatar = input.required<string>(); in case of signal
  //name= input.required<string>(); in case of signal
  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  // in case of signal
  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });

  //   selectedUser = signal(DUMMY_USERS[randomIndex]);
  //   imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  onSelectUser() {
    this.select.emit(this.id);
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
