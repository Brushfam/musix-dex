import { useTranslations } from "next-intl";
import s from "./Activities.module.scss";

export function ActivitiesHeader() {
  const t = useTranslations("ProfileInvestor.Activities");

  return (
    <div className={s.songHeader}>
      <p className={s.songHeader_date}>{t("date")}</p>
      <p className={s.songHeader_song}>{t("song")}</p>
      <p className={s.songHeader_wallet}>Payment method</p>
      <p className={s.songHeader_tokens}>{t("tokens")}</p>
      <p className={s.songHeader_invested}>Amount</p>
      <p className={s.songHeader_status}>{t("status")}</p>
    </div>
  );
}
