// PM2 configuration file for web-29d-admin
module.exports = {
  apps: [{
    name: 'web-29d-admin',
    script: 'npm',
    args: 'start',
    cwd: '/var/www/web-29d-admin',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
};
