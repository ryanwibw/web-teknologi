import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import {
    AtSymbolIcon,
    KeyIcon,
    //ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from '@/app/ui/button';

export default function Page() {
    return (
        //baris kode header
        <main className="flex min-h-screen flex-col p-6">
            <div className="flex h-20 shrink-e items-end rounded-lg bg-blue-500 p-4 md:h-52">
                <Image
                    src="/logo/uia-logo.png"
                    width={500}
                    height={360}
                    className="hidden md:block"
                    alt="Banner UIA"
                />
            </div>

            {/*baris kode form register*/}
            <div className="relative">
            <div className="mx-auto max-w-2xl">
        <form className="space-y-3">
            <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
                {/* Judul Form */}
                <h1 className={`${lusitana.className} mb-3 text-2xl`}>
                    Please register to continue
                </h1>
                <div className="w-full">
                    {/* Input Email */}
                    <div>
                        <label
                            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Enter your email address"
                                required
                            />
                            <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>

                    {/* Input Password */}
                    <div className="mt-4">
                        <label
                            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Enter password"
                                required
                                minLength={6}
                            />
                            <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                </div>
                {/* Tombol Submit */}
                <Button className="mt-4 w-full">
                    Register <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
                </Button>
            </div>
        </form>
    </div>    

            </div>



        </main>
    );
}