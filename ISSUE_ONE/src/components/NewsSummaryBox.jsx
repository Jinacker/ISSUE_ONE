const NewsSummaryBox = ({ press, content }) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px', width: '150px' }}>
      <h4>{press}</h4>
      <p>{content}</p>
    </div>
  );
};

export default NewsSummaryBox;
