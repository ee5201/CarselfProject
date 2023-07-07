import PreminumITypeDetailPresenter from "./TYpeDetail.presenter";

export default function TypeDetailContatiner(props) {
  const ContentsSplit = String(props.data?.fetchMbti.contents).split(".");
  const carImage = String(props.data?.fetchMbti.carMain[0].fileimage.url);
  return (
    <PreminumITypeDetailPresenter
      data={props.data}
      carImage={carImage}
      ContentsSplit={ContentsSplit}
    />
  );
}
