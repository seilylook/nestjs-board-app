import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.model';

@Controller('boards')
export class BoardsController {
  constructor(private boardService: BoardsService) {}

  // 모든 게시물 가져오는 router
  @Get('/')
  getAllBoard(): Board[] {
    return this.boardService.getAllBoards();
  }
}
