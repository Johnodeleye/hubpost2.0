import PrivacyPolicy from "@/components/Privacy"
import { Metadata } from 'next';
export const metadata: Metadata = {
    title: "Privacy Policy - HubPost",
    description: "Privacy policies of HubPost",
  };

const page = () => {
    return (
        <div id="policy">
            <PrivacyPolicy/>
        </div>
    )
}

export default page