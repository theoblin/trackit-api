import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger'
async function bootstrap() {

  const app = await NestFactory.create(AppModule);



  const options = new DocumentBuilder()
      .setTitle("Trackit API")
      .setDescription("Trackit API")
      .build()

  const document = SwaggerModule.createDocument(app,options);
  SwaggerModule.setup('api', app, document)


  await app.listen(5000);
}

export class main {

}

bootstrap();
