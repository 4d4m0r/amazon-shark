import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const baseUrl = "/api/payments";

export interface requestBodyPost {
  first_name: string
  email: string
  identification: {
    type: string
    number: string;
  };
}

export const createPaymentPix = async (bodyRequest: requestBodyPost) => {
  try {
    const id = uuidv4();

    const config = {
      headers: {
        Authorization: `Bearer APP_USR-6023969766610053-071016-438b50652100c066c3e0bd10046cb3aa-779925426`,
        "X-Idempotency-Key": id,
      },
    };

    const body = {
      transaction_amount: 1,
      payment_method_id: "pix",
      payer: {
        first_name: bodyRequest.first_name,
        email: bodyRequest.email,
        identification: {
          type: bodyRequest.identification.number,
          number: bodyRequest.identification.number,
        },
      },
      description: "Pagamento AmazonSHARK Verificado",
    };

    const response = await axios.post(baseUrl, body, config);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response;
    }
    throw new Error("Could not load user");
  }
};
