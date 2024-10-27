import Link from "next/link";

function RightSidebar() {
    const quicks = [
        {
            title: 'Learn More',
            link: '/LearnMore',
        },
        {
            title: 'Join Community',
            link: 'https://whatsapp.com/channel/0029Vajn8TuFcovziHg7rM2B.'
        },
        {
            title: 'Blog',
            link: '/authors/info.futurehub1@gmail.com'
        },
        {
            title: 'Support',
            link: 'http://www.'
        },
    ]
    return (
        <section className="custom-scrollbar rightsidebar">
            <div className="flex flex-1 flex-col justify-start">
                <h3 className="text-heading4-medium text-green-500">Suggested Links</h3>
                {quicks.map(details => (
                    <>
                    <div className="text-base-medium mt-2 text-left hover:bg-green-500 py-1 rounded-md" key={details.title}>
                        <a href={details.link}>🟢{details.title}</a>
                    </div>
                    <div className=" border-b border-gray-500 py-1" />
                    </>
                ))}
            </div>

            <div className="flex flex-1 flex-col justify-start">
                <h3 className="text-heading4-medium text-green-500">Suggested Users</h3>
            </div>
        </section>
    )
}

export default RightSidebar;