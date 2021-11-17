import React from "react";
import { Card, CardContent, Container, Typography } from "@mui/material";

import { Link, useHistory } from "react-router-dom";
import LinkM from "@mui/material/Link";
import leftarr from "../img/LeftArrow.png";

const Articlepage = () => {
  let history = useHistory();
  // @ts-ignore
  let { title, content, url } = history.location.state;
  console.log(url);
  
  return (
    <Container maxWidth="lg" style={{ marginTop: 100 }}>
      <Card elevation={0}>
        <CardContent className="article">
          <Typography
            className="article_title"
            gutterBottom
            variant="h5"
            component="p"
          >
            {title}
          </Typography>
          <Typography className="article_content" gutterBottom component="p">
            {content}
          </Typography>
          <Typography gutterBottom component="p">
            Current API does not provide all information about news. All
            information you can see <LinkM href={url} target="_blank">here</LinkM>
          </Typography>
        </CardContent>
      </Card>
      <Link className="article_back" to={`/`}>
        <img src={leftarr} alt="leftarr" /> Back to Homepage
      </Link>
    </Container>
  );
};

export default Articlepage;
