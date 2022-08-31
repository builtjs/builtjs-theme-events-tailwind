import { ButtonLink } from "@/elements";

export default function Banner1({ content }) {
  if (!content) return <></>;
  let { attributes, variants } = content;
  return (
    <section id="banner-1" className="page-banner pt-24 md:pt-32 lg:pt-48 xl:pt-64 template">
      <div className="max-w-screen-xl px-4 mx-auto">
        <p className="pre-headline-secondary">About</p>
        <h1 className="h1 mb-8 md:mb-16 leading-tight">
          Wanaka Concert Society
        </h1>
      </div>
    </section>
  );
}
