import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UseFilters
} from '@nestjs/common';
import { UserDto } from '../../dto/user.dto';
import { UserService } from '../../service/user/user.service';
import {HttpExceptionFilter} from "../../filter/http-exception.filter";
import {ApiBadRequestResponse, ApiOkResponse} from "@nestjs/swagger";

@Controller('/api/v1/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/signin')
  @UseFilters(new HttpExceptionFilter())
  @ApiOkResponse({description: 'User logged'})
  @ApiBadRequestResponse({description: "Invalid user"})
  createPublication(@Body() user: UserDto): any {
    try {
      return this.userService.login(user)
          .then((u) => {
          return u
          }).catch((error) => {
            return error.errorMessage
          })

    } catch (e) {
      throw new BadRequestException(e.message,e.message);
    }
  }


}
