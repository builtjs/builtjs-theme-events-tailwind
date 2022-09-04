import { withRouter } from "next/router";
import { getConfig, getItems } from "@builtjs/theme";
import Page from "../../theme/page";
import { pages } from "../../theme/constants";

export default withRouter(Page);

export async function getStaticPaths() {
  const allItems = await getItems('event-item');
  return {
    paths: allItems.items.map(({ attributes }) => `/event-items/${attributes.slug}`) ?? [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const config = await getConfig(pages.EVENT_ARTICLE);
  config.params = params;
  return {
    props: { config }
  };
}