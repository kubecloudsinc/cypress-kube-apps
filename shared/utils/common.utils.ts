import { injectable } from 'inversify';
import { ICommonUtils } from './interfaces';
import { v4 as uuidv4 } from 'uuid';

@injectable()
export class CommonUtils implements ICommonUtils {
  getRandomUUID(): string {
    return uuidv4();
  }
}
