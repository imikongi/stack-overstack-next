import {ClerkProvider} from '@clerk/nextjs'
import './globals.css'
import React from "react";
import {Metadata} from "next";
import {Inter, Space_Grotesk} from "next/font/google";


const inter = Inter({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-inter'
})

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-spaceGrotesk'
})

export const metadata: Metadata = {
    title: 'DevFlow',
    description: 'A social-platform, where developers can help each other,' +
        ' ask and answer question about different issues',

}

export default function RootLayout({children,}: {
    children: React.ReactNode
}) {
    return (
        <ClerkProvider
        appearance={{
            elements: {
                formButtonPrimary: 'primary-gradient',
                footerActionLink: 'primary-text-gradient hover:text-primary-500'
            }
        }}>
            <html lang="en">
                <body  className={`${inter.variable} ${spaceGrotesk.variable}`} >
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}