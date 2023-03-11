import Image from 'next/image';

import { name, about, bio, avatar } from 'lib/info';
import { ArrowIcon, EnvelopeIcon, GitHubIcon, LinkedinIcon, ViewsIcon } from '@/components/Icons';
import Link from 'next/link';
import Section from '@/components/styled/Section';

export default function Home() {
  return (
    <Section>
      <h1 className="font-bold text-3xl font-serif">Nestor Felipe</h1>
      <p className="my-6 mr-20">{about()}</p>
      <div className="flex flex-row justify-start">
        <div className=" mx-10 text-neutral-500 dark:text-neutral-400">
          <div className="flex flex-col items-center content-center gap-4">
            <Link rel="noopener noreferrer" target="_blank" href="https://github.com/necrifede" className="">
              <GitHubIcon />
            </Link>
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/nestor-felipe-a1252628"
              className=""
            >
              <LinkedinIcon />
            </Link>
            <Link href="/posts" className="">
              <EnvelopeIcon />
            </Link>
          </div>
        </div>
        <Image
          alt={name}
          className="rounded-full mx-5 grayscale hover:shadow-2xl transition transform hover:scale-105"
          src={avatar}
          placeholder="blur"
          width={100}
          priority
        />
      </div>
      <p className="my-10">{bio()}</p>
    </Section>
  );
}
