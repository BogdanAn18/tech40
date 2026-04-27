"use client"

import BlockContacts from '@/components/Blocks/BlockContacts';
import BlockHero from '@/components/Blocks/BlockHero';
import BlockInfo from '@/components/Blocks/BlockInfo';
import BlockPossibles from '@/components/Blocks/BlockPossibles';

export default function NovicePage() {
  return (
    <div className="flex flex-col">
      <BlockHero />
      <BlockInfo />
      <BlockPossibles />
      <BlockContacts />
    </div>
  )
}