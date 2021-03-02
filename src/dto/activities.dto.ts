import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty} from "class-validator";

export class ActivitiesDto {
  @IsNotEmpty()
  @ApiProperty({type: String, description: 'upload_id_str'})
  readonly upload_id_str: string
  @IsNotEmpty()
  @ApiProperty({type: String, description: 'name'})
  readonly name: string
  @IsNotEmpty()
  @ApiProperty({type: Number, description: 'distance'})
  readonly distance: number
  @IsNotEmpty()
  @ApiProperty({type: String, description: 'elapsed_time'})
  readonly elapsed_time: string
  @IsNotEmpty()
  @ApiProperty({type: String, description: 'moving_time'})
  readonly moving_time: string
  @IsNotEmpty()
  @ApiProperty({type: String, description: 'type'})
  readonly type: string
  @IsNotEmpty()
  @ApiProperty({type: String, description: 'start_date_local'})
  readonly start_date_local: string
  @IsNotEmpty()
  @ApiProperty({type: Number, description: 'score'})
  readonly score: number

  constructor(
     upload_id_str: string,
     name: string,
     distance: number,
     elapsed_time: string,
     moving_time: string,
     type: string,
     start_date_local: any,
     score: any,
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
