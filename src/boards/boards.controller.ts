import { Body, Controller, Get, Post } from '@nestjs/common';
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

  // 게시물 작성하기
  // express 에서는
  // router.post('/', (req, res) => {
  // })
  @Post('/')
  createBoard(
    @Body('title') title: string,
    @Body('description') description: string,
  ): Board {
    return this.boardService.createBoard(title, description);
  }
}
