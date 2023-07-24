import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  AllExceptionsFilter,
  HttpExceptionFilter,
  InheritExceptionsFilter,
} from './common/filter';
import { AuthGuard } from './auth';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const { httpAdapter } = app.get(HttpAdapterHost);
  // app.useGlobalFilters(new InheritExceptionsFilter(httpAdapter));
  // app.useGlobalFilters(new HttpExceptionFilter());
  // app.useGlobalGuards(new AuthGuard());
  await app.listen(3000);
}
bootstrap();
