import { PageHeader } from "@ant-design/pro-layout";
import { VideoCameraOutlined } from "@ant-design/icons";

const headerStyle: React.CSSProperties = {
  height: "100px",
  background: "#0a1f44",
  borderBottom: "2px solid #1e3a8a",
  padding: "0 40px",
  display: "flex",
  alignItems: "center",
  fontFamily: "Mulish, sans-serif",
};

const titleStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  fontSize: "2rem",
  fontWeight: 600,
  color: "#e0f2ff",
  fontFamily: "Mulish, sans-serif",
  textShadow: "1px 1px 3px rgba(0,0,0,0.7)",
};

const iconStyle: React.CSSProperties = {
  fontSize: "2.4rem",
  marginRight: "16px",
  color: "#3abff8",
  textShadow: "1px 1px 2px black",
};

export const Header = () => {
  return (
    <PageHeader
      ghost={false}
      title={
        <span style={titleStyle}>
          <VideoCameraOutlined style={iconStyle} />
          MoviesCity
        </span>
      }
      style={headerStyle}
    />
  );
};
