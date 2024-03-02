import React from 'react'
import SectionHeadline from './SectionHeadline'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import Image from 'next/image'
import Link from 'next/link'

function BrowseItems() {
    return (
        <div className='py-20'>
            <SectionHeadline styles='py-12' title='Looking to rent? Browse items' />
            <div className='flex flex-col sm:flex-row gap-4'>
                <Card className='flex flex-col items-center hover:shadow-md'>
                    <CardHeader>
                        <CardTitle> Camera Gear </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Image src={'/rent-camera-gear.jpg'} alt='Camera Gear' width={200} height={100} />
                    </CardContent>
                    <CardFooter>
                        <Link href={'#'}> Browse Item &rarr;</Link>
                    </CardFooter>
                </Card>

                <Card className='flex flex-col items-center hover:shadow-md'>
                    <CardHeader>
                        <CardTitle> Camera Gear </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Image src={'/rent-power-tools.jpg'} alt='Power Tools' width={200} height={100} />
                    </CardContent>
                    <CardFooter>
                        <Link href={'#'}> Browse Item &rarr;</Link>
                    </CardFooter>
                </Card>

                <Card className='flex flex-col items-center hover:shadow-md'>
                    <CardHeader>
                        <CardTitle> Camera Gear </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Image src={'/rent-house-tools.jpg'} alt='House Tools' width={200} height={100} />
                    </CardContent>
                    <CardFooter>
                        <Link href={'#'}> Browse Item &rarr;</Link>
                    </CardFooter>
                </Card>
            </div> 

        </div>
    )
}

export default BrowseItems