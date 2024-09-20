import { SearchForm } from "./SearchForm";
export function Hero(){
    return (
        <div className="min-h-screen hero flex justify-center items-center">
            <div className="max-w-4xl flex flex-col gap-6 items-center pb-10">
                <div className="space-y-4">
                    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-center text-white">
                        Easy Way to Find your Dream Home
                    </h1>
                    <p className="text-slate-300 text-center">
                        Discover our extensive listings, with a focus on affordable, high-quality properties.
                    </p>
                </div>
                <SearchForm />
            </div>
        </div>
    );
}