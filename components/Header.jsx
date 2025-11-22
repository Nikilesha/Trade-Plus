import Link from 'next/link';
import Image from 'next/image';
import NavItems from "@/components/NavItems";
import UserDropdown from "@/components/UserDropdown";

const Header = () => {
    return (
        <header className="sticky top-0 header">
            <div className="container header-wrapper flex items-center justify-between py-4">
                <div className="logo-position">
                    <Link href="/">
                        <Image
                            src="/public_assets/assets/icons/new_logo.svg"
                            alt="TradePlus logo"
                            width={140}
                            height={40}
                            loading="eager"
                            className="cursor-pointer"
                        />
                    </Link>
                </div>

                <nav className="hidden sm:block">
                    <NavItems />
                </nav>

                <UserDropdown />
            </div>
        </header>

    )
}
export default Header;
