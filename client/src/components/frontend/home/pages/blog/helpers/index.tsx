import React from "react";
import uniqid from "uniqid";
import { Link as LinkRouter } from "react-router-dom";
import { Line, BlogModal, Image, Link, Text } from "~/src/components/ui";

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
          {`${item.description.substr(0, 170)}...`}
        </Text>
        <Line className="align-item-flex-start">
          <Line.SmallLine />
        </Line>
      </BlogModal>
    )
  );
