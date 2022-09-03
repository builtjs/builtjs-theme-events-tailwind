import Image from "next/image";
import { CTAButton } from "@/elements";

export default function Block2({ content }) {
  if (!content) return <></>;
  let { attributes } = content;
  return (
    <section id="block-2" className="pt-5 pb-16 template">
      <div className="flex flex-col lg:flex-row max-w-screen-xl mx-auto">
        <div className="lg:w-1/2 relative">
          <Image
            className="shadow-xl mx-auto grayscale-img transition-all duration-500 blur-out"
            src={attributes.image.data.attributes.url}
            width={attributes.image.data.attributes.width}
            height={attributes.image.data.attributes.height}
            alt={attributes.image.data.attributes.alternativeText}
            layout="responsive"
            objectFit="cover"
            priority="true"
          />
        </div>
        <div className="lg:w-1/2 sm:mx-6 lg:ml-12 lg:mb-0 mt-12 lg:mt-0">
          <p className="text-primary-70 leading-7 mb-12">{attributes.body}</p>
          <CTAButton />
          {/* {% if blox.page.item.fields.ctaBlurb %} */}
          {/* <p className="text-primary-70 leading-7 mb-12">
                            <strong>{{ blox.page.item.fields.ctaBlurb }}</strong>
                        </p> */}
          {/* {% endif %} */}
          {/* {% call ctaBtn.default({text: 'Browse our events', url: '/events/page-1/'}) %}{% endcall %} */}
        </div>
      </div>
    </section>
  );
}
