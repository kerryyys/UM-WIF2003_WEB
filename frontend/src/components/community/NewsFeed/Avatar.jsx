function Avatar({ src, alt }) {
  return (
    <div className="avatar-container">
      <img className="avatar rounded-full" src={src} alt={alt} />
    </div>
  );
}

export default Avatar;
