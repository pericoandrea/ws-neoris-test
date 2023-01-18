import { IsMongoId } from 'class-validator';

export class CustomerIdDto {
  @IsMongoId()
  id: string;
}
