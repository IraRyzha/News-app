import { INews } from "@/entities/news/index.js";
import NewsBanner from "@/entities/news/ui/NewsBanner/NewsBanner.js";
import withSkeleton from "@/shared/hocs/withSkeleton.js";
import styles from "./styles.module.css";

interface Props {
  banners?: INews[] | null;
}

function BannersList({ banners }: Props) {
  return (
    <ul className={styles.banners}>
      {banners?.map((banner) => {
        return <NewsBanner key={banner.id} item={banner} />;
      })}
    </ul>
  );
}

const BannersListWithSkeleton = withSkeleton<Props>(
  BannersList,
  "banner",
  10,
  "row"
);

export default BannersListWithSkeleton;
