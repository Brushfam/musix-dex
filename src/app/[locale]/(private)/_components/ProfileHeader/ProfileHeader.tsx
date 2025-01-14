"use client";

import { firebaseAuth } from "@/services/auth/firebaseConfig";
import { useUserStore } from "@/store/user";
import { signOut } from "@firebase/auth";
import { useTranslations } from "next-intl";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { useLocale } from "use-intl";
import s from "./ProfileHeader.module.scss";

export function ProfileHeader() {
  const t = useTranslations("Header");
  const userName = useUserStore((state) => state.currentUserName);
  const userEmail = useUserStore((state) => state.currentUserEmail);
  const setCurrentUserEmail = useUserStore(
    (state) => state.setCurrentUserEmail
  );

  const [modalOpen, setModalOpen] = useState(false);
  const currentLocale = useLocale();
  const router = useRouter();

  function handleLogout() {
    signOut(firebaseAuth)
      .then(() => {
        router.replace("/");
        setCurrentUserEmail("");
      })
      .catch((error) => {
        console.log(error);
        toast.error(t("error_logout"));
      });
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
        className={s.modalButton}
        style={{ minWidth: 0 }}
      >
        <p>{currentLocale.toUpperCase()}</p>
      </LocalLink>
    );
  }
  function ModalMenu() {
    return modalOpen ? (
      <div className={s.modal}>
        <a href={"/" + currentLocale} className={s.modalButton}>
          MusicDex
        </a>
        <div className={s.line}></div>
        <LangSwitcher />
        <div className={s.line}></div>
        <div
          className={s.modalButton}
          onClick={() => {
            handleLogout();
          }}
        >
          {currentLocale === "en" ? "Log out" : "Вихід"}
        </div>
      </div>
    ) : null;
  }

  return (
    <div className={s.profileHeader}>
      <Image
        src={"/profile/avatar.svg"}
        alt={"avatar"}
        width={40}
        height={40}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={() => {
          setModalOpen(!modalOpen);
        }}
      >
        <div className={s.content}>
          <p className={s.name}>{userName ? userName : "User"}</p>
          <p className={s.email}>{userEmail}</p>
        </div>
        <Image
          src={"/profile/icons/header-arrow.svg"}
          alt={"arrow"}
          width={11}
          height={6}
          style={modalOpen ? { transform: "rotate(180deg)" } : {}}
        />
      </div>
      <ModalMenu />
    </div>
  );
}
