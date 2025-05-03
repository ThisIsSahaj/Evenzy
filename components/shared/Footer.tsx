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

        <p>2025 Evenzy. All Rights reserved.</p>
        <p className="flex flex-wrap">Made with Coffee <img src="/assets/images/coffeeIcon.png" alt="" width={20} height={20} /> & Love by <a href="https://www.linkedin.com/in/this-is-sahaj-jain/" className="underline">This Is Sahaj</a></p>
      </div>
    </footer>
  )
}

export default Footer