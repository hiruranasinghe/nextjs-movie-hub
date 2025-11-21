import Link from 'next/link';
import React from 'react';

interface MenuitemProps {
  title: string;
  address: string;
  Icon: React.ComponentType<{ className?: string }>;
}

export default function Menuitem({ title, address, Icon }: MenuitemProps) {
  return (
    <Link href={address} className="group">
      <div className="flex items-center gap-2 hover:text-amber-500">
        <Icon className="text-2xl sm:hidden group-hover:text-amber-500" />
        <p className="uppercase hidden sm:inline text-sm group-hover:text-amber-500">
          {title}
        </p>
      </div>
    </Link>
  );
}
