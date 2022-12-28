export interface Link {
  label: string;
  url: string;
}

export interface Props {
  links: Link[];
}

export default function Header({ links }: Props) {
  return (
    <header class="max-w-[1180px] h-20 mx-auto flex justify-between items-center absolute left-0 right-0 z-10">
      <img class="max-w-[122px] h-9" src="/icons/logo.svg" alt="Discord" />

      <nav>
        <ul class="text-white flex gap-10">
          {links.map((link) => (
            <li class="text-white font-bold hover:text-underline cursor-pointer">
              <a href={link.url}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <a class="px-4 py-2 bg-white rounded-[2.5rem] text-sm" href="/">Login</a>
    </header>
  );
}
