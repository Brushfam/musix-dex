import s from "@/app/[locale]/(public)/tracks/_components/Overview/Overview.module.scss";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { streamingServices } from "@/types/types";

export function ListenOnBlock(props: {
  services: streamingServices;
  text: string;
}) {
  const youtubeShadow = "8px 4px 16px 0 rgba(0, 0, 0, 0.1), inset 0 0 8px 0 rgba(255, 4, 4, 0.4)"
  const appleShadow = "8px 4px 16px 0 rgba(0, 0, 0, 0.1), inset 0 0 8px 0 rgba(233, 97, 125, 0.4)"
  const spotifyShadow = "8px 4px 16px 0 rgba(0, 0, 0, 0.1), inset 0 0 8px 0 rgba(43, 217, 105, 0.4)"


  function ServiceIcon(props: { name: string }) {
    return (
      <Image
        src={"/tracks/listen-on/" + props.name + ".svg"}
        alt={props.name}
        width={40}
        height={40}
      />
    );
  }

  function ServiceText(serviceProps: { name: string }) {
    return (
      <div>
        <p className={s.listenOn_text1}>{props.text}</p>
        <p className={s.listenOn_text2}>{serviceProps.name}</p>
      </div>
    );
  }

  return (
    <div className={s.listenOnWrapper}>
      <div className={s.listenOnRow}>
        <Link
          href={props.services.youtube}
          target={"_blank"}
          className={s.listenOn}
          style={{boxShadow: youtubeShadow}}
        >
          <ServiceIcon name={"youtube"} />
          <ServiceText name={"YouTube"} />
        </Link>
        <Link
          href={props.services.apple}
          target={"_blank"}
          className={s.listenOn}
          style={{boxShadow: appleShadow}}
        >
          <ServiceIcon name={"apple"} />
          <ServiceText name={"Apple Music"} />
        </Link>
      </div>
      <div className={s.listenOnRow}>
        <Link
          href={props.services.youtubeMusic}
          target={"_blank"}
          className={s.listenOn}
          style={{boxShadow: youtubeShadow}}
        >
          <ServiceIcon name={"youtube-music"} />
          <ServiceText name={"YouTube Music"} />
        </Link>
        <Link
          href={props.services.spotify}
          target={"_blank"}
          className={s.listenOn}
          style={{boxShadow: spotifyShadow}}
        >
          <ServiceIcon name={"spotify"} />
          <ServiceText name={"Spotify"} />
        </Link>
      </div>
    </div>
  );
}
