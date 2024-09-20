import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function OurStory() {
    return (
        <div className="container pt-40 pb-32 grid lg:grid-cols-2 gap-10">
            <div>
                <div>
                    <Image
                        src="/Story-img.jpg" 
                        alt="Our Story Image"
                        width={900}
                        height={200}
                        className="object-cover"
                    />
                </div>
            </div>
            <div className="pl-10 pt-8">
                <p className="text-3xl font-extrabold font-mono mb-4">Our Story</p>
                <p className="text-2xl uppercase font-semibold font-mono mb-5"> Transparency | Reasonable | Efficiency </p>
                <p className="text-muted-foreground mb-8 text-pretty">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia magni, 
                    repellendus voluptatem voluptas exercitationem illo quis laborum eos
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia magni, 
                    repellendus voluptatem voluptas exercitationem illo quis laborum eos
                    illum neque id autem optio commodi suscipit quidem distinctio eaque
                    nostrum non!
                </p>
                <Button className="py-5 px-8 text-base">Read More</Button>
            </div>
        </div>
    );
}