"use client"

import { Space } from "@mantine/core"
import Divider from "@mui/material/Divider"
import Link from "next/link"

const StyledNavBar = () => {
    return (
        <div id="navbar">
            <div className='flex flex-row gap-x-8 text-xl my-4 justify-start mx-10 lg:mx-40 xl:mx-80 lg:space-x-64'>
                <Link className='hover:text-stone-700 font-bold' href="/" prefetch={true}>{'zakuan'}</Link>
                <div className="flex flex-row gap-x-8">
                    <Link className='hover:text-stone-700' href="/about" prefetch={true}>{'About'}</Link>
                    <Link className='hover:text-stone-700' href="/work" prefetch={true}>{'Work'}</Link>
                </div>
            </div>
            <Divider className='bg-white opacity-70' orientation='horizontal' flexItem={true}></Divider>
        </div>
    )
}

export default StyledNavBar