import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Link from "next/link";
import { title } from "process";
const navList = [
    {
        title: 'Home',
        href: '/',
    },
    {
        title: 'About',
        href: '/about',
    },
    {
        title: 'Contact',
        href: '/contact',
    },
]
export function Navigation(){
    return (
        <nav className="fixed w-screen px-4 top-2 z-50">
            <div className="py-3 container flex items-center justify-between bg-background z-50 rounded-[10px] border border-gray-400">
            <Link href="/"><p className="font-bold italic">E-PROPERTY</p></Link>
                <ul className="flex items-center gap-4">
                    {navList.map(nav => {
                        return (
                            <li key={nav.title}>
                                <Link className="text-muted-foreground hover:text-primary hover:underline" href={nav.href}>{nav.title}</Link> 
                            </li>
                        );
                    })}
                </ul>

                <div className="py-[10px] px-4 rounded-full border bg-gray-400 text-white">
                    <Avatar>
                        <AvatarImage src="" />
                        <AvatarFallback>H</AvatarFallback>
                    </Avatar>
                </div>
            </div>
            
        </nav>
    );
}