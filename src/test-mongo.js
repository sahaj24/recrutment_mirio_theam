import connectDB, { checkDBHealth } from './utils/db.js';
import ParticipantUser from './utils/models/recruitment.model.js';

async function testMongoConnection() {
	console.log('🔍 Testing MongoDB Connection...\n');

	try {
		// Test connection
		console.log('1. Connecting to MongoDB...');
		await connectDB();
		console.log('✅ Successfully connected to MongoDB\n');

		// Test health check
		console.log('2. Running health check...');
		const healthStatus = await checkDBHealth();
		console.log('Health Status:', healthStatus);
		console.log('✅ Health check completed\n');

		// Test collection access
		console.log('3. Testing collection access...');
		const collectionName = ParticipantUser.collection.collectionName;
		const dbName = ParticipantUser.db.databaseName;
		console.log(`Database: ${dbName}`);
		console.log(`Collection: ${collectionName}`);

		// Test if we can query the collection
		const count = await ParticipantUser.countDocuments();
		console.log(`Documents in collection: ${count}`);
		console.log('✅ Collection access successful\n');

		console.log('🎉 All tests passed! MongoDB is properly configured.');
	} catch (error) {
		console.error('❌ MongoDB connection test failed:', error.message);
		console.error('Full error:', error);
	} finally {
		process.exit(0);
	}
}

testMongoConnection();
