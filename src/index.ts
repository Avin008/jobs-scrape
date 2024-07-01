import { Hono } from 'hono';
import { sendWhatsAppMessage } from './services/whatsapp-service';

type Env = {
	ACCOUNT_SID: string;
	AUTH_TOKEN: string;
	RECIEVER_NUMBER: string;
	SENDER_NUMBER: string;
};

const app = new Hono<{ Bindings: Env }>();

app.get('/', (c) => {
	return c.text('hello world');
});

app.get('/jobs', async (c) => {
	await sendWhatsAppMessage(c.env.ACCOUNT_SID, c.env.AUTH_TOKEN, c.env.RECIEVER_NUMBER, c.env.SENDER_NUMBER, 'hello world');

	return c.json({ message: 'jobs route' });
});

export default app;
