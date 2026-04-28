"use client"

import BlockContacts from '@/components/Blocks/BlockContacts';
import BlockHero from '@/components/Blocks/BlockHero';
import BlockInfo from '@/components/Blocks/BlockInfo';
import BlockPossibles from '@/components/Blocks/BlockPossibles';
import BlockStars from '@/components/Blocks/BlockStars';
import BlockFAQ from '@/components/Blocks/BlockFAQ';
import BlockNovice from '@/components/Blocks/BlockNovice';
import BlockCoworking from '@/components/Blocks/BlockCoworking';

export default function Home() {
  return (
    <div className="flex flex-col">
      <BlockHero />
      <BlockInfo />
      <BlockPossibles />
      <BlockCoworking />
      <BlockNovice />
      <BlockStars />
      <BlockContacts />
      <BlockFAQ />
    </div>
  )
}