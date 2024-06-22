"use client";

import s from "./Header.module.scss";
import cs from "../../app/commonStyles.module.scss";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Login } from "@/components/Header/login/Login";
import { useLocale } from "use-intl";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { useUserStore } from "@/store/user";

function ProfileButton() {
  const currentLocale = useLocale();

  return (
    <Link href={"/" + currentLocale + "/profile"} className={cs.headerButton}>
      <p>Profile</p>
    </Link>
  );
}

function LangSwitcher() {
  const pathname = usePathname();
  const currentLocale = useLocale();
  const { Link: LocalLink } = createSharedPathnamesNavigation({
    locales: ["en", "uk"],
  });

  return (
    <LocalLink
      href={pathname.substring(3) || "/"}
      locale={currentLocale == "en" ? "uk" : "en"}
      className={cs.headerButton}
      style={{ minWidth: 0 }}
    >
      <p>{currentLocale.toUpperCase()}</p>
    </LocalLink>
  );
}

export function Header() {
  const currentUser = useUserStore((state) => state.currentUserEmail)

  return (
    <div className={s.header}>
      <div className={s.header_content}>
        <Link href={"/"} className={s.header_logo}>
          <Image alt={"logo"} src={"/logos/MusicDex-logo.svg"} fill={true} />
        </Link>
        {currentUser ? (
          <div className={s.header_row}>
            <ProfileButton />
            <LangSwitcher />
          </div>
        ) : (
          <div className={s.header_row}>
            <Login />
            <LangSwitcher />
          </div>
        )}
      </div>
    </div>
  );
}
