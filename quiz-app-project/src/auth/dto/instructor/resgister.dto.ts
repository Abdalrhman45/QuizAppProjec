export class RegisterInstructorDto {
    @IsString()
    @MinLength(3)
    @MaxLength(20)
    name: string;

    @IsEmail()
    email: string;


    @IString()
    @MinLwength(8)
    password: string;
}