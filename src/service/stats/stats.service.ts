import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { environment } from '../../../environment';
import { ActivitiesService } from '../activities/activities.service';

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
export class StatsService {
  constructor(private activitiesService: ActivitiesService) {
    this.updateBestScore('2018-01-01', '2023-01-01');
    this.updateTotalDistance('2018-01-01', '2023-01-01');
  }

  async updateTotalDistance(startDate, endStart):  Promise<void> {
    this.activitiesService.getAllActivities(startDate, endStart).then((activities) =>
      db.collection('stats')
        .doc('91Ve3sL5KElMuKfAzZVr')
        .update({
          total_distance: activities
            .map((activity: { distance: any }) => activity.distance)
            .reduce((a: number, b: number) => a + b)
            .toFixed(0),
        }),
    );
  }

    async updateBestDistance(startDate, endStart): Promise<void> {
        this.activitiesService.getAllActivities(startDate, endStart).then((activities) =>
            db.collection('stats')
                .doc('91Ve3sL5KElMuKfAzZVr')
                .update({
                    best_distance: (Math.max(...activities.map(o => o.distance.toFixed(2)), 0))
                }),
        );
    }

  async updateBestScore(startDate, endStart): Promise<any> {
    this.activitiesService.getAllActivities(startDate, endStart).then((activities) =>
      db.collection('stats')
        .doc('91Ve3sL5KElMuKfAzZVr')
        .update({
          best_score: activities.find(
            (element) =>
              element.score ===
              activities
                .map((activity) => activity.score)
                .sort()
                .reverse()[0],
          ),
        }),
    );
  }

  async getStats(): Promise<any> {
    return db
      .collection('stats')
      .where('user', '==', currentUser)
      .get()
      .then((stats) => {
        if (stats.size > 0) {
          return stats.docs[0].data();
        }
      });
  }
}
