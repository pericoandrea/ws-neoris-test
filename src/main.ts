import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  const configSwagger = new DocumentBuilder()
    .setTitle('Customers Resource')
    .setDescription(
      'Documentation about the APIs customer resource. It retrieve, update and delete any customer',
    )
    .setVersion('1.0')
    .addTag('customers')
    .build();
  const documentSwagger = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('doc', app, documentSwagger);

  await app.listen(process.env.PORT || 3000);

  console.log(`Application is running on: ${await app.getUrl()}`, 'Main');
}
bootstrap();
