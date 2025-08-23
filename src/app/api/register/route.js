import connectDB from '../../../utils/db.js';
import ParticipantUser from '../../../utils/models/recruitment.model.js';

export async function POST(req) {
	try {
		await connectDB();
		const body = await req.json();

		const user = await ParticipantUser.create(body);
		return new Response(JSON.stringify({ success: true, user }), {
			status: 201,
		});
	} catch (error) {
		console.error('Error in register route:', error);
		return new Response(
			JSON.stringify({
				success: false,
				error: error.message,
			}),
			{ status: 400 }
		);
	}
}
