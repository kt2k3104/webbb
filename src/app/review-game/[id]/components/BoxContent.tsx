import { Image } from "antd";

const BoxContent = ({ data }: any) => {
  return (
    <div>
      <h2 style={{ fontSize: "20px", fontWeight: "700" }}>{data.title}</h2>

      <div style={{ marginTop: "20px" }}>
        {data.contents.map((item: string, index: number) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
      {data.image !== "" && (
        <div style={{ margin: "15px 0 50px", textAlign: "center" }}>
          <Image src={data.image} alt="" width="80%" />
        </div>
      )}
    </div>
  );
};
export default BoxContent;
//
