import { Module } from '@nestjs/common';
import { ControllerModule } from './controller/controller.module';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';

@Module({
  imports: [ControllerModule],
  providers: [ReportsService],
  controllers: [ReportsController]
})
export class ReportsModule {}
