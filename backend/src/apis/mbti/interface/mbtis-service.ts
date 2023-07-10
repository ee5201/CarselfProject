import { CreateMbtiInput } from '../dto/creatembtiinput';
import { UpdateMBTIInput } from '../dto/updatembtiInput';

export interface IMbtiServiceFindOne {
  mbtiName: string;
}

export interface IMbtiServiceCreate {
  creatembtiInput: CreateMbtiInput;
}

export interface IMbtiServicedelete {
  mbti: string;
}

export interface IMbtiServiceupdate {
  mbtiName: string;
  updateMBTIInput: UpdateMBTIInput;
}
