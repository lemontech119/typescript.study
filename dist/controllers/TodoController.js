"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var BaseController_1 = require("./BaseController");
var routing_controllers_1 = require("routing-controllers");
var TodoController = /** @class */ (function (_super) {
    __extends(TodoController, _super);
    function TodoController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TodoController.prototype.index = function () {
        return [
            {
                id: 1,
                title: 'must do',
                description: 'how to create express'
            }
        ];
    };
    TodoController.prototype.create = function () {
        return {
            data: {},
        };
    };
    TodoController.prototype.retrieve = function (todoId) {
        return {
            id: todoId,
            title: 'sdfsdf',
            description: 'blah blah'
        };
    };
    TodoController.prototype.update = function () {
        return {
            data: {},
        };
    };
    TodoController.prototype.delete = function () {
        return {
            data: {},
        };
    };
    __decorate([
        routing_controllers_1.Get()
    ], TodoController.prototype, "index", null);
    __decorate([
        routing_controllers_1.Post()
    ], TodoController.prototype, "create", null);
    __decorate([
        routing_controllers_1.Get('/:userId'),
        __param(0, routing_controllers_1.Param('userId'))
    ], TodoController.prototype, "retrieve", null);
    __decorate([
        routing_controllers_1.Put('/:userId')
    ], TodoController.prototype, "update", null);
    __decorate([
        routing_controllers_1.Delete('/:userId')
    ], TodoController.prototype, "delete", null);
    TodoController = __decorate([
        routing_controllers_1.JsonController('/todos')
    ], TodoController);
    return TodoController;
}(BaseController_1.BaseController));
exports.TodoController = TodoController;
