import * as path from 'path';

const env = process.env.NODE_ENV || 'development';
const configPath = path.join(process.cwd(), `.env/${env}.env`);
console.log(`Loading environment from ${configPath}`);
const dotEnvOptions = {
    path: configPath,
};

export { dotEnvOptions };