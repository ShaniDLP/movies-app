import { Card, Badge, Image, Typography } from "antd";
import type { FC } from "react";
import type { Movie } from "../../types";
import { formatRating, getRatingColor, extractYear } from "../../utils";
import { IMAGE_BASE_URL, Fallback } from "../../constants";
import { GenreTags } from "../Genres/GenreTags";

const { Meta } = Card;
const { Text } = Typography;

type Props = {
  movie: Movie;
  onClick?: () => void;
};

export const MovieCard: FC<Props> = ({ movie, onClick }) => {
  const { title, poster_path, vote_average, release_date, genre_ids } = movie;

  const rating = formatRating(vote_average);
  const badgeColor = getRatingColor(rating);
  const releaseYear = extractYear(release_date);

  const src = poster_path ? `${IMAGE_BASE_URL}${poster_path}` : undefined;

  return (
    <Card
      hoverable
      onClick={onClick}
      style={{
        width: "100%",
        maxWidth: 200,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily: "Mulish, sans-serif",
      }}
      styles={{
        body: {
          padding: 12,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        },
      }}
      cover={
        <Image
          alt={title}
          src={src}
          style={{ height: 300, objectFit: "cover", width: "100%" }}
          fallback={Fallback}
          preview={false}
        />
      }
    >
      <Meta
        title={title}
        description={
          <>
            <Badge
              count={rating ?? "N/A"}
              style={{
                backgroundColor: badgeColor,
                color: "#fff",
                fontWeight: "bold",
                minWidth: 32,
                height: 24,
                lineHeight: "24px",
              }}
            />
            <div style={{ marginTop: 8 }}>
              <Text type="secondary">{releaseYear}</Text>
            </div>
            <div style={{ marginTop: 8 }}>
              <GenreTags genreIds={genre_ids} />
            </div>
          </>
        }
      />
    </Card>
  );
};
