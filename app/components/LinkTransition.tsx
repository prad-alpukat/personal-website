"use client";

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import useStore from "@/store";

import { motion } from "framer-motion";

interface LinkTestProps extends LinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function LinkTest({ children, href, ...props }: LinkTestProps) {
  const router = useRouter();
  const { setIsLoading } = useStore() as { setIsLoading: (loading: boolean) => void };

  async function handleTransition(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();

    setIsLoading(true);
    console.log("Loading...");
    await sleep(700);

    router.push(href);

    await sleep(700);
    setIsLoading(false);
  }

  return (
    <>
      <Link onClick={handleTransition} href={href} {...props}>
        {children}
      </Link>
    </>
  );
}

export function ExitTransition() {
  return (
    <>
      <motion.div
        className={`bg-neutral-700 fixed h-dvh top-0 right-0`}
        animate={{ width: ["0%", "100%"] }}
        transition={{
          width: {
            ease: "easeInOut",
            duration: 0.7,
          },
        }}
      ></motion.div>
      <motion.div
        className={`bg-neutral-800 fixed h-dvh top-0 right-0`}
        animate={{ width: ["0%", "100%"] }}
        transition={{
          width: {
            ease: "easeInOut",
            duration: 0.7,
            delay: 0.25,
          },
        }}
      ></motion.div>
      <motion.div
        className={`bg-neutral-950 fixed h-dvh top-0 right-0`}
        animate={{ width: ["0%", "100%"] }}
        transition={{
          width: {
            ease: "easeInOut",
            duration: 0.7,
            delay: 0.5,
          },
        }}
      ></motion.div>
    </>
  );
}

export function EnterTransition() {
  return (
    <>
      <motion.div
        className={`bg-neutral-700 fixed h-dvh top-0 left-0`}
        animate={{ width: ["100%", "0%"] }}
        transition={{
          width: {
            ease: "easeInOut",
            duration: 0.7,
            delay: 0.5,
          },
        }}
      ></motion.div>
      <motion.div
        className={`bg-neutral-800 fixed h-dvh top-0 left-0`}
        animate={{ width: ["100%", "0%"] }}
        transition={{
          width: {
            ease: "easeInOut",
            duration: 0.7,
            delay: 0.25,
          },
        }}
      ></motion.div>
      <motion.div
        className={`bg-neutral-950 fixed h-dvh top-0 left-0`}
        animate={{ width: ["100%", "0%"] }}
        transition={{
          width: {
            ease: "easeInOut",
            duration: 0.7,
          },
        }}
      ></motion.div>
    </>
  );
}
