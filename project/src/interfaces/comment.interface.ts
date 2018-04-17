import { User } from './user.interface';

export interface Comment {
    readonly headline: string;
    readonly text: string;
    readonly user: User;
    readonly image: string;
}