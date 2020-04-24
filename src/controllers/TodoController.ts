import { BaseController } from './BaseController';
import { JsonController, Get, Post, Put, Delete, Param } from 'routing-controllers';
import { PrismaClient } from '@prisma/client';


@JsonController('/todos')
export class TodoController extends BaseController {
  private client: PrismaClient;

  constructor(){
    super();
    this.client = new PrismaClient();
  }

  @Get()
  public index() {
    return this.client.todo.findMany();
  }

  @Get('/test')
  public async test(){
    await this.client.todo.create({
      data: {
        title: 'New Todo Item',
        description: 'do something!'
      },
    });
  }

  @Post()
  public create() {
    return {
      data: {},
    };
  }

  @Get('/:userId')
  public retrieve(@Param('userId') todoId: number) {
    return {
      id: todoId,
      title: 'sdfsdf',
      description: 'blah blah'
    };
  }

  @Put('/:userId')
  public update() {
    return {
      data: {},
    };
  }

  @Delete('/:userId')
  public delete() {
    return {
      data: {},
    };
  }
}

