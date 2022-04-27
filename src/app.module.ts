import { Module } from '@nestjs/common';
import { CrudModule } from './module/crud/crud.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';

@Module({
  imports: [CrudModule, AuthModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
