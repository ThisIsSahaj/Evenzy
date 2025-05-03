import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"


interface HeaderProps {
  currentPath: string;
}



  const Header: React.FC<HeaderProps> = ({ currentPath }) => {

  const isRootPath = currentPath === "/";
  
  return (
    <header className={`w-full ${isRootPath ? "absolute" : "relative"} z-10`}>
      <div className="wrapper flex items-center justify-between">
        <div className="flex items-center gap-4 ">

          <Link href="/" className="w-36">
            <Image
              src="/assets/images/logo.png" width={128} height={38}
              alt="Evenzy logo"
            />
          </Link>
          <Link href="https://github.com/ThisIsSahaj/Evenzy" target="_blank">
          <Image
            src="/assets/images/github.png" width={38} height={28}
            alt="Github"
          />
          </Link>
        </div>

        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>



        <div className="flex w-32 justify-end gap-3">

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">
                Login
              </Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  )
}

export default Header