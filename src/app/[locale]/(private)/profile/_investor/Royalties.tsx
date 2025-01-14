import { ProfileHeader } from "@/app/[locale]/(private)/_components/ProfileHeader/ProfileHeader";
import { Income } from "@/app/[locale]/(private)/profile/_investor/royalties/Income";
import { SecondRoyaltiesBlock } from "@/app/[locale]/(private)/profile/_investor/royalties/SecondRoyaltiesBlock";
import s from "@/app/[locale]/(private)/profile/Profile.module.scss";
import { useTranslations } from "next-intl";

export function Royalties() {
  const t = useTranslations("ProfileInvestor.Royalties");

  return (
    <div className={s.subpageWrapper}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <p className={s.pageTitle}>{t("title")}</p>
        <ProfileHeader />
      </div>
      <div className={s.contentWrapper}>
        <Income />
        <SecondRoyaltiesBlock />
      </div>
    </div>
  );
}
