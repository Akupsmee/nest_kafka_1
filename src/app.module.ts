import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KafkaModule } from './kafka/kafka.module';
import { TestConsumer } from './test.consumer';
import { InquiryUserNotificatorModule } from './inquiry-user-notificator/inquiry-user-notificator.module';
import { InquiryUserNotificatorModule } from './inquiry-user-notificator/inquiry-user-notificator.module';

@Module({
  imports: [KafkaModule, InquiryUserNotificatorModule],
  controllers: [AppController],
  providers: [AppService, TestConsumer],
})
export class AppModule {}
