import { Icon } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { BiArrowBack } from 'react-icons/bi'

 const Page = () => {
  return (
    <div
    className={` flex items-center min-h-screen flex-col mb-10 p-2 w-11/12 md:w-3/4 text-white`}
  >

    <div
    id="skills"
    className="animate-fade-in-bottom pb-20 text-left xl:w-11/12 md:w-full sm:w-4/5 w-11/12"
  >
            <h1 className=" text-center md:text-6xl text-2xl  font-bold text-green-400 mb-4">Privacy Policy for Online Portfolio</h1>

        <h2 className="text-gray-400 md:text-xl text-center text-base mb-4">This Privacy Policy describes how personal information is collected, used, and protected when you access and use my online portfolio.</h2>
<br />
        <ol className="list-decimal pl-6">
            <li className=" md:text-2xl text-base text-white font-light mb-2"> <strong className="text-green-400 font-bold">Information Collection:</strong> When accessing my online portfolio, I only collect your email address when you choose to contact us through the contact form available on the Ibsite. I do not collect any other personal information without your explicit consent.</li> <br />
            <li className=" md:text-2xl text-base text-white font-light mb-2"> <strong className="text-green-400 font-bold">Use of Information:</strong> The sole purpose of collecting your email address is to enable communication betIen you and my team in response to the messages you send us through the contact form. I do not share, sell, or transfer your personal information to third parties without your consent, except as required by law.</li> <br />
            <li className=" md:text-2xl text-base text-white font-light mb-2"> <strong className="text-green-400 font-bold">Protection of Information:</strong> I am committed to protecting your personal information and employ appropriate security measures to ensure that your information is not accessed, disclosed, altered, or destroyed without authorization.</li> <br />
            <li className=" md:text-2xl text-base text-white font-light mb-2"> <strong className="text-green-400 font-bold">Consent:</strong> By submitting your message through the contact form on my online portfolio, you consent to the collection and use of your personal information as described in this Privacy Policy.</li> <br />
            <li className=" md:text-2xl text-base text-white font-light mb-2"> <strong className="text-green-400 font-bold">Information Retention:</strong> I do not retain your personal information for longer than necessary to fulfill the purposes for which it was collected, unless required by law.</li> <br />
            <li className=" md:text-2xl text-base text-white font-light mb-2"> <strong className="text-green-400 font-bold">Changes to the Privacy Policy:</strong> I reserve the right to update this Privacy Policy periodically. I recommend that you review this Privacy Policy occasionally to be aware of any changes.</li> <br />
            <li className=" md:text-2xl text-base text-white font-light mb-2"> <strong className="text-green-400 font-bold">Contact:</strong> If you have any questions or concerns about this Privacy Policy or the use of your personal information, please contact us through the email provided on my online portfolio.</li> <br />
        </ol>
        
        <p className=" text-center md:text-2xl text-base mt-4 text-green-400">By using my online portfolio, you agree to the terms and conditions of this Privacy Policy. <br /> <span className='ml-2 underline font-bold'> <Link href='/' passHref> Back to Home</Link></span></p>
  </div>
  </div>
  )
}
export default Page