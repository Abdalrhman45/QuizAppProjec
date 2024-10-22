import { prismaService } from 'src/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  controllers: [AuthController],
  providers: [AuthService,prismaService],
})
export class AuthModule {}
