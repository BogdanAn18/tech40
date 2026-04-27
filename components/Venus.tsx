'use client'
import { motion } from "motion/react";
import Image from "next/image";
import { relative } from "path";

export default function Venus(){
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5}}
            whileInView={{ opacity: 1, scale: 1}}
            transition={{ duration: 0.8, ease: "easeIn" }}
            viewport={{ once: true }}
            
            style={{
                position: 'absolute',
                right: 0,
                width: 300,
                height: 300
            }}
            >
            <Image src="/img/venus.png" alt="Venus" width={300} height={300} />
        </motion.div>
    )
}