"use client"

import BlockContacts from '@/components/Blocks/BlockContacts';
import BlockHero from '@/components/Blocks/BlockHero';
import BlockMedia from '@/components/Blocks/BlockMedia';
import BlockPossibles from '@/components/Blocks/BlockPossibles';
import BlockStars from '@/components/Blocks/BlockStars';
import BlockFAQ from '@/components/Blocks/BlockFAQ';
import BlockNovice from '@/components/Blocks/BlockNovice';
import BlockCoworking from '@/components/Blocks/BlockCoworking';
import BlockFooter from '@/components/Blocks/BlockFooter';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navigation />
      <BlockHero />
      <BlockMedia />
      <BlockPossibles />
      <BlockCoworking />
      <BlockStars />
      <BlockNovice />
      <BlockContacts />
      <BlockFAQ />
      <BlockFooter />
    </div>
  )
}