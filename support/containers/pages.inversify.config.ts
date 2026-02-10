import { ILoginPage, LoginPage } from '@shared/pages';
import { Container } from 'inversify';
import { PAGE_SYMBOLS } from 'shared/pages/page.symbol';

export const pageContainer = new Container();

pageContainer.bind<ILoginPage>(PAGE_SYMBOLS.ILoginPage).to(LoginPage);
