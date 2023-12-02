export const PostIteam = ({ titel, description, like, likePost, DeletPost,tag }) => {
  const LikeColor = like ? "crimson" : "black";

  return (
    <div className="post">
      <div>
        <h2>{titel} {tag}</h2>
        <p>{description}</p>
        <button onClick={likePost} style={{ color: LikeColor }}>
          Like post
        </button>
      </div>
      <button style={{color:'crimson'}} onClick={DeletPost}>Удалить</button>
    </div>
  );
};
