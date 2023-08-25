import React from 'react';

const Card = ({
  card_title,
  data,
  data_type,
  data_value,
  button,
  button_name,
  link,
  link_name,
  redirect,
}) => {
  return (
    <div className="card">
      <h3>{card_title}</h3>
      {data && (
        <div className={`card-data ${data_type}`}>
          {data_type === 'progress' ? (
            <progress value={data_value} max="100" />
          ) : data_type === 'number' ? (
            <p>{data_value}</p>
          ) : data_type === 'text' ? (
            <p>{data_value}</p>
          ) : data_type === 'tags' ? (
            data_value.map(tag => <span key={tag}>{tag}</span>)
          ) : data_type === 'image' ? (
            <img src={data_value} alt={card_title} />
          ) : null}
        </div>
      )}
      {button && <button>{button_name}</button>}
      {link && <a href={redirect}>{link_name}</a>}
    </div>
  );
};

export default Card;
