import { Module } from '@nestjs/common';
import { RedisModule } from '@songkeys/nestjs-redis';
import { isNil } from 'lodash';
import {
  ConfigurableModuleClass,
  ICacheModuleOptions,
  MODULE_OPTIONS_TOKEN,
} from './Cache.module-definition';

@Module({
  imports: [
    RedisModule.forRootAsync({
      inject: [MODULE_OPTIONS_TOKEN],
      useFactory: async (options: ICacheModuleOptions) => ({
        config: {
          host: options.host,
          port: parseInt(options.port),
          ttl: isNil(options.ttl) ? 0 : options.ttl,
          ...(!isNil(options.db) && { db: options.db }),
        },
      }),
    }),
  ],
})
export class CacheModule extends ConfigurableModuleClass {}
