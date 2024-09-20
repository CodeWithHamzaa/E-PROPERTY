import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="pt-20 bg-slate-800 text-white">
            <div className="container flex flex-col sm:flex-row justify-between gap-6">
                <div>
                    <Image src="/Newlogo.png" 
                        alt="Logo Image"
                        width={250}
                        height={100} 
                        className="-ml-14 -mb-16"
                    />
                    <p className="max-w-lg text-slate-300 mt-1">A great platform to buy, sell and rent your properties without any hesitation.</p>
                </div>

                <div>
                    <p className="text-lg font-semibold">CONTACTS</p>
                    <address className="text-slate-300 mt-1">
                        <MapPin className="inline-block w-5 h-5 mt-0.5"/>
                        21st street DHA Phase 2, 
                        <br /> Karachi, Pakistan
                    </address>
                </div>
            </div>
            <p className="text-center pt-20 pb-4 text-slate-400">
                @2024 E-PROPERTY Design by <Link href="/"><span className="text-[#ab82ff] font-medium">CodeWithHamza</span></Link>
            </p>
        </footer>
    );
}