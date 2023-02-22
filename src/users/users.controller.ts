import { CreateUserDto } from './createUser.dto';
import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {

    }

    @Post('')
    createUser(@Body() newUser: CreateUserDto) {
        this.usersService.createUser(newUser)
    }
}
