import { BadRequestException, PipeTransform } from '@nestjs/common';
import { BoardStatus } from '../board.model';

export class BoardStatusValidationPipe implements PipeTransform {
  readonly StatusOptions = [BoardStatus.PUBLIC, BoardStatus.PRIVATE];

  transform(value: any) {
    // PUBLIC, PRIVATE 처럼 대문자가 되도록 바꿔준다.
    value = value.toUpperCase();

    // 하단의 함수를 통해 PUBLIC, PRIVATE 체크를 한다.
    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} 는 올바르지 않은 상태값입니다.`);
    }
    return value;
  }

  // BoardStatus 체크를 위한 함수.
  private isStatusValid(status: any) {
    const idx = this.StatusOptions.indexOf(status);

    return idx !== -1;
  }
}
