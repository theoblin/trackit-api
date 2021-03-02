import {IsEmail, IsNotEmpty, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class UserDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({type: String, description: 'email'})
  readonly email: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty({type: String, description: 'password'})
  readonly password: string;
  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}
