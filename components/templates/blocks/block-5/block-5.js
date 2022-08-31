import { CTAButton } from "@/elements";

export default function Block5({ content }) {
  if (!content) return <></>;
  let { attributes } = content;
  return (
    <section id="block-5" className="cta-generic relative template">
      <img
        class="filter-grayscale-1 w-full home-volunteer-image object-cover"
        src={attributes.image.data.attributes.url}
        alt={attributes.preheading}
      />
      <div class="lg:absolute top-0 left-0 w-full lg:-mt-24">
        <div class="max-w-screen-xl lg:px-4 mx-auto">
          <div
            class="bg-primary top-0 left-0 px-4 py-12 lg:p-16 w-full lg:w-3/5"
            data-aos="fade-up"
            data-aos-offset="250"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <p class="pre-headline-white">{attributes.preheading}</p>
            <h2 class="text-white mb-10">{attributes.heading}</h2>
            <p class="text-primary-20 sm:ml-6 lg:ml-12 mb-20 lg:max-w-2xl lg:pr-4 leading-7">
              {attributes.body}
            </p>
            <div class="sm:ml-6 lg:ml-12">
             <CTAButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
