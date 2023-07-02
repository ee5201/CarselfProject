export default function PreminumITypeDetailPresenter(props) {
  return (
    <>
      <div>{props.data?.fetchMbti.name}</div>
      <div>{props.data?.fetchMbti.contents}</div>
    </>
  );
}
