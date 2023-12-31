import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheModule } from './cache/cache.module';

@Module({
  imports: [
    CacheModule.register({ host: 'localhost', port: '6379', db: 0 }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
