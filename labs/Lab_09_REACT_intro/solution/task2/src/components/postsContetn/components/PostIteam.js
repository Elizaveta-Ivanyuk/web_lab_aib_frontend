export const PostIteam = ({ titel, description, like, likePost }) => {
  const LikeColor = like ? "crimson" : "black";

  return (
    <div className="post">
      <div>
        <h2>{titel}</h2>
        <p>{description}</p>
        <button onClick={likePost} style={{ color: LikeColor }}>
          Like post
        </button>
      </div>
    </div>
  );
};
