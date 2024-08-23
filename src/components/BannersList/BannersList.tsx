import withSkeleton from "../../helpers/hocs/withSkeleton.js";
import { INews } from "../../interfaces/index.js";
import NewsBanner from "../NewsBanner/NewsBanner.js";
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
