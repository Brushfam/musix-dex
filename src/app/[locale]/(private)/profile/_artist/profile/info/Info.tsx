"use client";

import { useEffect, useState } from "react";
import { LoadingSpinner } from "@/app/[locale]/(private)/profile/_components/LoadingSpinner";
import { InfoForm } from "@/app/[locale]/(private)/profile/_artist/profile/info/InfoForm";
import { firebaseAuth } from "@/services/auth/firebaseConfig";
import { useRouter } from "next/navigation";
import { getInvestorInfo } from "@/services/users/investors/investors";
import {ArtistInfo} from "@/types/types";
import { toast } from "sonner";

export function Info() {
  const router = useRouter();
  const [artistInfo, setArtistInfo] = useState<null | ArtistInfo>(null);
  const [triggerFormRefresh, setTriggerFormRefresh] = useState(0);

  useEffect(() => {
    firebaseAuth.onAuthStateChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken();
        getInvestorInfo(token)
          .then((res) => {
            const i = res.data.info;
            setArtistInfo({
              firstName: i.first_name,
              lastName: i.last_name,
              country: i.country,
              artistName: i.artist_name,
            });
          })
          .catch((error) => {
            console.log(error);
            toast.error("Error fetching info");
          });
      } else {
        router.replace("/en/auth/login?expired-session=true");
      }
    });
  }, [router, triggerFormRefresh]);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {!artistInfo ? (
        <LoadingSpinner fullHeight={true} />
      ) : (
        <InfoForm
          key={triggerFormRefresh}
          artist={artistInfo}
          setTriggerFormRefresh={setTriggerFormRefresh}
        />
      )}
    </div>
  );
}