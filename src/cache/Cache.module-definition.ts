import { ConfigurableModuleBuilder } from '@nestjs/common';

export interface ICacheModuleOptions {
  ttl?: number;
  host: string;
  port: string;
  db: number;
}

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder().build();
