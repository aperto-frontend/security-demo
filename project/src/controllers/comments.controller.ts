import {
    Body, Controller, FileInterceptor, Post, Res, UploadedFile,
    UseInterceptors
} from '@nestjs/common';
import { CommentsService } from '../services/comments.service';
import { CommentDto } from '../dto/comment.dto';
import { UserService } from '../services/user.service';
import * as multer from 'multer';
import * as path from 'path';
import * as crypto from 'crypto';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads/')
    },
    filename: function (req, file, cb) {
        crypto.pseudoRandomBytes(16, function (err, raw) {
            cb(null, raw.toString('hex') + Date.now() + path.extname(file.originalname));
        });
    }
});

@Controller('comments')
export class CommentsController {

    constructor(private readonly commentsService: CommentsService,
                private readonly userService: UserService) {}

    @Post()
    @UseInterceptors(FileInterceptor('image', {storage}))
    async create(@Res() res, @Body() createCommentDto: CommentDto, @UploadedFile() file) {
        createCommentDto.user = this.userService.get();
        createCommentDto.image = `uploads/${file.filename}`;
        console.log('File', file);
        this.commentsService.create(createCommentDto);
        res.redirect('/');
    }
}
