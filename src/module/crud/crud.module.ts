import { Module } from '@nestjs/common';
import { CrudService } from './crud.service';
import { CrudController } from './crud.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [CrudController],
  providers: [CrudService, PrismaService],
  exports: [CrudService],
})
export class CrudModule {}
