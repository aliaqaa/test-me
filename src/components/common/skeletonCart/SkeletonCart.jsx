import React from "react";
import Skeleton from "react-loading-skeleton";

function SkeletonCart() {
  return (
    <div className="p-4 border rounded flex items-center justify-center ">
      <Skeleton
        height={150}
        width={300}
      />
      <Skeleton count={2} style={{ marginTop: "10px" }} />
    </div>
  );
}

export default SkeletonCart;
