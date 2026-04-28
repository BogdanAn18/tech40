"use client"

import BlockContacts from '@/components/Blocks/BlockContacts';
import BlockHero from '@/components/Blocks/BlockHero';
import BlockInfo from '@/components/Blocks/BlockInfo';
import BlockPossibles from '@/components/Blocks/BlockPossibles';
import BlockStars from '@/components/Blocks/BlockStars';
import BlockFAQ from '@/components/Blocks/BlockFAQ';
import BlockNovice from '@/components/Blocks/BlockNovice';

export default function NovicePage() {
  return (
    <div className="flex flex-col">
      <BlockHero />
      <BlockInfo />
      <BlockPossibles />
      <BlockNovice />
      <BlockStars />
      <BlockContacts />
      <BlockFAQ />
    </div>
  )
}