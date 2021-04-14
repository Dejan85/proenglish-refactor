import React from "react";
import uniqid from "uniqid";
import { Link as LinkRouter } from "react-router-dom";
import { Line, BlogModal, Image, Link, Text } from "~/src/components/ui";
import { FormatTime } from "~/src/utils/moment";
import { SubStr } from "~/src/utils/subStr";

export const renderModal = (data: object[]): JSX.Element[] =>
  data.slice(0, 4).map(
    (item: any): JSX.Element => (
      <BlogModal key={uniqid()}>
        <Image
          alt="img"
          src={item.photo}
          type="base64"
          className="height--30rem"
        />
        <Link as={LinkRouter} className="no-background-color modal-link" to="/">
          {item.title}
        </Link>
        <Text as="p" className="blog-modal-text">
          <SubStr>{item.description}</SubStr>
        </Text>
        <Line className="align-item-flex-start">
          <Line.SmallLine />
        </Line>
        <Text as="span">
          <FormatTime>{item.created}</FormatTime>
        </Text>
      </BlogModal>
    )
  );
