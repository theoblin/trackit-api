export class ActivitiesDto {
  constructor(
    public upload_id_str: any,
    public name: any,
    public distance: number,
    public elapsed_time: any,
    public moving_time: any,
    public type: string,
    public start_date_local: any,
    public score: any,
  ) {
    this.upload_id_str = upload_id_str;
    this.name = name;
    this.distance = distance;
    this.elapsed_time = elapsed_time;
    this.moving_time = moving_time;
    this.type = type;
    this.start_date_local = start_date_local;
    this.score = score;
  }
}
