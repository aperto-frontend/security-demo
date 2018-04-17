import { Component } from '@nestjs/common';
import { Comment } from '../interfaces/comment.interface';
import { User } from '../interfaces/user.interface';

@Component()
export class UserService {
    private user: User = null;

    login(user: User) {
        this.user = user;
    }

    logout() {
        this.user = null;
    }

    get(): User {
        return this.user;
    }
}
