import CreatePostForm from "@/components/CreatePostForm";
import { getServerSession } from "next-auth"
import authOptions from '@/lib/auth';
import { redirect } from "next/navigation";
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Create New - HubPost',
};
export default async function page() {
    const session = await getServerSession(authOptions);

    console.log(session);

    if (!session) {
        redirect('/sign-in')
    }
    
    return (
        <div>
            <CreatePostForm/>
        </div>
    )
}
1