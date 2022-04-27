import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/database/PrismaService';
import { UserDTO } from './user.dto';

@Injectable()
export class CrudService {
  constructor(private prisma: PrismaService) {}

  async create(data: UserDTO): Promise<UserDTO> {
    const isUserAlreadyRegister = await this.prisma.user.findFirst({
      where: {
        email: data.email,
      },
    });

    if (isUserAlreadyRegister) {
      throw new Error('User already register!');
    }

    return await this.prisma.user.create({ data });
  }

  async findOne(id: string): Promise<UserDTO | undefined> {
    const userDetails = await this.prisma.user.findFirst({
      where: {
        id,
      },
    });

    if (!userDetails) {
      throw new Error('User not found!');
    }
    return userDetails;
  }

  async listAllUsers(): Promise<UserDTO[] | undefined> {
    return await this.prisma.user.findMany();
  }
}
