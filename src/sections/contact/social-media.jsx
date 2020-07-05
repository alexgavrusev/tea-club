import React from "react";

import Box from "components/box";
import { ListItem, Link } from "components/typography";

const Icon = (props) => <Box as="img" width={48} height={48} {...props} />;

const SocialMedia = ({ image, href, ...props }) => (
  <ListItem {...props}>
    <Link href={href}>
      <Icon src={image} />
    </Link>
  </ListItem>
);

export default SocialMedia;
