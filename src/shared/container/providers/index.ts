import { container } from 'tsyringe';

import IStorageProvider from './StorageProvider/models/IStorageProvider';
import DiskStorageProvider from './StorageProvider/implementations/DiskStorageProvider';

import ImailProvider from './MailProvider/models/ImailProvider';
import EtherealMailProvider from './MailProvider/implementations/EtherealMailProvider';

import ImailTemplateProvider from './MailTemplateProvider/models/IMailTemplatePovider';
import HandlebarsMailTemplateProvider from './MailTemplateProvider/implementations/HandlebarsMailTemplateProvider';

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DiskStorageProvider,
);

container.registerSingleton<ImailTemplateProvider>(
  'MailTemplateProvider',
  HandlebarsMailTemplateProvider,
);

container.registerInstance<ImailProvider>(
  'MailProvider',
  container.resolve(EtherealMailProvider),
);
