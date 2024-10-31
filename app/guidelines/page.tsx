import CommunityGuidelines from "@/components/CommunityGuide"
import { Metadata } from 'next';
export const metadata: Metadata = {
    title: "Community Guidelines - HubPost",
    description: "Privacy policies of HubPost",
  };
const page = () => {
    return (
        <div>
            <CommunityGuidelines/>
        </div>
    )
}

export default page