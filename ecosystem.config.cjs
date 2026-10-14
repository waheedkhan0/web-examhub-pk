module.exports = {
  apps: [
    {
      name: 'examhub',
      script: './dist/server/entry.mjs',
      cwd: '/home/ubuntu/web-examhub-pk',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 4321,
        HOST: '127.0.0.1',
      },
      max_memory_restart: '350M',
      error_file: '/home/ubuntu/.pm2/logs/examhub-error.log',
      out_file: '/home/ubuntu/.pm2/logs/examhub-out.log',
      time: true,
    },
  ],
};
