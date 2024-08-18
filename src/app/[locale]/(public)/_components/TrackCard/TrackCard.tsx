import { GreyBlock } from "@/components/ui/GreyBlock/GreyBlock";
import Image from "next/image";
import s from "./TrackCard.module.scss";

function TrackCardComponent(props: {
  image: string;
  title: string;
  author: string;
}) {
  return (
    <GreyBlock>
      <div className={s.trackCard}>
        <div className={s.trackCard_img}>
          <Image
            src={props.image}
            alt={props.title}
            fill={true}
            style={{ borderRadius: 4 }}
          />
        </div>
        <p className={s.title}>{props.title}</p>
        <p className={s.author}>{props.author}</p>
      </div>
    </GreyBlock>
  );
}

export function TrackCard1() {
  return (
    <TrackCardComponent
      image={"/albums/homepage1.jpg"}
      title={"Coming soon!"}
      author={""}
    />
  );
}

export function TrackCard2() {
  return (
    <TrackCardComponent
      image={"/albums/homepage2.jpg"}
      title={"Coming soon!"}
      author={""}
    />
  );
}

export function TrackCard3() {
  return (
    <TrackCardComponent
      image={"/albums/homepage3.jpg"}
      title={"Coming soon!"}
      author={""}
    />
  );
}

export function TrackCard4() {
  return (
    <TrackCardComponent
      image={"/albums/dealer.jpg"}
      title={"Dealer"}
      author={"Tony Tonite"}
    />
  );
}
