import Image from 'next/image';

import { name, about, bio, avatar } from 'lib/info';
import { GitHubIcon, LinkedinIcon, ViewsIcon } from '@/components/Icons';
import Link from 'next/link';
import Section from '@/components/styled/Section';

export default function Home() {
  return (
    <Section>
      <h1 className="">Nestor Felipe</h1>
      {about()}
      <div className="flex flex-row">
        <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400">
          <Link rel="noopener noreferrer" target="_blank" href="https://github.com/necrifede" className="">
            <GitHubIcon />
            {/* {`${starCount.toLocaleString()} stars on this repo`} */}
          </Link>
          <Link href="/blog" className="flex items-center">
            <LinkedinIcon />
            {/* {`${views.toLocaleString()} blog views all time`} */}
          </Link>
        </div>
        <Image
          alt={name}
          className="rounded-full grayscale hover:shadow-2xl transition transform hover:scale-105"
          src={avatar}
          placeholder="blur"
          width={100}
          priority
        />
      </div>
      {bio()}
    </Section>
  );
}
