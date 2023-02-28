import { Controller, Get } from '@nestjs/common';

@Controller('football')
export class FootballController {

    @Get("leagues")
    getLeagues(): string {
        return ""
    }

    @Get("teams")
    getTeams(): string {
        return ""
    }

    
}
