'use client';
import { usePathname } from 'next/navigation';
import { PremiumHome } from '@/components/premium-home';
export default function Template({children}:{children:React.ReactNode}){const path=usePathname();return path==='/'?<PremiumHome/>:<>{children}</>}
