import Image from 'next/image';
import Link from 'next/link';

interface FooterProps {
  ischecked: Boolean;
}

export const Footer: React.FC<FooterProps> = ({ ischecked }) => {
  return (
    <footer
      className={`${
        !ischecked ? 'bg-black py-7' : 'bg-slate-900 py-7'
      } md:px-4 lg:py-4`}
    >
      <div className="container px-7">
        <div className="flex w-full place-items-center justify-center gap-4 text-white lg:justify-between ">
          <p>danipereira.dev © 2023</p>
          <div className="flex gap-4">
            <Link href="https://github.com/danipereiracodes" target="_blank">
              <Image
                src="/github.png"
                alt="github Logo danipereira.dev"
                style={{ borderRadius: '4px' }}
                width={30}
                height={30}
                priority
              />
            </Link>
            <Link href="mailto:info.danipereira@gmail.com" target="_blank">
              <Image
                src="/email2.png"
                alt="envelope Logo danipereira.dev"
                style={{ borderRadius: '4px' }}
                width={30}
                height={30}
                priority
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
