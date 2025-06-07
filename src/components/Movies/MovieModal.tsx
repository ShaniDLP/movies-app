import {
  Modal,
  Typography,
  Divider,
  Image,
  Badge,
  Skeleton,
  Result,
} from "antd";
import type { FC } from "react";
import {
  extractYear,
  formatRating,
  getDirector,
  getRatingColor,
  getTopCast,
} from "../../utils";
import { IMAGE_BASE_URL, Fallback } from "../../constants";
import { GenreTags } from "../Genres/GenreTags";
import { useGetMovieDetailsQuery } from "../../store/api";

const { Title, Text, Paragraph } = Typography;

type Props = {
  visible: boolean;
  movieId: number;
  onClose: () => void;
};

export const MovieModal: FC<Props> = ({ visible, movieId, onClose }) => {
  const {
    data: movie,
    isLoading,
    isError,
  } = useGetMovieDetailsQuery(movieId, {
    skip: !movieId,
  });

  const skeletonImage = (
    <Skeleton.Image
      style={{
        width: 200,
        height: 300,
        borderRadius: 8,
      }}
      active
    />
  );

  if (isError) {
    return (
      <Modal open={visible} onCancel={onClose} footer={null} width={700}>
        <Result
          status="error"
          title="Failed to load movie details"
          subTitle="Please try again later or choose another movie."
        />
      </Modal>
    );
  }

  const {
    title,
    vote_average,
    release_date,
    poster_path,
    genres,
    runtime,
    original_language,
    overview,
    credits,
  } = movie || {};

  const rating = formatRating(vote_average ?? 0);
  const badgeColor = getRatingColor(rating);
  const releaseYear = extractYear(release_date ?? "");
  const director = getDirector(credits ?? { cast: [], crew: [] });
  const topCast = getTopCast(credits ?? { cast: [], crew: [] });

  const src = poster_path ? `${IMAGE_BASE_URL}${poster_path}` : Fallback;

  return (
    <Modal
      open={visible}
      onCancel={onClose}
      footer={null}
      width={700}
      styles={{
        body: {
          display: "flex",
          gap: 24,
          alignItems: "flex-start",
          padding: 24,
          fontFamily: "Mulish, sans-serif",
        },
      }}
    >
      {isLoading ? (
        skeletonImage
      ) : (
        <Image
          alt={title}
          src={src}
          fallback={Fallback}
          width={200}
          height={300}
          style={{ objectFit: "cover", borderRadius: 8 }}
          preview={false}
        />
      )}

      <div
        style={{
          flex: 1,
          minWidth: 0,
          minHeight: 300,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        {isLoading ? (
          <Skeleton active paragraph={{ rows: 10 }} />
        ) : (
          <>
            <Title level={2}>{title}</Title>

            <div style={{ marginBottom: 12 }}>
              <Text strong>Release Year:</Text>{" "}
              <Text>{releaseYear ?? "N/A"}</Text>
            </div>

            <div style={{ marginBottom: 12 }}>
              <Text strong>Rating:</Text>{" "}
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
            </div>

            <div style={{ marginBottom: 12 }}>
              <Text strong>Genres:</Text>
              <div style={{ marginTop: 4 }}>
                {genres?.length ? (
                  <GenreTags
                    genreIds={genres.map((g) => g.id)}
                    forceWrap
                    limit={5}
                  />
                ) : (
                  <Text>N/A</Text>
                )}
              </div>
            </div>

            <div style={{ marginBottom: 12 }}>
              <Text strong>Runtime:</Text>{" "}
              <Text>
                {typeof runtime === "number" && runtime > 0
                  ? `${runtime} min`
                  : "N/A"}
              </Text>
            </div>

            <div style={{ marginBottom: 12 }}>
              <Text strong>Language:</Text>{" "}
              <Text>{original_language?.toUpperCase() || "N/A"}</Text>
            </div>

            <div style={{ marginBottom: 12 }}>
              <Text strong>Director:</Text>{" "}
              <Text>{director?.name ?? "N/A"}</Text>
            </div>

            <div style={{ marginBottom: 12 }}>
              <Text strong>Top Cast:</Text>{" "}
              <Text>{topCast.map((c) => c.name).join(", ") || "N/A"}</Text>
            </div>

            <Divider />

            <div>
              <Text strong>Description:</Text>
              <Paragraph style={{ marginTop: 8 }}>
                {overview || "No description available."}
              </Paragraph>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
};
