import {ReactNode} from "react";
import Link from "next/link";
import Image from "next/image";

const Layout = ({children}:{children:ReactNode}) => {
    return (
        <main className="auth-layout">
            <section className="auth-left-section scrollbar-hide-default">
                <Link href="/" className="auth-logo">
                    <Image src="/public_assets/assets/icons/new_logo.svg" alt="tradeplus logo" width={140} height={32} className="h-8 w-auto"></Image>
                </Link>

                <div className="pb-6 lg:pb-8 flex-1">{children}</div>

            </section>

        </main>
    )
}
export default Layout
