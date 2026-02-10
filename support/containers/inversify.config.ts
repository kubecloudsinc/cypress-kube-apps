import { Container, interfaces } from 'inversify';
import { baseContainer } from './base.inversify.config';
import { utilsContainer } from './utils.inversify.config';
import { pageContainer } from './pages.inversify.config';

const moduleContainers: Container[] = [utilsContainer, pageContainer];

export let container: interfaces.Container = baseContainer;

moduleContainers.forEach((moduleContainer) => {
  container = Container.merge(container, moduleContainer);
});
