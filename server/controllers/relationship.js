/*
    Description: This file is for relationship queries.
    File: /controller/relationship.js
    Created Date: 24/01/2025
    Author: Jagdeep Tiwana
 */

export const getRelationships = (req, res) => {
  const queryGetRelationships =
    "SELECT followingUserId FROM relationships WHERE followUserId = ?";
  database.query(
    queryGetRelationships,
    [req.query.followUserId],
    (error, data) => {
      if (error) {
        res.status(500).json(error);
      } else {
        res
          .status(200)
          .json(data.map((relationship) => relationship.followingUserId));
      }
    }
  );
};

export const addRelationship = (req, res) => {
  // Acess to post from token
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "SECRET", (error, userInfo) => {
    if (error) return res.status(403).json("Invalid token!");
    const queryAddRelationships =
      "INSERT INTO likes (userId, postId) VALUES (?)";

    const values = [userInfo.id, req.query.postId];

    database.query(queryAddLike, [values], (error, data) => {
      if (error) {
        res.status(500).json(error);
      } else {
        res.status(200).json("Liked");
      }
    });
  });
};

export const deleteRelationship = (req, res) => {
  // Acess to post from token
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "SECRET", (error, userInfo) => {
    if (error) return res.status(403).json("Invalid token!");

    const queryDeleteRelationship =
      "DELETE FROM likes WHERE userId = ? AND postId = ?";

    const values = [userInfo.id, req.query.postId];

    database.query(queryDeleteLike, [values], (error, data) => {
      if (error) {
        res.status(500).json(error);
      } else {
        res.status(200).json("Ukliked!!");
      }
    });
  });
};
