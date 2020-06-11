import 'reflect-metadata';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
class ItemController {
    constructor() {}
    async confirm (ctx) {}

}

module.exports = new ItemController();