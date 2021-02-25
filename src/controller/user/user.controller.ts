import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserDto } from '../../dto/user.dto';
import { UserService } from '../../service/user/user.service';

@Controller('/api/v1/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/signin')
  createPublication(@Body() user: UserDto): any {
    try {
      return this.userService.login(user).then((u) => {
        return u;
      });
    } catch (e) {
      console.log(e);
      return e;
    }
  }
}
