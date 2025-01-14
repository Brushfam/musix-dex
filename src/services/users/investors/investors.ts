import axios from "axios";

export function createInvoice(
  jwt: string,
  songId: number,
  token_amount: number
) {
  return axios.post(
    process.env.NEXT_PUBLIC_SERVER_URL + "/users/invoice",
    { song_id: songId, token_amount: token_amount },
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: "Bearer: " + jwt,
      },
    }
  );
}

export function getInvestorActivities(jwt: string) {
  return axios.get(process.env.NEXT_PUBLIC_SERVER_URL + "/users/activities", {
    headers: {
      "Access-Control-Allow-Origin": "*",
      Authorization: "Bearer: " + jwt,
    },
  });
}

export function getNFTs(jwt: string) {
  return axios.get(process.env.NEXT_PUBLIC_SERVER_URL + "/users/nfts", {
    headers: {
      "Access-Control-Allow-Origin": "*",
      Authorization: "Bearer: " + jwt,
    },
  });
}

export function getBalance(jwt: string) {
  return axios.get(process.env.NEXT_PUBLIC_SERVER_URL + "/users/balances", {
    headers: {
      "Access-Control-Allow-Origin": "*",
      Authorization: "Bearer: " + jwt,
    },
  });
}

export function getInvestBalance(jwt: string) {
  return axios.get(
    process.env.NEXT_PUBLIC_SERVER_URL + "/users/balances/investment",
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: "Bearer: " + jwt,
      },
    }
  );
}
