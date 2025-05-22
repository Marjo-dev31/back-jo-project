import { fetchSecrets } from './fetch-secrets';

export default async () => {
  const secrets = await fetchSecrets('prod-jodb');
  return {
    port: +secrets.PORT,
    database: {
      host: secrets.MYSQL_HOST,
      port: +secrets.MYSQL_PORT,
      name: secrets.MYSQL_DATABASE,
      password: secrets.MYSQL_PASSWORD,
      user: secrets.MYSQL_USERNAME,
    },
  };
};
