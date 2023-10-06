import CalendlyEmbed from "@/src/components/CalendlyEmbed";
import LottieAnimation from "@/src/components/Contact/LottieAnimation";
import siteMetadata from "@/src/utils/siteMetaData";

export const metadata = {
  title: "Contact Me",
  alternates: {
    canonical: "/contact",
  },
  description: `Contact me through the form available on this page or email me at ${siteMetadata.email}`,
};

export default function Contact() {
  return (
    <section className="w-full border-b-2 border-solid border-dark dark:border-light flex  flex-col md:flex-row items-center justify-center text-dark dark:text-light">
      <div className="inline-block w-full sm:w-4/5 md:w-2/5 h-full md:border-r-2 border-solid border-dark dark:border-light">
        <h2 className="font-bold text-center capitalize  text-2xl xs:text-3xl sm:text-4xl">
          Let's Connect!
        </h2>
        <LottieAnimation />
      </div>
      <div className="w-full h-screen flex items-center md:w-3/5 flex flex-col items-start px-5 xs:px-10 md:px-16 pb-8">
        <CalendlyEmbed url="https://calendly.com/ilearnbydoing/15min" />
      </div>
    </section>
  );
}
