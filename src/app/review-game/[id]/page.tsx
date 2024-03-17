import Content from "./components/Content";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const ReviewGamePage = (props: any) => {
  const { params } = props;
  console.log(params);

  return (
    <div style={{ padding: "30px 100px" }}>
      <Header />
      <div style={{ marginTop: "15px" }} className="row">
        <Content />
        <Sidebar />
      </div>
    </div>
  );
};

export default ReviewGamePage;
