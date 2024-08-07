import { Hono } from 'hono';
import { sendWhatsAppMessage } from './services/whatsapp-service';
import { generateTodaysDate } from './utils/generate-todays-date';

type Env = {
	ACCOUNT_SID: string;
	AUTH_TOKEN: string;
	RECIEVER_NUMBER: string;
	SENDER_NUMBER: string;
	URL: string;
};

const app = new Hono<{ Bindings: Env }>();

app.get('/', async (c) => {
	return c.text('hello world');
});

app.get('/jobs', async (c) => {
	const todaysDate = generateTodaysDate();
	await sendWhatsAppMessage(c.env.ACCOUNT_SID, c.env.AUTH_TOKEN, c.env.RECIEVER_NUMBER, c.env.SENDER_NUMBER, todaysDate, c.env.URL);

	return c.json({ message: 'jobs route' });
});

export default app;
