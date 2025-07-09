import { Body, Controller, Get, Param, Patch, Post, Query, Delete, Put } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';
@Controller('ninjas')
export class NinjasController {
    constructor(private readonly ninjasService: NinjasService){}

    //GET/ninjas?weapon=fast --> []
    @Get()
    getNinjas(@Query('weapon') weapon: "stars" | "nunchucks"){
        
        return this.ninjasService.getNinjas(weapon)
    
    }

    //GET/ninjas/:id
    @Get(':id')
     getNinja( @Param('id') id:string ){
        return this.ninjasService.getNinja(+id);   
    }
    
    //post/ninjas
    @Post()
    createNinja(@Body() createNinjaDto: CreateNinjaDto){
        return this.ninjasService.createNinja(createNinjaDto)
    };

    //put/ninjas/:id
    @Put(':id')
     updatetNinja( @Param('id') id:string, @Body() updateNinjaDto: UpdateNinjaDto){
        return this.ninjasService.updateNinja(+id, updateNinjaDto)
    }

    @Delete(':id')
    removeNinja(@Param('id') id:string ){
        return this.ninjasService.removeNinja(+id)
    }

    
}
