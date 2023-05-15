import ContentLoader from 'react-content-loader';

export const EditorsSkeleton = () => (
  <ContentLoader
    speed={2}
    width={1200}
    height={908}
    viewBox="0 0 1200 908"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    //Operation Editor Skeleton
    <rect x="5" y="580" rx="5" ry="5" width="520" height="22" />
    <rect x="5" y="620" rx="5" ry="5" width="520" height="400" />
    <rect x="5" y="535" rx="5" ry="5" width="80" height="40" />
    <rect x="95" y="535" rx="5" ry="5" width="80" height="40" />
    <rect x="5" y="15" rx="5" ry="5" width="520" height="22" />
    <rect x="5" y="55" rx="10" ry="10" width="520" height="460" />
    <rect x="570" y="15" rx="5" ry="5" width="30" height="29" />
    //Response Skeleton
    <rect x="650" y="14" rx="5" ry="5" width="520" height="22" />
    <rect x="650" y="56" rx="5" ry="5" width="520" height="850" />
  </ContentLoader>
);
