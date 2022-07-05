function Transaction (props) {
  const {type, date, description, value} = props;
  console.log(type);
  return (
    <div>
      <div>
        <p>{date}</p>
        <p>{description}</p>
      </div>
      <p>{value}</p> {/* type => deposit/withdraw */}
    </div>
  )
}

export default Transaction;