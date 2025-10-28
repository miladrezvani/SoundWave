import React, { useEffect } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useInfiniteQuery } from "@tanstack/react-query";
import { GetAlbums } from "@/api/GetAlbumsMetaData";
import { useInView } from "react-intersection-observer";

const Albums = () => {
  const {
    data,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["ablums"],
    queryFn: ({ pageParam = 1 }) => GetAlbums({ pageParam }),
    getNextPageParam: (LastPage) => LastPage.NextPage,
  });
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });
  useEffect(() => {
    console.log("jasijcoasjocjaojcj   ", inView);
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  return (
    <Card className="py-2 w-120 overflow-y-auto h-120 gap-0">
      <Input type="search" placeholder="search" className="mb-2 w-40 mx-auto" />
      <div className="grid grid-cols-3">
        {data && data.pages
          ? data.pages
              .flatMap((p) => p.MetaData ?? [])
              .map((data) => (
                <div>
                  <Button
                    variant="ghost"
                    className="flex flex-box flex-col h-40 w-40 justify-end items-center relative"
                    key={data.ID}
                  >
                    <img
                      className="absolute h-40 w-40"
                      src={`http://localhost:8080/get/albums/art?album_id=${data.ID}`}
                      alt={data.AlbumName}
                    ></img>
                    <p className="z-50">{data.AlbumName}</p>
                  </Button>
                </div>
              ))
          : null}
        <div ref={ref} className="h-1" />
        {isFetchingNextPage && <p className="mt-2 text-center">Loading....</p>}
      </div>
    </Card>
  );
};

export default Albums;
