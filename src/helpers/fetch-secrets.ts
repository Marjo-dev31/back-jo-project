import {
  SecretsManagerClient,
  GetSecretValueCommand,
} from '@aws-sdk/client-secrets-manager';

const ISPRODUCTION = true;

export const fetchSecrets = async (secretName: string) => {
  if (ISPRODUCTION) {
    const client = new SecretsManagerClient({
      region: 'eu-west-3',
    });
    try {
      const response = await client.send(
        new GetSecretValueCommand({
          SecretId: secretName,
          VersionStage: 'AWSCURRENT',
        }),
      );
      return JSON.parse(response.SecretString);
    } catch (error) {
      throw error;
    }
  } else {
    const response = {
      MYSQL_DATABASE: process.env.MYSQL_DATABASE,
      MYSQL_HOST: process.env.MYSQL_HOST,
      MYSQL_PORT: process.env.MYSQL_PORT,
      MYSQL_USERNAME: process.env.MYSQL_USERNAME,
      MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
      SECRET_TOKEN: process.env.SECRET_TOKEN,
    };
    return response;
  }
};
