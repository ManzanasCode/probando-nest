import { CreateUserDto } from './createUser.dto';
import { Controller, Post, Body, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service'
import { User } from './user.entity';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) { }

    @Post()
    createUser(@Body() newUser: CreateUserDto):Promise<User> {
        return this.usersService.createUser(newUser)
    }

    @Get()
    getUsers():Promise<User[]> {
        return this.usersService.getUsers()
    }

    @Get(':id')
    getUser(@Param('id', ParseIntPipe ) id:number ):Promise<User> {
        return this.usersService.getUser(id)
    }
}
