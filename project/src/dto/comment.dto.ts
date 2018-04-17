import { IsString } from 'class-validator';
import { User } from '../interfaces/user.interface';

export class CommentDto {
    @IsString() readonly headline: string;
    @IsString() readonly text: string;
    user: User;
    @IsString() image: string;
}