import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { environment } from '../../../environment';
import { ActivitiesDto } from '../../dto/activities.dto';

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

const db = admin.firestore();
const currentUser = 'VXq4OUKqx1ZxxfciCrBCGwOzvGM2';

@Injectable()
export class ActivitiesService {

  async getAllActivities(startDate: string,endDate:string): Promise<FirebaseFirestore.DocumentData[] | ActivitiesDto[]> {
    return await db
      .collection('activities')
      .where('user', '==', currentUser)
      .where('start_date_local', '>=', new Date(startDate).getTime())
      .where('start_date_local', '<=', new Date(endDate).getTime())
      .get()
      .then((docs) => {
        return docs.docs.map((doc) => doc.data());
      });
  }
  async getActivitiesById(id: string): Promise<ActivitiesDto> {
    return await db
      .collection('activities')
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          return this.convertToDto(doc.data());
        }
      });
  }

  private convertToDto(activities): ActivitiesDto {
    return new ActivitiesDto(
      activities.upload_id_str,
      activities.name,
      activities.distance,
      activities.elapsedTime,
      activities.moving_time,
      activities.type,
      activities.start_date_local,
      activities.score,
    );
  }
}
