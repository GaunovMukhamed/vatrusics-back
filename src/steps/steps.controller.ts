import { Controller, Get } from '@nestjs/common';

@Controller('steps')
export class StepsController {
  @Get()
  getSteps(): any {
    return { steps: 'asd' };
  }
}
