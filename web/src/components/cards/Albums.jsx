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
import { GetAlbumsMetaData } from "@/api/GetAlbumsMetaData";
import { useInView } from "react-intersection-observer";
import "../../styles/Marquee.css";

const Albums = ({ setAlbum }) => {
  const {
    data,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["ablums"],
    queryFn: ({ pageParam = 1 }) => GetAlbumsMetaData({ pageParam }),
    getNextPageParam: (LastPage) => {
      return LastPage.NextPage != 0 ? LastPage.NextPage : undefined;
    },
  });

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage]);

  return (
    <Card className="py-0 overflow-y-auto h-120 gap-0">
      <div className="flex justify-content-center z-99 w-120 absolute">
        <Input
          type="search"
          placeholder="search"
          className="bg-white w-40 mx-auto my-2"
        />
      </div>
      <div className="grid grid-cols-3">
        {data && data.pages
          ? data.pages
              .flatMap((p) => p.MetaData ?? [])
              .map((data) => (
                <div key={data.ID}>
                  <Button
                    variant="ghost"
                    className="flex flex-box flex-col py-0 rounded-none h-40 w-40 justify-end items-center relative overflow-x-hidden"
                    onClick={() => setAlbum(data.ID)}
                  >
                    <img
                      className="absolute h-40 w-40"
                      src={`/api/get/albums/art?album_id=${data.ID}`}
                      alt={data.AlbumName}
                    ></img>
                    <div className="marquee">
                      <span className="marquee-item">{data.AlbumName}</span>
                    </div>
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
