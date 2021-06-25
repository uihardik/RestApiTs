import { Controller, Get,Post,Body, Res, HttpStatus, Query, UseFilters } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';
import {HttpExceptionFilter} from './http-exception.filter'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('users')
  @UseFilters(HttpExceptionFilter)

  async findMe() {
    let resData = await this.appService.userDetail();
    return resData
  }
  @Post('findUser')
  async login(@Body('id') userId: number): Promise<any> {
    return await this.appService.getUser(userId);
  }
}
