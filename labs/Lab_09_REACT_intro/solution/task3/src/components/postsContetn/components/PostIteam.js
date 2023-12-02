export const PostIteam = ({ titel, description, like, likePost, DeletPost }) => {
  const LikeColor = like ? "F" : "black";

  return (
    <div className="post">
      <div>
        <h2>{titel}</h2>
        <p>{description}</p>
        <button onClick={likePost} style={{ color: LikeColor }}>
          Like post
        </button>
      </div>
      <button style={{color:'crimson'}} onClick={DeletPost}>Удалить</button>
    </div>
  );
};
