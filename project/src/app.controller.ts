import { Get, Controller, Render, Post, Body, Res } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { CommentsService } from './services/comments.service';
import { UserService } from './services/user.service';

@Controller()
export class AppController {

    constructor(
        private readonly commentsService: CommentsService,
        private readonly userService: UserService
    ) {}

    @Get()
    @Render('index')
    index() {
      return {
          user: this.userService.get(),
          comments: this.commentsService.findAll()
      };
    }

    @Post('login')
    login(@Res() res, @Body() userDto: UserDto) {
        this.userService.login(userDto);
        res.redirect('/');
    }

    @Post('logout')
    logout(@Res() res) {
        this.userService.logout();
        this.commentsService.reset();
        res.redirect('/');
    }
}
