import React, { useState, useEffect } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  // Funzione per fare fetch dei commenti
  const fetchComments = async () => {
    setIsLoading(true); // Imposta lo stato di caricamento
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmNjN2FiYmZkZWUzZDAwMTU5YmRlZjciLCJpYXQiOjE3MjQ2NzY3OTYsImV4cCI6MTcyNTg4NjM5Nn0.Z8Ro8rjrLGdddg-QYpKfpM2Hh1WeoQIExG3WERKDt3w",
          },
        }
      );
      if (response.ok) {
        let comments = await response.json();
        setComments(comments);
        setIsLoading(false);
        setIsError(false);
      } else {
        throw new Error("Errore nella chiamata");
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setIsError(true);
    }
  };

  // Effetto per gestire il montaggio e l'aggiornamento
  useEffect(() => {
    if (asin) {
      fetchComments();
    }
  }, [asin]); // Si esegue quando asin cambia

  return (
    <div className="text-center">
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={asin} />
      <CommentList commentsToShow={comments} />
    </div>
  );
};

export default CommentArea;
