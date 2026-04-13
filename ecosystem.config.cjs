// this file is used for pm2 deployment
module.exports = {
	apps: [
		// {
		// 		name: 'sand-app',
		// 		script: 'build/index.js',
		// 		wait_ready: false,
		// 		kill_timeout: 10000,
		// 		listen_timeout: 10000,
		// 		// Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/#ecosystem-file
		// 		args: '',
		// 		// instances: 'max',
		// 		// exec_mode: 'cluster',
		// 		autorestart: true,
		// 		watch: false,
		// 		max_memory_restart: '1G',
		// 		env: {
		// 				PORT: 6542,
		// 				NODE_ENV: 'development',
		// 				PROTOCOL_HEADER: 'x-forwarded-proto',
		// 				HOST_HEADER: 'x-forwarded-host',
		// 				SHUTDOWN_TIMEOUT: 5
		// 		}
		// },
		{
			name: 'trading-card-vault-marketing',
			script: 'build/index.js',
			wait_ready: false,
			kill_timeout: 10000,
			listen_timeout: 10000,
			// Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/#ecosystem-file
			args: '',
			instances: '1',
			exec_mode: 'cluster',
			autorestart: true,
			watch: false,
			max_memory_restart: '1G',
			env: {
				PORT: 5742,
				PROTOCOL_HEADER: 'x-forwarded-proto',
				HOST_HEADER: 'x-forwarded-host',
				SHUTDOWN_TIMEOUT: 5
			}
		}
	],
	deploy: {
		// sand: {
		// 		user: 'dev',
		// 		host: ['45.56.127.95'],
		// 		ref: 'origin/dev',
		// 		repo: 'git@github.com:Dart353/trading-card-vault-rest.git',
		// 		path: '/home/dev/sand/trading-card-vault-app',
		// 		'post-deploy':
		// 				'pnpm i && pnpm build:dev && pm2 startOrReload ecosystem.config.cjs --only sand-app'
		// },
		prod: {
			user: 'dev',
			host: ['45.56.127.95'],
			ref: 'origin/main',
			repo: 'git@github.com:Dart353/trading-card-vault-marketing.git',
			path: '/home/dev/prod/trading-card-vault-marketing',
			'post-deploy':
				'pnpm i && pnpm build && pm2 startOrReload ecosystem.config.cjs --only trading-card-vault-marketing'
		}
	}
};
