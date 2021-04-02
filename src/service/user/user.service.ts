import { Injectable } from '@nestjs/common';
import firebase from 'firebase';
import { UserDto } from '../../dto/user.dto';
import { environment } from '../../../environment';
import * as admin from "firebase-admin";

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert({
            clientEmail: environment.firebase2.client_email,
            privateKey: environment.firebase2.private_key,
            projectId: environment.firebase2.project_id,
        }),
        databaseURL: environment.DATABASEURL,
    });
}

const currentUser = 'VXq4OUKqx1ZxxfciCrBCGwOzvGM2';
const db = admin.firestore();

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
    async getUserById(id) {
      return await db
          .collection('users').doc(currentUser)
          .get()
          .then((user) => {
          return user.data()
          });
    }
}
