"use client";
import s from "@/components/modals/ArtistModal/ArtistModal.module.scss";
import React, {useEffect} from "react";
import { Button } from "@/components/ui/Button/Button";
import { useForm } from "@formspree/react";
import { useTranslations } from "next-intl";
import { UseUser } from "@/context/UserContext";
import { toast } from "sonner";

export function FormStep() {
  const userContext = UseUser();
  const t = useTranslations("ArtistModal");
  const [state, handleSubmit] = useForm("mleqayvd");

  useEffect(() => {
    if (state.succeeded) {
      toast.success(t("success"));
      userContext.setArtistFormStep("0")
    }
  }, [state.succeeded, t, userContext]);

  return (
    <div className={s.artistModal}>
      <p className={s.title}>{t("form_title")}</p>
      <div className={s.content}>
        <p className={s.formDescription}>
          {t("form_description")}
          <a
            href={"mailto:musicdex.inc@gmail.com"}
            target="_blank"
            style={{ textDecoration: "underline" }}
          >
            musicdex.inc@gmail.com
          </a>
        </p>
        <form className={s.artistForm} onSubmit={handleSubmit}>
          <div className={s.artistFormContent}>
            <label htmlFor={"name"}>{t("FormFields.name")}</label>
            <input
                id={"name"}
                type={"text"}
                name={"name"}
                placeholder={"Tony"}
                autoComplete="off"
                autoCorrect={"off"}
                spellCheck={"false"}
                className={s.formInput}
                required
            />
            <label htmlFor={"social"}>{t("FormFields.social")}</label>
            <input
                id={"social"}
                type={"text"}
                name={"social"}
                placeholder={"https://www.facebook.com/artist-page"}
                autoComplete="off"
                autoCorrect={"off"}
                spellCheck={"false"}
                className={s.formInput}
                required
            />
            <label htmlFor={"email"}>{t("FormFields.email")}</label>
            <input
                type={"email"}
                name={"email"}
                id={"email"}
                placeholder={"example@email.com"}
                autoComplete="off"
                autoCorrect={"off"}
                spellCheck={"false"}
                className={s.formInput}
            />
            <label htmlFor={"page"}>{t("FormFields.page")}</label>
            <input
                type={"text"}
                name={"page"}
                id={"page"}
                placeholder={"https://spotify.com/artist/"}
                autoComplete="off"
                autoCorrect={"off"}
                spellCheck={"false"}
                className={s.formInput}
            />
            <label htmlFor={"tracks"}>{t("FormFields.tracks")}</label>
            <textarea
                name={"tracks"}
                id={"tracks"}
                autoComplete="off"
                autoCorrect={"off"}
                spellCheck={"false"}
                className={s.lastInput}
                required
            />
          </div>
          <div className={s.buttonRow}>
            <Button
                title={t("close")}
                color={"grey"}
                arrow={false}
                action={() => {
                  userContext.setArtistFormStep("0")
                }}
            />
            <Button
                title={t("send")}
                color={"main"}
                arrow={false}
                type={"submit"}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
