import { openai } from "@/utils/openai";
import Image from "next/image";
import BlurImage from "./BlurImage";

const AiImage = async ({ mood }: { mood: string | undefined }) => {
  try {
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: `a comic image using disney's character depicting a person's life having a day like ${mood} maybe along with some dialog in english `,
      n: 1,
      size: "1024x1024",
    });

    console.log(response, "response");

    if (!response?.created) {
      // Handle the case where the request was not successful
      console.error("Error: Request not successful");
      return null; // Or return an appropriate fallback component
    }

    let image = response.data[0].url;

    if (typeof image === "string") {
      return (
        <div className="mt-20">
          <BlurImage image={image} />;
        </div>
      );
    }
  } catch (error: any) {
    // Handle rate limit error
    if (error.response?.status === 429) {
      console.error(
        "Rate limit exceeded. Please try again later or increase your rate limit."
      );
      // You might want to display a user-friendly message or take other appropriate actions
    } else {
      console.error("An error occurred:", error);
      // Handle other types of errors as needed
    }

    return null; // Or return an appropriate fallback component
  }
};

export default AiImage;
