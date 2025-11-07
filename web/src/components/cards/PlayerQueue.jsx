import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { Fragment, useState } from "react";
import { Separator } from "../ui/separator";
import { useQuery } from "@tanstack/react-query";
import { GetMusicList } from "@/api/GetMusicList";

const PlayerQueue = ({
  albumId,
  setMusicId,
  setTitle,
  setArtist,
  setPlayingAlbum,
}) => {
  const query = useQuery({
    queryKey: ["playerQueue", albumId],
    queryFn: () => GetMusicList({ albumId }),
    enabled: Boolean(albumId),
  });

  return (
    <Card className="border w-64 py-4 overflow-y-auto h-90 gap-3">
      {query && query.data
        ? query.data.map((songs) => (
            <Fragment key={songs.ID}>
              <CardHeader
                className="flex flex-row"
                onClick={() => {
                  setMusicId(songs.ID);
                  setTitle(songs.Title);
                  setArtist(songs.ArtistName);
                  setPlayingAlbum(albumId);
                }}
              >
                <CardTitle className="my-auto">{songs.TrackNumber}</CardTitle>
                <Separator orientation="vertical" />
                <div className="flex flex-box flex-col" key={songs.ID}>
                  <CardTitle>{songs.Title}</CardTitle>
                  <CardDescription>{songs.ArtistName}</CardDescription>
                </div>
              </CardHeader>
              <Separator className="data-[orientation=horizontal]:w-auto mx-5" />
            </Fragment>
          ))
        : null}
    </Card>
  );
};

export default PlayerQueue;
