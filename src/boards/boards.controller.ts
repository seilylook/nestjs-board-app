import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.model';
import { CreateBoardDto } from './dto/create-board.dto';

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
  createBoard(@Body() createBoardDto: CreateBoardDto): Board {
    return this.boardService.createBoard(createBoardDto);
  }

  // 특정 게시물 가져오기
  // localhost:3000?id=sdfjaksjkgsd
  // 이때는 body로 가져올 수 없고
  // params를 이용해서 가져와야 한다.
  @Get('/:id')
  getBoardById(@Param('id') id: string): Board {
    return this.boardService.getBoardById(id);
  }
}
