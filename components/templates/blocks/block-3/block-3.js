import {CenterAlignedHeadline} from "@/elements";

export default function Block3({ content }) {
  // if (!content) return <></>;
  let { attributes } = content;
  return (
    <section id="block-3" className="template">
      <CenterAlignedHeadline attributes={attributes} />
    </section>
  );
}
