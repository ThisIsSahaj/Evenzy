import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href='/'>
          <Image 
            src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={38}
          />
        </Link>

        <p>© 2025 Evenzy. All Rights reserved.</p>
        {/* <p className="flex flex-wrap gap-2 items-center">
          Made with <img src="/assets/images/heartIcon.png" alt="" width={30} height={30} /> 
          + <img src="/assets/images/coffeeIcon.png" alt="" width={30} height={30} /> by <a href="https://www.linkedin.com/in/this-is-sahaj-jain/" className="underline">This Is Sahaj</a></p> */}
      </div>
    </footer>
  )
}

export default Footer