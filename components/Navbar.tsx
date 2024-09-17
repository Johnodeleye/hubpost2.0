import Image from "next/image"
import Link from "next/link"
import Logo from '@/app/assets/Logo White.png'
const Navbar = () => {
    return (
        <div className="flex justify-between pb-4 border-b mb-4 border-gray-600">
            <div>
                <Link href={'/'}>
                <Image src={Logo} width={110} height={110} alt="hubpost"/>
                {/* <h1 className="text-4xl font-bold tracking-tighter text-green-400">HubPost</h1> */}
                </Link>
                <p className="whitespace-nowrap text-sm font-semibold">
                    Spark💖, Connect🤑, and Ignite🔥
                </p>
            </div>
            <div className="flex items-center">
                <Link className="btn" href={'/sign-in'}>Sign In</Link>
            </div>
        </div>
    )
}

export default Navbar