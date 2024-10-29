import { getServerSession } from 'next-auth';
import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';
import authOptions from '@/lib/auth';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
const session = await getServerSession(authOptions);

if (!session || !session.user) {
return Response.json({ error: 'Unauthorized' }, { status: 401 });
}

const { email: userEmail, name: userName } = session.user;

if (!userEmail || !userName) {
return Response.json({ error: 'User data incomplete' }, { status: 400 });
}

try {
const { data, error } = await resend.emails.send({
from: 'HubPost <onboarding@resend.dev>',
to: [userEmail],
subject: `Thanks, ${userName}, for your HubPost feedback`,
react: EmailTemplate({ firstName: userName }),
});

if (error) {
return Response.json({ error }, { status: 500 });
}

return Response.json(data);
} catch (error) {
console.error(error);
return Response.json({ error: 'Internal Server Error' }, { status: 500 });
}
}