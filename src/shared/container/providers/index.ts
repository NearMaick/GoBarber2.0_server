import { container } from 'tsyringe';
import mailConfig from '@config/mail';

import IStorageProvider from './StorageProvider/models/IStorageProvider';
import DiskStorageProvider from './StorageProvider/implementations/DiskStorageProvider';

import ImailProvider from './MailProvider/models/ImailProvider';
import EtherealMailProvider from './MailProvider/implementations/EtherealMailProvider';
import SESMailProvider from './MailProvider/implementations/SESMailProvider';

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

container.registerInstance<ImailProvider>(
  'MailProvider',
  mailConfig.driver === 'ethereal'
    ? container.resolve(EtherealMailProvider)
    : container.resolve(SESMailProvider),
);
