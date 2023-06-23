'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return ( 
    <Image
      onClick={() => router.push('/')}
      className="hidden md:block cursor-pointer" 
      src="https://res.cloudinary.com/di7jdhpqh/image/upload/v1687499349/Logo_gcvzmx.png" 
      height="100" 
      width="150" 
      alt="Logo" 
    />
   );
}
 
export default Logo;
