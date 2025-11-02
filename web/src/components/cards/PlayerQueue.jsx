import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { Separator } from "../ui/separator";
import { useQuery } from "@tanstack/react-query";
import { GetMusicList } from "@/api/GetMusicList";

const PlayerQueue = ({ album_id }) => {
  const query = useQuery({
    queryKey: ["playerQueue", album_id],
    queryFn: () => GetMusicList({ album_id }),
  });

  return (
    <Card className="border w-64 py-4 overflow-y-auto h-90 gap-3">
      {query && query.data
        ? query.data.map((songs) => (
            <>
              <CardHeader className="flex flex-row">
                <CardTitle className="my-auto">{songs.TrackNumber}</CardTitle>
                <Separator orientation="vertical" />
                <div className="flex flex-box flex-col">
                  <CardTitle>{songs.Title}</CardTitle>
                  <CardDescription>{songs.ArtistName}</CardDescription>
                </div>
              </CardHeader>
              <Separator className="data-[orientation=horizontal]:w-auto mx-5" />
            </>
          ))
        : null}
    </Card>
  );
};

export default PlayerQueue;
