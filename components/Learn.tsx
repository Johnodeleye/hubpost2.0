import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion';
import Image from 'next/image';
import { files } from '@/app/assets/files';
import Link from 'next/link';
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function LearnMore() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="hero py-16 bg-gray-800 flex flex-col items-center" id='download'>
        <h1 className="text-4xl font-bold text-center text-green-400">Learn More About HubPost</h1>
        <p className="text-lg text-center mt-4 font-bold italic">Spark🔥, Connect👨‍💻, Ignite🧨!</p>
        <Image src={files.logo} alt="HubPost Logo" className="w-32 mx-auto mt-8" />
        <div className="flex justify-center mt-8">
          <a href="#" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-1 rounded">
            Join the Community
          </a>
          <a href="https://drive.google.com/uc?export=download&id=1Dnbi51jKaPRVWYQLkVup0GH50Y0PK_I6" 
             download="HubPost.apk" 
             className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-1 rounded ml-4">
            Download the App
          </a>
        </div>
        <div className="mobile-note text-sm text-gray-400 text-center mt-2">
          <marquee behavior="scroll" direction="left">
            Note: Download is exclusively for mobile devices.
          </marquee>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features py-10 bg-gray-800">
        <h2 className="text-2xl font-bold text-center text-green-400">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="feature-card p-6 bg-gray-700 rounded-lg">
            <h3 className="text-xl font-bold">Connect with People</h3>
            <p>Meet like-minded individuals and build lasting relationships.</p>
          </div>
          <div className="feature-card p-6 bg-gray-700 rounded-lg">
            <h3 className="text-xl font-bold">Share Your Ideas</h3>
            <p>Discuss topics, share your thoughts, and inspire others.</p>
          </div>
          <div className="feature-card p-6 bg-gray-700 rounded-lg">
            <h3 className="text-xl font-bold">Learn Something New</h3>
            <p>Access a wealth of knowledge and resources.</p>
          </div>
          <div className="feature-card p-6 bg-gray-700 rounded-lg">
            <h3 className="text-xl font-bold">Ignite Your Purpose</h3>
            <p>Let your mind be shifted through HubPost's Feed</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works py-16 bg-gray-800">
        <h2 className="text-2xl font-bold text-center text-green-400">How It Works</h2>
        <ol className="list-decimal list-inside ml-8">
          <li>Sign Up</li>
          <li>Explore Categories</li>
          <li>Join Discussions</li>
          <li>Share Your Thoughts</li>
        </ol>
      </section>

      {/* FAQ Section */}
      <section className="faq py-16 bg-gray-800">
        <h2 className="text-2xl font-bold text-center text-green-400">Frequently Asked Questions </h2>
        <Accordion type="single" collapsible className="lg:px-10 md:px-10 px-5">
          <AccordionItem value="item-1">
            <AccordionTrigger>How do I create an account?</AccordionTrigger>
            <AccordionContent>
              To create an account, simply click the <Link href={'/sign-in'} className="text-green-400">Sign In</Link> button on the navbar and follow the on-screen instructions.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is HubPost free to use?</AccordionTrigger>
            <AccordionContent>
              Yes, HubPost is completely free to use.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What kind of content can I share on HubPost?</AccordionTrigger>
            <AccordionContent>
              You can share a variety of content on HubPost, including:
              <ul>
                <li>Articles and blog posts</li>
                <li>Code snippets and tutorials</li>
                <li>Personal experiences and stories</li>
                <li>Questions and discussions</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>How can I connect with other users?</AccordionTrigger>
            <AccordionContent>
              You can connect with other users by:
              <ul>
                <li>Following them</li>
                <li>Commenting on their posts</li>
                <li>Getting their contact information from their profile</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>How can I get help?</AccordionTrigger>
            <AccordionContent>
              If you have any questions or need help, you can:
              <ul>
                <li>Check out the FAQ section</li>
                <li>Search the forums</li>
                <li>Contact support</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Is HubPost safe for kids?</AccordionTrigger>
            <AccordionContent>
              Yes, HubPost is a safe and welcoming community for people of all ages. We have strict moderation policies in place to protect our users.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>What are the benefits of joining HubPost?</AccordionTrigger>
            <AccordionContent>
              There are many benefits to joining HubPost, including:
              <ul>
                <li>Connecting with like-minded people</li>
                <li>Learning new skills</li>
                <li>Sharing your knowledge and expertise</li>
                <li>Building your reputation</li>
                <li>Having fun!</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
      <AccordionTrigger>Where can I find HubPost Release Notes?</AccordionTrigger>
      <AccordionContent>
        You can find the latest HubPost release notes <Link href={'#release'} className='text-green-400 font-bold '>Here</Link>
      </AccordionContent>
    </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger>How do I get started?</AccordionTrigger>
            <AccordionContent>
              Getting started with HubPost is easy! Simply <Link className='text-green-400 font-bold' href={'/sign-in'}>create an account</Link> and start exploring.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

