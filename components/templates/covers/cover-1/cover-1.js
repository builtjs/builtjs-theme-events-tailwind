import Image from "next/image";
import getConfig from "next/config";
import { ButtonLink, Preheading } from "@/elements";

export default function Cover1({ content }) {
  if (!content) return <></>;
  let { attributes } = content;
  const { publicRuntimeConfig } = getConfig();

  return (
    <section
      id="cover-1"
      className="template"
    >
      <div className="max-w-screen-xl px-4 mx-auto pt-5 pb-24 md:pb-32 lg:pb-48">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 mb-16 lg:mb-0 lg:mr-10 sm:mx-6 lg:ml-12">
          {/* {% if blox.db.about.fields.leadingSentence %}
                        <p className="text-primary-70 leading-7 text-lg mb-8">
                            <strong>{{ blox.db.about.fields.leadingSentence }}</strong>
                        </p>
                    {% endif %} */}
          <p className="text-primary-70 leading-7 text-lg mb-8">
            <strong>
              For more than 40 years, the Wanaka Concert Society has proudly
              played an important role in the culture of our region.
            </strong>
          </p>

          {/* <p className="text-primary-70 leading-7">
            {{ blox.db.about.fields.body1 | escape | nl2br }}
          </p> */}
          <p className="text-primary-70 leading-7">
            Wanaka Concert Society is an Incorporated Society and Registered
            Charity.
            <br />
            <br />
            Although many of its concerts are sourced through Chamber Music New
            Zealand and Arts on Tour, an increasing number of performers contact
            us directly, many of whom are top international musicians. We have
            hosted violinist Natalia Lomeiko twice and she is always keen to
            return. Natalia is the inaugural winner of the Sir Michael Hill
            International Violin Competition and is currently a Professor at the
            Royal College of Music, London.
            <br />
            <br />
            Jazz is very popular in Wanaka and in 2019 top American trumpet
            player, Allen Vizzutti and his wife, pianist Laura Vizzutti amazed
            the spell-bound audience with their unique techniques, sense of
            humour and sheer delight of performance.
            <br />
            <br />
            One of the aims of the Wanaka Concert Society is to support young
            people - admission is free to our concerts for students at school.
            We also host the current young recipients of the annual Royal
            Over-Seas League Pettman/ROSL Scholarship for Chamber Ensembles.
            Master classes are facilitated for music students by some of our
            visiting performers.
            <br />
            <br />
            The Wanaka Concert Society is administered by an annually elected
            group of music lovers. The inspiration and work carried out by the
            founding committee over 40 years ago is very much appreciated. One
            of the wonderful projects undertaken was fundraising for and
            purchase of our Steinway Grand Piano, of which we are immensely
            proud. It is praised not only by local pianists but also acclaimed
            international pianists.
            <br />
            <br />
            The Wanaka Concert Society appreciates the support of its donors,
            subscribers, sponsors and volunteers which enables us to present the
            very best of music available.
          </p>
        </div>
        <div className="lg:w-1/2 relative">
          {/* <img className="blurry-load" src="{{ blox.db.about.fields.image1.sizes.w150 }}" data-large="{{ blox.db.about.fields.image1.sizes.w800 }}" alt="About image 1"> */}
          <div
            className="lg:w-1/2 aos-init aos-animate"
            data-aos="fade-zoom-in"
            data-aos-duration="1000"
          >
            <Image
              className="shadow-xl mx-auto grayscale-img transition-all duration-500 blur-out"
              src={`https://appyay.s3.amazonaws.com/dev/e/5fc9df392ad4920500cd3cd1/a/5fcaee5987ba901040c86ee9/w800`}
              layout="fill"
              // width={"1500px"}
              // height={700}
              // layout="responsive"
              objectFit="cover"
              priority="true"
              alt={""}
            />
            {/* <img className="w-3/4 shadow-xl mx-auto grayscale-img transition-all duration-500 blur-out" src="https://appyay.s3.amazonaws.com/dev/e/5fc9df392ad4920500cd3cd1/a/5fcaee5987ba901040c86ee9/w800" data-large="https://appyay.s3.amazonaws.com/dev/e/5fc9df392ad4920500cd3cd1/a/5fcaee5987ba901040c86ee9/w800" alt="About image 1"> */}
          </div>

          <div className="bg-squares"></div>
        </div>
      </div>
      </div>
      
    </section>
  );
}
