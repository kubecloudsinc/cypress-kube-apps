import { Container } from 'inversify';
import { IBase, BASE_SYMBOLS, BaseClass } from '@shared/base';

export const baseContainer = new Container();

baseContainer.bind<IBase>(BASE_SYMBOLS.IBase).to(BaseClass);
