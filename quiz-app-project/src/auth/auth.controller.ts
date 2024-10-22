import { Body, Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterInstructorDto } from './dto/instructor/resgister.dto';
import { Instructor } from 'src/instructor/entities/instructor.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  //@description 
  // @param
  // @returns
  }


//auth/instructor/register
@post('/instructor/register')
`registerInstructor(@Body()dot: RegisterInstructorDto) {
  console.log(dot)
  return {};
  return this.authService.registerInstructor(dot);
}

//auth/instructor/Login
@post('/instructor/login')
loginInstructor(@Body()dot: LoginInstructorDto): Promise<{
  access_token: string;
  Instructor: partial<Instructor>;
}> {
 
  return this.authService.loginInstructor(dot);
}