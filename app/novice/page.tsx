"use client"

import BlockStars from '@/components/Blocks/BlockStars';
import BlockInfo from '@/components/Blocks/BlockInfo';
import BlockPossibles from '@/components/Blocks/BlockPossibles';

export default function NovicePage() {
  return (
    <div className="flex flex-col">
      <BlockStars />
      <BlockInfo />
      <BlockPossibles />
    </div>
  )
}