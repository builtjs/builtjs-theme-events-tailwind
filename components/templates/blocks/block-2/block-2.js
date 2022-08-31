import { CTAButton } from "@/elements";

export default function Block2({ content }) {
  if (!content) return <></>;
  let { attributes } = content;
  return (
    <section id="block-2" className="pt-5 pb-16 template">
      <div class="flex flex-col lg:flex-row max-w-screen-xl mx-auto">
        <div class="lg:w-1/2 relative">
          <img
            class=""
            src="https://appyay.s3.amazonaws.com/dev/e/5fc9df392ad4920500cd3cd1/a/5fee772e54c4a80019cd45fc/w800"
            alt="About image 2"
          />
        </div>
        <div class="lg:w-1/2 sm:mx-6 lg:ml-12 lg:mb-0 mt-12 lg:mt-0">
          <p class="text-primary-70 leading-7 mb-12">
            Wanaka is a favourite destination for concerts and we are lucky to
            have so many wonderful musicians to choose from. In addition to the
            classical works of the well-known composers, less well known pieces
            are programmed which extend our knowledge and hopefully enjoyment of
            our contemporary composers. Other genres such as jazz and folk music
            are often included in the year's programme. When concerts are
            confirmed they are added to the website with information about date,
            venue and booking details.
          </p>
          <CTAButton />
          {/* {% if blox.page.item.fields.ctaBlurb %} */}
          {/* <p class="text-primary-70 leading-7 mb-12">
                            <strong>{{ blox.page.item.fields.ctaBlurb }}</strong>
                        </p> */}
          {/* {% endif %} */}
          {/* {% call ctaBtn.default({text: 'Browse our events', url: '/events/page-1/'}) %}{% endcall %} */}
        </div>
      </div>
    </section>
  );
}
