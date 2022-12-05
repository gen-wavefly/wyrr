import { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";
import { auth } from "googleapis/build/src/apis/abusiveexperiencereport";

type SheetForm = {
  email: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).send({ message: "only POST requests are allowed" });
  }

  const body = req.body as SheetForm;

  try {
    // prepare auth
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A1:B1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[body.email, "now"]],
      },
    });

    return res.status(200).json({
      data: response.data,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error ?? "something went wrong",
    });
  }
}
