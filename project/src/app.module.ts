import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CommentsController } from './controllers/comments.controller';
import { CommentsService } from './services/comments.service';
import { UserService } from './services/user.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    CommentsController
  ],
  components: [
    CommentsService,
    UserService
  ]
})
export class ApplicationModule {}
