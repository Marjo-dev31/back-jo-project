import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async (configService: ConfigService) => {
      const secrets = configService.get('database');
      const dataSource = new DataSource({
        type: 'mysql',
        host: secrets.host,
        port: secrets.port,
        username: secrets.user,
        password: secrets.password,
        database: secrets.name,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        // make sure is false in production
        synchronize: false,
      });

      return dataSource.initialize();
    },
    inject: [ConfigService],
  },
];
