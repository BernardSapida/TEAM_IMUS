'use client';

import React from 'react';
import {
   Navbar,
   NavbarBrand,
   NavbarContent,
   NavbarItem,
   NavbarMenuToggle,
   NavbarMenu,
   NavbarMenuItem,
   Button
} from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import { UserButton, useUser } from '@clerk/nextjs';

export default function App() {
   const [isMenuOpen, setIsMenuOpen] = React.useState(false);
   const { isSignedIn } = useUser();
   const menuItems = ['Form', 'Lists'];

   return (
      <Navbar
         onMenuOpenChange={setIsMenuOpen}
         maxWidth="lg"
      >
         <NavbarContent>
            <NavbarMenuToggle
               aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
               className="sm:hidden"
            />
            <NavbarBrand>
               <Link
                  href={'/'}
                  className="flex items-center"
               >
                  <Image
                     alt="Team Imus logo"
                     src={'/images/logo-2.jpg'}
                     width={500}
                     height={500}
                     className="mr-2 w-10 rounded-full"
                  />
                  <p className="font-bold text-inherit">
                     <span className="text-ti-primary">TEAM</span>{' '}
                     <span className="text-ti-danger">IMUS</span>
                  </p>
               </Link>
            </NavbarBrand>
         </NavbarContent>

         <NavbarContent
            className={`gap-4 ${!isSignedIn && 'hidden'}`}
            justify="center"
         >
            <NavbarItem>
               <Link href="/form">Form</Link>
            </NavbarItem>
            <NavbarItem>
               <Link href="/lists">Lists</Link>
            </NavbarItem>
         </NavbarContent>
         <NavbarContent
            className="hidden gap-4 sm:flex"
            justify="end"
         >
            {isSignedIn ? (
               <UserButton />
            ) : (
               <Button
                  as={Link}
                  href="sign-in"
                  className="rounded-lg font-normal"
                  size="sm"
                  color="primary"
               >
                  Sign In
               </Button>
            )}
         </NavbarContent>
         <NavbarMenu>
            {menuItems.map((item, index) => (
               <NavbarMenuItem key={`${item}-${index}`}>
                  <Link
                     color={
                        index === 2
                           ? 'primary'
                           : index === menuItems.length - 1
                             ? 'danger'
                             : 'foreground'
                     }
                     className="w-full"
                     href={`${item}`}
                  >
                     {item}
                  </Link>
               </NavbarMenuItem>
            ))}
            <UserButton />
         </NavbarMenu>
      </Navbar>
   );
}
