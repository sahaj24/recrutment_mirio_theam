import { checkDBHealth } from '../../../utils/db.js';

export async function GET() {
	try {
		const dbHealth = await checkDBHealth();

		const healthStatus = {
			status: dbHealth.status === 'healthy' ? 'ok' : 'error',
			timestamp: new Date().toISOString(),
			services: {
				database: dbHealth,
			},
		};

		const statusCode = dbHealth.status === 'healthy' ? 200 : 503;

		return new Response(JSON.stringify(healthStatus), {
			status: statusCode,
			headers: {
				'Content-Type': 'application/json',
			},
		});
	} catch (error) {
		return new Response(
			JSON.stringify({
				status: 'error',
				timestamp: new Date().toISOString(),
				services: {
					database: {
						status: 'unhealthy',
						message: error.message,
					},
				},
			}),
			{
				status: 503,
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
	}
}
