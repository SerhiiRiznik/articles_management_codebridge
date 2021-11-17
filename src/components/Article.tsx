import { Card, CardContent, Typography } from "@mui/material";
import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Hightlight } from "./hooks/Hightlight";

import { RootState } from "./state/store";

type ArticleProps = {
  title: string
  description: string
  id: number
  content: string
  url: string
};
const Article = ({ title, description, id, content, url }: ArticleProps) => {
  let history = useHistory();
  const HandleCardClick = () => {
    const location = {
      pathname: `/topic_${id}`,
      state: { title, content, url },
    };
    history.push(location);
  };
  const search  = useSelector((state: RootState) => state.app.search);
  const light = useCallback((str) => {
      return <Hightlight search={search} string={str} />;
  },[search]);
  return (
    <Card onClick={HandleCardClick} elevation={0} className="card">
      <CardContent className="card_content">
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          className="card_content_title">
          {light(title)}
        </Typography>
        <Typography
          className="card_content_text"
          variant="body2"
          color="text.secondary">
          <span>Description:</span>
          <br />
          {light(description)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Article;
