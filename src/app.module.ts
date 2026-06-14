import { Module } from '@nestjs/common';
import { StepsModule } from './steps/steps.module';

@Module({
  imports: [StepsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
