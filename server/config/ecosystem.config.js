module.exports = {
  apps: [
    {
      name: 'API',
      script: 'dist/index.js',
      // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
      instances: 1,
      autorestart: true,
      watch: true,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
    {
      name: 'typescript watcher',
      script: 'yarn watch',
      instances: 1,
      autorestart: true,
      watch: 'tsconfig.json',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
