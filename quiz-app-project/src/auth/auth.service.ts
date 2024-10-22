import { ConflictException, Injectable,NotFoundException,PayloadTooLargeException,UnauthorizedException } from '@nestjs/common';
import { RegisterInstructorDto } from './dto/instructor/resgister.dto';
import { prismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcryptjs';
import { LoginInstructorDto } from './dto/instructor/login.dto';
import { JwtService } from '@nestjs/jwt';
import { Instructor } from 'prisma/client';
import { access } from 'fs';
import { promises } from 'dns';


@Injectable()

export class AuthService {

    constructor(private readonly prisma :prismaService,private readonly jwtService: JwtService) {}
        
    async registerInstructor(dot:RegisterInstructorDto){

        const existingInstructor = await this.prisma.instructor.findUnique({
            where: {
                email: dot.email
            },
        })

        if (existingInstructor) {
            throw new ConflictException('Instructor already exists');
        }


        const Instructor = await this.prisma.instructor.create({
            data: {...dot , password: hashedPassword}
        
        select: {
            id: true  , 
            name: true,
            email: true,
            createdAt: true,
            updatedAt: true,
        },


        async LoginInstructorDto(dot:LoginInstructorDto):promises</Instructor>
        {
            where: {
                email: dot.email,
            },
        }

        const isPasswordValid = await bcrypt.compare(dot.password, hashedPassword);

        if(!isPasswordValid){
            throw new UnauthorizedException('Instructor not found');
        }


        const Payload = {id: Instructor.id , name: Instructor.name , email: Instructor.email};

        const token = this.jwtService.sign(Payload);
        return{
            access_Token:  token,
        }
    };
}
