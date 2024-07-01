import { Hono } from 'hono';

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

app.get('/jobs', (c) => {
	return c.json({ message: 'jobs route' });
});

export default app;
