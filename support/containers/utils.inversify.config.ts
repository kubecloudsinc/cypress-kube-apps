import {
  ApiInterceptor,
  IApiInterceptor,
  ICommonUtils,
  UTILS_SYMBOLS,
} from '@shared/utils';
import { Container } from 'inversify';
import { CommonUtils } from 'shared/utils/common.utils';

export const utilsContainer = new Container();

utilsContainer
  .bind<IApiInterceptor>(UTILS_SYMBOLS.IApiInterceptor)
  .to(ApiInterceptor);

utilsContainer.bind<ICommonUtils>(UTILS_SYMBOLS.ICommonUtils).to(CommonUtils);
