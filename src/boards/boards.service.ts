import { v1 as uuid } from 'uuid';
import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';

@Injectable()
export class BoardsService {
    private boards: Board[] = [];

    public getBoardList(): Board[] {
        return this.boards;
    }

    public createBoard(title: string, description: string) {
        const board: Board = {
            id: uuid(),
            title,
            description,
            status: BoardStatus.PUBLIC,
        };
        this.boards.push(board);
    }
}
