import { Component } from '@nestjs/common';
import { Comment } from '../interfaces/comment.interface';

@Component()
export class CommentsService {
    private comments: Comment[] = [];

    create(comment: Comment) {
        this.comments.push(comment);
    }

    findAll(): Comment[] {
        return this.comments;
    }

    reset() {
        this.comments = [];
    }
}
