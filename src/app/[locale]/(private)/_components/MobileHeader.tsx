"use client";

import s from "./MobileHeader.module.scss";
import { useUserStore } from "@/store/user";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLocale } from "use-intl";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import cs from "@/app/commonStyles.module.scss";

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

export function MobileHeader() {
  const currentUser = useUserStore((state) => state.currentUserEmail);

  useEffect(() => {
    console.log(currentUser);
  }, [currentUser]);

  return (
    <div className={s.header}>
      <div className={s.header_content}>
        <Link href={"/"} className={s.header_logo}>
          <Image alt={"logo"} src={"/logos/MusicDex-logo.svg"} fill={true} />
        </Link>
        <div className={s.header_row}>
          <LangSwitcher />
        </div>
      </div>
    </div>
  );
}
