import Image from 'next/image';

import { name, about, bio, avatar } from 'lib/info';
import { GitHubIcon, LinkedinIcon, EditIcon } from '@/components/Icons';
import Link from 'next/link';
import Section from '@/components/styled/Section';

export default function Home() {
  return (
    <Section>
      <h1 className="font-bold text-3xl font-serif">Nestor Felipe</h1>
      <p className="my-10 md:mr-48">{about()}</p>
      <div className="flex flex-row justify-start md:justify-center md:gap-8">
        <div className=" mx-10 text-neutral-500 dark:text-neutral-400">
          <div className="flex flex-col items-center content-center gap-3">
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/necrifede"
              className=" transition transform hover:scale-105"
            >
              <GitHubIcon />
            </Link>
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/nestor-felipe-a1252628"
              className=" transition transform hover:scale-105"
            >
              <LinkedinIcon />
            </Link>
            <Link href="#" className="transition transform hover:scale-105">
              <EditIcon />
            </Link>
          </div>
        </div>
        <Image
          alt={name}
          className="rounded-full mx-5 grayscale hover:shadow-2xl "
          src={avatar}
          placeholder="blur"
          width={120}
          priority
        />
      </div>
      <p className="my-10">{bio()}</p>
    </Section>
  );
}
