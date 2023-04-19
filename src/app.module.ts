import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST || 'localhost',
      port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
      username: process.env.DATABASE_HOST,
      password: process.env.DATABASE_HOST,
      database: process.env.DATABASE_NAME,
      entities: [],
      sychronize: true,
      autoLoadEntities: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