{/* About Section */}
<section className="about py-10 bg-gray-800">
  <h2 className="text-2xl font-bold text-center text-green-400">About HubPost</h2>
  <p className="text-gray-300 text-left ml-2 px-4">
    HubPost is more than just a community - it's a launchpad for your success!   Are you a developer seeking collaboration and coding challenges? An entrepreneur looking to grow your business and network? Or perhaps an innovator with ideas to share and a desire to learn from others?  HubPost is the perfect platform for you! 

    **Connect. Grow. Succeed.**

    On HubPost, you can:
  </p>
  <ul className="list-disc list-inside pl-4 ml-2 text-gray-300">
    <li>Advertise your products and services</li>
    <li>Access exclusive resources and tutorials</li>
    <li>Participate in coding challenges and events</li>
    <li>Expand your professional network and find potential clients</li>
    <li>Gain valuable exposure and build your reputation</li>
  </ul>
  <p className="text-gray-300 text-left ml-2 px-4">
    Join the vibrant HubPost Community today and unlock endless opportunities! <Link href={'/sign-in'} className='text-green-400 font-bold'>Sign up now.</Link>

    {''}{''}Follow us on social media:
  </p>
  <div className="flex justify-center ml-2 mr-5 lg:justify-start lg:ml-5">
    <a href="" className="mr-4 text-white hover:text-gray-400">
      <Image src={files.logo} className="w-auto h-8 mr-2" alt='hubpost' />
    </a>
    <a href="x.com/pthefuture_" className="mr-4 text-white hover:text-green-400">
      <FaTwitter className="w-6 h-8" />
    </a>
    <a href="#" className="mr-4 text-white hover:text-green-400">
      <FaFacebook className="w-6 h-8" />
    </a>
    <a href="#" className="mr-4 text-white hover:text-green-400">
      <FaLinkedin className="w-6 h-8" />
    </a>
    <a href="instagram.com/@perspicacious.dev" className="mr-4 text-white hover:text-green-400">
      <FaInstagram className="w-6 h-8" />
    </a>
    <a href="https://whatsapp.com/channel/0029Vajn8TuFcovziHg7rM2B" className="text-white hover:text-green-400">
      <FaWhatsapp className="w-6 h-8" />
    </a>
  </div>

  <p className="text-green-400 text-left ml-5 px-4 mt-5 py-1 italic font-bold">
    **Founded by <Link href={'/authors/johnayomide920@gmail.com'} className='underline'>Odeleye John</Link>, young visionary leader and tech entrepreneur passionate about empowering individuals and fostering a thriving tech community.**
  </p>
</section>

      {/* Release Notes Section */}
      <section className="release-notes py-10 bg-gray-800" id='release'>
        <h2 className="text-2xl font-bold text-center text-green-400">HubPost Release Notes</h2>
        <p className="text-gray-300 ml-2 px-4 text-center">
          Stay up-to-date on the latest features and improvements to HubPost. View the release notes for:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 lg:px-7">
          <div className="release-note lg:px-5">
            <h3 className="text-xl font-bold">v1.0 (September 2024)</h3>
            <p>Initial release with text-only posting.</p>
          </div>
          <div className="release-note">
            <h3 className="text-xl font-bold">v2.0 (October 2024)</h3>
            <p>New features: image posting, link adding, post editing, profile customization, and customized feed.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta py-1 pb-5 bg-gray-800">
        <h2 className="text-2xl font-bold text-center text-green-400">Join the HubPost Channel</h2>
        <p className="text-lg text-center text-gray-300 mt-2 font-bold italic">Join HubPost channel to get exclusive, fastest and latest updates about HubPost...</p>
        <p className='text-lg text-center text-green-400 mt-4 font-bold italic'>Let's Bring the Purpose to Life, Be part of the success story, Be part of something great.</p>
        <p className='text-lg text-center text-green-400 mt-2 font-bold italic cursor-pointer'>
          <Link href={'/authors/johnayomide920@gmail.com'} className='underline'>~Odeleye John | Founder @ HubPost</Link>
        </p>
        <div className="flex justify-center mt-8">
          <a href="https://whatsapp.com/channel/0029Vajn8TuFcovziHg7rM2B" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Join Now
          </a>
          </div>
          </section>
          </div>
  )
}