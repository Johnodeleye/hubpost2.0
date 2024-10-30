import Learn from "@/components/Learn"
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Learn More - HubPost',
};

const page = () => {
    return (
        <div>
            <Learn/>
        </div>
    )
}

export default page