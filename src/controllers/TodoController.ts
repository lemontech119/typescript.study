import { BaseController } from './BaseController';
import { JsonController, Get, Post, Put, Delete, Param } from 'routing-controllers';

@JsonController('/todos')
export class TodoController extends BaseController {
  @Get()
  public index() {
    return[
      {
        id: 1,
        title: 'must do',
        description: 'how to create express'
      }
    ]
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

