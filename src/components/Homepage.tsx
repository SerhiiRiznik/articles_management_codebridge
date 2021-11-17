import React from "react";
import { CircularProgress, Container, Paper, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import Article from "./Article";
import Header from "./Header";
import { RootState } from "./state/store";
import { articleType } from "../App";
const Homepage = () => {
  const { loading, articles, error, search } = useSelector((state: RootState) => state.app);
  const filteredArticles = articles.filter((article: articleType) => {
    if (search) {
      if (article.description !== null) {
        return (
          article.title.toLowerCase().includes(search.toLowerCase()) ||
          article.description.toLowerCase().includes(search.toLowerCase())
        )
      } return
    }
    return article;
  });
  return (
    <>
      <Header></Header>
      <Container maxWidth="lg">
        <Paper className="count_result" elevation={0}>
          Result: {filteredArticles.length}
        </Paper>
        <Box className="cards">
          {loading ? (
            <CircularProgress color="secondary" />
          ) : filteredArticles.length > 0 ? (
            filteredArticles.map((article: articleType, index:number) => {
              return (
                <Article
                  key={index}
                  title={article.title}
                  description={article.description}
                  id={index + 1}
                  content={article.content}
                  url={article.url}
                />
              );
            })
          ) : (
             <Box>
              <Typography className='no-result' variant="h6">
                News not found
              </Typography>
            </Box> 
          )}
        </Box>
      </Container>
    </>
  );
};
export default Homepage;
