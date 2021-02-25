import { Injectable } from '@nestjs/common';
import firebase from 'firebase';
import { UserDto } from '../../dto/user.dto';
import { environment } from '../../../environment';

@Injectable()
export class UserService {
  constructor() {
    firebase.initializeApp(environment.firebase);
  }

  login(user: UserDto): Promise<UserDto> {
    return firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then((user) => {
        return user;
      })
      .catch((error) => {
        return error;
      });
  }
}
