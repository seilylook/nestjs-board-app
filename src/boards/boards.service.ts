import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardsService {
  private boards = [
    {
      id: 1,
      name: 'kim',
      text: 'I am kim',
    },
    {
      id: 2,
      name: 'lee',
      text: 'I am lee',
    },
    {
      id: 3,
      name: 'park',
      text: 'I am Park',
    },
  ];

  getAllBoards() {
    return this.boards;
  }
}
