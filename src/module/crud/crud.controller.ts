import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CrudService } from './crud.service';
import { UserDTO } from './user.dto';

@Controller('crud')
export class CrudController {
  constructor(private readonly crudService: CrudService) {}

  @Post()
  create(@Body() data: UserDTO) {
    return this.crudService.create(data);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.crudService.findOne(id);
  }

  @Get()
  listAllUsers() {
    return this.crudService.listAllUsers();
  }
}
